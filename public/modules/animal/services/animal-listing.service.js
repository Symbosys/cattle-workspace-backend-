import { db } from "../../../db/db.js";
import { deleteFromCloudinary } from "../../../config/cloudinary.js";
import { ErrorResponse } from "../../../utils/response.util.js";
export class AnimalListingService {
    /**
     * Count the total number of listings created by the user
     */
    static async countUserListings(ownerId) {
        return await db.cattleListing.count({
            where: { ownerId },
        });
    }
    /**
     * Create animal and listing in a transaction
     */
    static async createListing(ownerId, dto, images) {
        return await db.$transaction(async (tx) => {
            // 1. Resolve State
            let state = await tx.state.findFirst({
                where: { name: { equals: dto.stateName, mode: "insensitive" } },
            });
            if (!state) {
                state = await tx.state.create({
                    data: {
                        name: dto.stateName,
                        stateCode: dto.stateCode || dto.stateName.substring(0, 2).toUpperCase(),
                        country: "India",
                        countryCode: "IN",
                        latitude: dto.stateLatitude ?? null,
                        longitude: dto.stateLongitude ?? null,
                    },
                });
            }
            // 2. Resolve City
            let city = await tx.city.findFirst({
                where: {
                    name: { equals: dto.cityName, mode: "insensitive" },
                    stateId: state.id,
                },
            });
            if (!city) {
                city = await tx.city.create({
                    data: {
                        name: dto.cityName,
                        stateId: state.id,
                        stateCode: state.stateCode || "JH",
                        country: "India",
                        countryCode: "IN",
                        latitude: dto.cityLatitude ?? null,
                        longitude: dto.cityLongitude ?? null,
                    },
                });
            }
            // 3. Resolve Area if provided
            let area = null;
            if (dto.areaName) {
                area = await tx.area.findFirst({
                    where: {
                        name: { equals: dto.areaName, mode: "insensitive" },
                        cityId: city.id,
                    },
                });
                if (!area) {
                    area = await tx.area.create({
                        data: {
                            cityId: city.id,
                            name: dto.areaName,
                            latitude: dto.areaLatitude ?? dto.latitude ?? 0.0,
                            longitude: dto.areaLongitude ?? dto.longitude ?? 0.0,
                        },
                    });
                }
            }
            // 4. Create the Animal record
            const animal = await tx.animal.create({
                data: {
                    ownerId,
                    mainCategoryId: dto.mainCategoryId,
                    subCategoryId: dto.subCategoryId,
                    name: dto.name ?? null,
                    category: dto.category,
                    breed: dto.breed ?? null,
                    ageMonths: dto.ageMonths ?? null,
                    gender: dto.gender ?? null,
                    weightKg: dto.weightKg ?? null,
                    description: dto.description ?? null,
                    doesGiveMilk: dto.doesGiveMilk,
                    dailyMilkProdLtr: dto.dailyMilkProdLtr ?? null,
                    status: "LISTED_FOR_SALE",
                },
            });
            // 5. Calculate listingExpiresAt (30 days from now)
            const listingExpiresAt = new Date();
            listingExpiresAt.setDate(listingExpiresAt.getDate() + 30);
            // 6. Create CattleListing
            const listing = await tx.cattleListing.create({
                data: {
                    ownerId,
                    animalId: animal.id,
                    title: dto.title,
                    description: dto.listingDescription,
                    price: dto.price,
                    latitude: dto.latitude ?? null,
                    longitude: dto.longitude ?? null,
                    listingExpiresAt,
                    status: "ACTIVE",
                    location: {
                        create: {
                            stateId: state.id,
                            cityId: city.id,
                            ...(area && { areaId: area.id }),
                        },
                    },
                    images: {
                        create: images.map((img, index) => ({
                            url: img,
                            sortOrder: index,
                        })),
                    },
                },
                include: {
                    animal: true,
                    location: {
                        include: {
                            state: true,
                            city: true,
                            area: true,
                        },
                    },
                    images: true,
                },
            });
            return listing;
        });
    }
    /**
     * Update animal and listing in a transaction
     */
    static async updateListing(ownerId, listingId, dto, newImages) {
        return await db.$transaction(async (tx) => {
            // 1. Fetch listing and check authorization
            const listing = await tx.cattleListing.findUnique({
                where: { id: listingId },
                include: { animal: true, location: true, images: true },
            });
            if (!listing) {
                throw new ErrorResponse("Listing not found", 404);
            }
            if (listing.ownerId !== ownerId) {
                throw new ErrorResponse("You are not authorized to update this listing", 403);
            }
            // 2. Update Animal details
            const animalUpdateData = {
                ...(dto.mainCategoryId !== undefined && { mainCategoryId: dto.mainCategoryId }),
                ...(dto.subCategoryId !== undefined && { subCategoryId: dto.subCategoryId }),
                ...(dto.name !== undefined && { name: dto.name ?? null }),
                ...(dto.category !== undefined && { category: dto.category }),
                ...(dto.breed !== undefined && { breed: dto.breed ?? null }),
                ...(dto.ageMonths !== undefined && { ageMonths: dto.ageMonths ?? null }),
                ...(dto.gender !== undefined && { gender: dto.gender ?? null }),
                ...(dto.weightKg !== undefined && { weightKg: dto.weightKg ?? null }),
                ...(dto.description !== undefined && { description: dto.description ?? null }),
                ...(dto.doesGiveMilk !== undefined && { doesGiveMilk: dto.doesGiveMilk }),
                ...(dto.dailyMilkProdLtr !== undefined && { dailyMilkProdLtr: dto.dailyMilkProdLtr ?? null }),
            };
            await tx.animal.update({
                where: { id: listing.animalId },
                data: animalUpdateData,
            });
            // 3. Update Location if required
            const needsLocationUpdate = dto.stateName !== undefined ||
                dto.cityName !== undefined ||
                dto.areaName !== undefined;
            if (needsLocationUpdate && listing.location) {
                const currentState = await tx.state.findUnique({ where: { id: listing.location.stateId } });
                const currentCity = await tx.city.findUnique({ where: { id: listing.location.cityId } });
                const stateName = dto.stateName ?? currentState?.name;
                const cityName = dto.cityName ?? currentCity?.name;
                if (!stateName || !cityName) {
                    throw new ErrorResponse("State name and City name are required for location update", 400);
                }
                // Resolve State
                let state = await tx.state.findFirst({
                    where: { name: { equals: stateName, mode: "insensitive" } },
                });
                if (!state) {
                    state = await tx.state.create({
                        data: {
                            name: stateName,
                            stateCode: dto.stateCode || stateName.substring(0, 2).toUpperCase(),
                            country: "India",
                            countryCode: "IN",
                            latitude: dto.stateLatitude ?? null,
                            longitude: dto.stateLongitude ?? null,
                        },
                    });
                }
                // Resolve City
                let city = await tx.city.findFirst({
                    where: {
                        name: { equals: cityName, mode: "insensitive" },
                        stateId: state.id,
                    },
                });
                if (!city) {
                    city = await tx.city.create({
                        data: {
                            name: cityName,
                            stateId: state.id,
                            stateCode: state.stateCode || "JH",
                            country: "India",
                            countryCode: "IN",
                            latitude: dto.cityLatitude ?? null,
                            longitude: dto.cityLongitude ?? null,
                        },
                    });
                }
                // Resolve Area if provided
                let area = null;
                const areaName = dto.areaName !== undefined ? dto.areaName : (listing.location.areaId ? (await tx.area.findUnique({ where: { id: listing.location.areaId } }))?.name : null);
                if (areaName) {
                    area = await tx.area.findFirst({
                        where: {
                            name: { equals: areaName, mode: "insensitive" },
                            cityId: city.id,
                        },
                    });
                    if (!area) {
                        area = await tx.area.create({
                            data: {
                                cityId: city.id,
                                name: areaName,
                                latitude: dto.areaLatitude ?? dto.latitude ?? 0.0,
                                longitude: dto.areaLongitude ?? dto.longitude ?? 0.0,
                            },
                        });
                    }
                }
                await tx.listingLocation.update({
                    where: { listingId: listing.id },
                    data: {
                        stateId: state.id,
                        cityId: city.id,
                        areaId: area ? area.id : null,
                    },
                });
            }
            // 4. Update Images: if user updates images (newImages provided), delete old images from Cloudinary and DB, and save new ones.
            if (newImages && newImages.length > 0) {
                // Delete all old images from Cloudinary
                for (const img of listing.images) {
                    const urlObj = img.url;
                    if (urlObj && urlObj.public_id) {
                        await deleteFromCloudinary(urlObj.public_id).catch((err) => {
                            console.error(`Failed to delete Cloudinary image: ${urlObj.public_id}`, err);
                        });
                    }
                }
                // Delete all old images from DB
                await tx.listingImage.deleteMany({
                    where: { listingId },
                });
                // Save new ones in DB
                await tx.listingImage.createMany({
                    data: newImages.map((img, index) => ({
                        listingId,
                        url: img,
                        sortOrder: index,
                    })),
                });
            }
            else if (dto.keepImageIds) {
                // Otherwise, handle selective deletes of images if keepImageIds is provided
                const imagesToDelete = listing.images.filter((img) => !dto.keepImageIds.includes(img.id));
                for (const img of imagesToDelete) {
                    const urlObj = img.url;
                    if (urlObj && urlObj.public_id) {
                        await deleteFromCloudinary(urlObj.public_id).catch((err) => {
                            console.error(`Failed to delete Cloudinary image: ${urlObj.public_id}`, err);
                        });
                    }
                    await tx.listingImage.delete({ where: { id: img.id } });
                }
            }
            // 6. Update CattleListing details
            const updatedListing = await tx.cattleListing.update({
                where: { id: listingId },
                data: {
                    ...(dto.title !== undefined && { title: dto.title }),
                    ...(dto.listingDescription !== undefined && { description: dto.listingDescription }),
                    ...(dto.price !== undefined && { price: dto.price }),
                    ...(dto.latitude !== undefined && { latitude: dto.latitude ?? null }),
                    ...(dto.longitude !== undefined && { longitude: dto.longitude ?? null }),
                },
                include: {
                    animal: true,
                    location: {
                        include: {
                            state: true,
                            city: true,
                            area: true,
                        },
                    },
                    images: true,
                },
            });
            return updatedListing;
        });
    }
    /**
     * Get active listings by nearest city
     */
    static async getListingsByLocation(lat, lng, page, limit, categoryId) {
        // Fetch all cities with coordinates
        const cities = await db.city.findMany({
            where: {
                latitude: { not: null },
                longitude: { not: null },
            },
            select: {
                id: true,
                name: true,
                stateId: true,
                latitude: true,
                longitude: true,
            }
        });
        if (cities.length === 0) {
            return { city: null, listings: [], total: 0 };
        }
        // Find nearest city using Haversine formula
        let nearestCity = null;
        let minDistance = Infinity;
        for (const city of cities) {
            const distance = getHaversineDistance(lat, lng, city.latitude, city.longitude);
            if (distance < minDistance) {
                minDistance = distance;
                nearestCity = city;
            }
        }
        // If the nearest city is too far (e.g. more than 50 km), we assume there are no listings in that city
        const DISTANCE_THRESHOLD_KM = 50;
        if (!nearestCity || minDistance > DISTANCE_THRESHOLD_KM) {
            return { city: null, listings: [], total: 0 };
        }
        const skip = (page - 1) * limit;
        const [listings, total] = await Promise.all([
            db.cattleListing.findMany({
                where: {
                    status: "ACTIVE",
                    location: {
                        cityId: nearestCity.id,
                    },
                    ...(categoryId ? { animal: { mainCategoryId: categoryId } } : {}),
                },
                include: {
                    animal: true,
                    location: {
                        include: {
                            state: true,
                            city: true,
                            area: true,
                        },
                    },
                    images: true,
                },
                skip,
                take: limit,
                orderBy: { createdAt: 'desc' },
            }),
            db.cattleListing.count({
                where: {
                    status: "ACTIVE",
                    location: {
                        cityId: nearestCity.id,
                    },
                    ...(categoryId ? { animal: { mainCategoryId: categoryId } } : {}),
                },
            }),
        ]);
        return {
            city: {
                ...nearestCity,
                id: nearestCity.id,
                stateId: nearestCity.stateId,
            },
            listings,
            total
        };
    }
    /**
     * Get listing by ID with all details
     */
    static async getListingById(id) {
        return await db.cattleListing.findUnique({
            where: { id },
            include: {
                animal: true,
                images: true,
                location: {
                    include: {
                        state: true,
                        city: true,
                        area: true,
                    }
                },
                owner: {
                    select: {
                        id: true,
                        name: true,
                        phone: true,
                        avatarUrl: true,
                    }
                }
            }
        });
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
//# sourceMappingURL=animal-listing.service.js.map