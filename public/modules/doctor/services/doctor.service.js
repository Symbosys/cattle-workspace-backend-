import { db } from "../../../db/db.js";
import { ErrorResponse } from "../../../utils/response.util.js";
export class DoctorService {
    /**
     * Register a user as a doctor
     */
    static async registerDoctor(userId, doctorData, locationData) {
        return await db.$transaction(async (tx) => {
            // 1. Check if user is already a doctor
            const existingDoctor = await tx.doctorProfile.findUnique({
                where: { userId },
            });
            if (existingDoctor) {
                throw new ErrorResponse("User is already registered as a doctor", 400);
            }
            // 2. Resolve State
            let state = await tx.state.findFirst({
                where: { name: { equals: locationData.stateName, mode: "insensitive" } },
            });
            if (!state) {
                state = await tx.state.create({
                    data: {
                        name: locationData.stateName,
                        stateCode: locationData.stateCode || locationData.stateName.substring(0, 2).toUpperCase(),
                        country: "India",
                        countryCode: "IN",
                        latitude: locationData.stateLatitude ?? null,
                        longitude: locationData.stateLongitude ?? null,
                    },
                });
            }
            // 3. Resolve City
            let city = await tx.city.findFirst({
                where: {
                    name: { equals: locationData.cityName, mode: "insensitive" },
                    stateId: state.id,
                },
            });
            if (!city) {
                city = await tx.city.create({
                    data: {
                        name: locationData.cityName,
                        stateId: state.id,
                        stateCode: state.stateCode || "JH",
                        country: "India",
                        countryCode: "IN",
                        latitude: locationData.cityLatitude ?? null,
                        longitude: locationData.cityLongitude ?? null,
                    },
                });
            }
            // 4. Create Doctor Profile & Doctor Location
            const doctor = await tx.doctorProfile.create({
                data: {
                    userId,
                    licenseNumber: doctorData.licenseNumber || null,
                    specialization: doctorData.specialization,
                    experienceYears: parseInt(doctorData.experienceYears.toString(), 10),
                    consultationFee: doctorData.consultationFee,
                    qualificationDocUrl: doctorData.qualificationDocUrl || null,
                    doctorLocations: {
                        create: {
                            latitude: locationData.latitude,
                            longitude: locationData.longitude,
                            stateId: state.id,
                            cityId: city.id,
                        }
                    }
                },
                include: {
                    doctorLocations: {
                        include: {
                            state: true,
                            city: true
                        }
                    }
                }
            });
            // 5. Update User role to DOCTOR
            await tx.user.update({
                where: { id: userId },
                data: { role: "DOCTOR" },
            });
            return doctor;
        });
    }
    /**
     * Get doctor profile by ID
     */
    static async getDoctorById(id) {
        return await db.doctorProfile.findUnique({
            where: { id },
            include: {
                user: {
                    select: {
                        id: true,
                        name: true,
                        phone: true,
                        avatarUrl: true,
                        email: true,
                    }
                },
                doctorLocations: {
                    include: {
                        state: true,
                        city: true
                    }
                }
            }
        });
    }
    /**
     * Update doctor profile details
     */
    static async updateDoctor(ownerId, doctorId, doctorData, locationData) {
        return await db.$transaction(async (tx) => {
            // 1. Fetch doctor and check authorization
            const doctor = await tx.doctorProfile.findUnique({
                where: { id: doctorId },
            });
            if (!doctor) {
                throw new ErrorResponse("Doctor profile not found", 404);
            }
            if (doctor.userId !== ownerId) {
                throw new ErrorResponse("You are not authorized to update this doctor profile", 403);
            }
            // 2. Resolve and Update Location if provided
            if (locationData) {
                let state = await tx.state.findFirst({
                    where: { name: { equals: locationData.stateName, mode: "insensitive" } },
                });
                if (!state) {
                    state = await tx.state.create({
                        data: {
                            name: locationData.stateName,
                            stateCode: locationData.stateCode || locationData.stateName.substring(0, 2).toUpperCase(),
                            country: "India",
                            countryCode: "IN",
                            latitude: locationData.stateLatitude ?? null,
                            longitude: locationData.stateLongitude ?? null,
                        },
                    });
                }
                let city = await tx.city.findFirst({
                    where: {
                        name: { equals: locationData.cityName, mode: "insensitive" },
                        stateId: state.id,
                    },
                });
                if (!city) {
                    city = await tx.city.create({
                        data: {
                            name: locationData.cityName,
                            stateId: state.id,
                            stateCode: state.stateCode || "JH",
                            country: "India",
                            countryCode: "IN",
                            latitude: locationData.cityLatitude ?? null,
                            longitude: locationData.cityLongitude ?? null,
                        },
                    });
                }
                const existingLocation = await tx.doctorLocation.findFirst({
                    where: { doctorId },
                });
                if (existingLocation) {
                    await tx.doctorLocation.update({
                        where: { id: existingLocation.id },
                        data: {
                            latitude: locationData.latitude,
                            longitude: locationData.longitude,
                            stateId: state.id,
                            cityId: city.id,
                        },
                    });
                }
                else {
                    await tx.doctorLocation.create({
                        data: {
                            doctorId,
                            latitude: locationData.latitude,
                            longitude: locationData.longitude,
                            stateId: state.id,
                            cityId: city.id,
                        },
                    });
                }
            }
            // 3. Update DoctorProfile fields
            const updatedDoctor = await tx.doctorProfile.update({
                where: { id: doctorId },
                data: {
                    ...(doctorData.licenseNumber !== undefined && { licenseNumber: doctorData.licenseNumber }),
                    ...(doctorData.specialization !== undefined && { specialization: doctorData.specialization }),
                    ...(doctorData.experienceYears !== undefined && { experienceYears: parseInt(doctorData.experienceYears.toString(), 10) }),
                    ...(doctorData.consultationFee !== undefined && { consultationFee: doctorData.consultationFee }),
                    ...(doctorData.qualificationDocUrl !== undefined && { qualificationDocUrl: doctorData.qualificationDocUrl }),
                },
                include: {
                    doctorLocations: {
                        include: {
                            state: true,
                            city: true
                        }
                    }
                }
            });
            return updatedDoctor;
        });
    }
    /**
     * Get all doctors near a location within a specified radius
     */
    static async getDoctorsByLocation(lat, lng, radiusKm, page, limit) {
        // 1. Fetch all doctors with their locations and user profiles
        const doctors = await db.doctorProfile.findMany({
            include: {
                user: {
                    select: {
                        id: true,
                        name: true,
                        phone: true,
                        avatarUrl: true,
                        email: true,
                    }
                },
                doctorLocations: {
                    include: {
                        state: true,
                        city: true
                    }
                }
            }
        });
        // 2. Filter and calculate distance for each doctor
        const doctorsWithDistance = doctors
            .map((doctor) => {
            const location = doctor.doctorLocations[0];
            if (!location || location.latitude === null || location.longitude === null) {
                return null;
            }
            const distance = getHaversineDistance(lat, lng, Number(location.latitude), Number(location.longitude));
            return {
                ...doctor,
                distance,
            };
        })
            .filter((doc) => doc !== null && doc.distance <= radiusKm);
        // 3. Sort by distance (closest first)
        doctorsWithDistance.sort((a, b) => a.distance - b.distance);
        // 4. Paginate results
        const total = doctorsWithDistance.length;
        const startIndex = (page - 1) * limit;
        const paginatedDoctors = doctorsWithDistance.slice(startIndex, startIndex + limit);
        return {
            doctors: paginatedDoctors,
            total,
        };
    }
}
function getHaversineDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the Earth in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}
//# sourceMappingURL=doctor.service.js.map