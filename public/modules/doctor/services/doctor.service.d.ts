export declare class DoctorService {
    /**
     * Register a user as a doctor
     */
    static registerDoctor(userId: string, doctorData: {
        licenseNumber?: string | null;
        specialization: string;
        experienceYears: number;
        consultationFee: number;
        qualificationDocUrl?: any;
    }, locationData: {
        stateName: string;
        stateCode?: string | null;
        stateLatitude?: number | null;
        stateLongitude?: number | null;
        cityName: string;
        cityLatitude?: number | null;
        cityLongitude?: number | null;
        latitude: number;
        longitude: number;
    }): Promise<{
        doctorLocations: ({
            state: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                deletedAt: Date | null;
                latitude: number | null;
                longitude: number | null;
                stateCode: string;
                state: string | null;
                country: string;
                countryCode: string;
                isActive: boolean;
                isHiring: boolean;
            };
            city: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                deletedAt: Date | null;
                latitude: number | null;
                longitude: number | null;
                stateCode: string;
                stateId: string;
                country: string;
                countryCode: string;
                isActive: boolean;
                isHiring: boolean;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            latitude: import("@prisma/client-runtime-utils").Decimal | null;
            longitude: import("@prisma/client-runtime-utils").Decimal | null;
            stateId: string;
            cityId: string;
            doctorId: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        licenseNumber: string | null;
        specialization: string;
        experienceYears: number;
        consultationFee: import("@prisma/client-runtime-utils").Decimal;
        qualificationDocUrl: import("@prisma/client/runtime/client").JsonValue | null;
        isVerified: boolean;
        verificationStatus: import("../../../types/types.js").VerificationStatus;
        listingStatus: import("../../../types/types.js").DoctorListingStatus;
        userId: string;
    }>;
    /**
     * Get doctor profile by ID
     */
    static getDoctorById(id: string): Promise<({
        user: {
            id: string;
            name: string | null;
            email: string | null;
            phone: string;
            avatarUrl: import("@prisma/client/runtime/client").JsonValue;
        };
        doctorLocations: ({
            state: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                deletedAt: Date | null;
                latitude: number | null;
                longitude: number | null;
                stateCode: string;
                state: string | null;
                country: string;
                countryCode: string;
                isActive: boolean;
                isHiring: boolean;
            };
            city: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                deletedAt: Date | null;
                latitude: number | null;
                longitude: number | null;
                stateCode: string;
                stateId: string;
                country: string;
                countryCode: string;
                isActive: boolean;
                isHiring: boolean;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            latitude: import("@prisma/client-runtime-utils").Decimal | null;
            longitude: import("@prisma/client-runtime-utils").Decimal | null;
            stateId: string;
            cityId: string;
            doctorId: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        licenseNumber: string | null;
        specialization: string;
        experienceYears: number;
        consultationFee: import("@prisma/client-runtime-utils").Decimal;
        qualificationDocUrl: import("@prisma/client/runtime/client").JsonValue | null;
        isVerified: boolean;
        verificationStatus: import("../../../types/types.js").VerificationStatus;
        listingStatus: import("../../../types/types.js").DoctorListingStatus;
        userId: string;
    }) | null>;
    /**
     * Update doctor profile details
     */
    static updateDoctor(ownerId: string, doctorId: string, doctorData: {
        licenseNumber?: string | null;
        specialization?: string;
        experienceYears?: number;
        consultationFee?: number;
        qualificationDocUrl?: any;
    }, locationData?: {
        stateName: string;
        stateCode?: string | null;
        stateLatitude?: number | null;
        stateLongitude?: number | null;
        cityName: string;
        cityLatitude?: number | null;
        cityLongitude?: number | null;
        latitude: number;
        longitude: number;
    } | null): Promise<{
        doctorLocations: ({
            state: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                deletedAt: Date | null;
                latitude: number | null;
                longitude: number | null;
                stateCode: string;
                state: string | null;
                country: string;
                countryCode: string;
                isActive: boolean;
                isHiring: boolean;
            };
            city: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                deletedAt: Date | null;
                latitude: number | null;
                longitude: number | null;
                stateCode: string;
                stateId: string;
                country: string;
                countryCode: string;
                isActive: boolean;
                isHiring: boolean;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            latitude: import("@prisma/client-runtime-utils").Decimal | null;
            longitude: import("@prisma/client-runtime-utils").Decimal | null;
            stateId: string;
            cityId: string;
            doctorId: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        licenseNumber: string | null;
        specialization: string;
        experienceYears: number;
        consultationFee: import("@prisma/client-runtime-utils").Decimal;
        qualificationDocUrl: import("@prisma/client/runtime/client").JsonValue | null;
        isVerified: boolean;
        verificationStatus: import("../../../types/types.js").VerificationStatus;
        listingStatus: import("../../../types/types.js").DoctorListingStatus;
        userId: string;
    }>;
    /**
     * Get all doctors near a location within a specified radius
     */
    static getDoctorsByLocation(lat: number, lng: number, radiusKm: number, page: number, limit: number): Promise<{
        doctors: {
            distance: number;
            user: {
                id: string;
                name: string | null;
                email: string | null;
                phone: string;
                avatarUrl: import("@prisma/client/runtime/client").JsonValue;
            };
            doctorLocations: ({
                state: {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    name: string;
                    deletedAt: Date | null;
                    latitude: number | null;
                    longitude: number | null;
                    stateCode: string;
                    state: string | null;
                    country: string;
                    countryCode: string;
                    isActive: boolean;
                    isHiring: boolean;
                };
                city: {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    name: string;
                    deletedAt: Date | null;
                    latitude: number | null;
                    longitude: number | null;
                    stateCode: string;
                    stateId: string;
                    country: string;
                    countryCode: string;
                    isActive: boolean;
                    isHiring: boolean;
                };
            } & {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                latitude: import("@prisma/client-runtime-utils").Decimal | null;
                longitude: import("@prisma/client-runtime-utils").Decimal | null;
                stateId: string;
                cityId: string;
                doctorId: string;
            })[];
            id: string;
            createdAt: Date;
            updatedAt: Date;
            licenseNumber: string | null;
            specialization: string;
            experienceYears: number;
            consultationFee: import("@prisma/client-runtime-utils").Decimal;
            qualificationDocUrl: import("@prisma/client/runtime/client").JsonValue | null;
            isVerified: boolean;
            verificationStatus: import("../../../types/types.js").VerificationStatus;
            listingStatus: import("../../../types/types.js").DoctorListingStatus;
            userId: string;
        }[];
        total: number;
    }>;
}
//# sourceMappingURL=doctor.service.d.ts.map