import type { CreateAnimalListingDto, UpdateAnimalListingDto } from "../schemas/animal-listing.schema.js";
export declare class AnimalListingService {
    /**
     * Count the total number of listings created by the user
     */
    static countUserListings(ownerId: string): Promise<number>;
    /**
     * Create animal and listing in a transaction
     */
    static createListing(ownerId: string, dto: CreateAnimalListingDto, images: {
        public_id: string;
        secure_url: string;
    }[]): Promise<{
        animal: {
            category: string;
            id: string;
            description: string | null;
            status: import("../../../types/types.js").AnimalStatus;
            createdAt: Date;
            updatedAt: Date;
            ownerId: string;
            name: string | null;
            breed: string | null;
            ageMonths: number | null;
            gender: string | null;
            weightKg: import("@prisma/client-runtime-utils").Decimal | null;
            doesGiveMilk: boolean;
            dailyMilkProdLtr: import("@prisma/client-runtime-utils").Decimal | null;
            mainCategoryId: string;
            subCategoryId: string;
        };
        images: {
            id: string;
            createdAt: Date;
            url: import("@prisma/client/runtime/client").JsonValue | null;
            sortOrder: number;
            listingId: string;
        }[];
        location: ({
            state: {
                state: string | null;
                id: string;
                latitude: number | null;
                longitude: number | null;
                deletedAt: Date | null;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                stateCode: string;
                country: string;
                countryCode: string;
                isActive: boolean;
                isHiring: boolean;
            };
            city: {
                id: string;
                latitude: number | null;
                longitude: number | null;
                deletedAt: Date | null;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                stateCode: string;
                stateId: string;
                country: string;
                countryCode: string;
                isActive: boolean;
                isHiring: boolean;
            };
            area: {
                id: string;
                latitude: number;
                longitude: number;
                deletedAt: Date | null;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                cityId: string;
                isActive: boolean;
                isHiring: boolean;
                serviceRadiusKm: number;
                priority: number;
            } | null;
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            stateId: string;
            cityId: string;
            areaId: string | null;
            listingId: string;
        }) | null;
    } & {
        id: string;
        title: string;
        description: string;
        price: import("@prisma/client-runtime-utils").Decimal;
        status: import("../../../types/types.js").ListingStatus;
        latitude: import("@prisma/client-runtime-utils").Decimal | null;
        longitude: import("@prisma/client-runtime-utils").Decimal | null;
        listingExpiresAt: Date;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        ownerId: string;
        animalId: string;
    }>;
    /**
     * Update animal and listing in a transaction
     */
    static updateListing(ownerId: string, listingId: string, dto: UpdateAnimalListingDto, newImages: {
        public_id: string;
        secure_url: string;
    }[]): Promise<{
        animal: {
            category: string;
            id: string;
            description: string | null;
            status: import("../../../types/types.js").AnimalStatus;
            createdAt: Date;
            updatedAt: Date;
            ownerId: string;
            name: string | null;
            breed: string | null;
            ageMonths: number | null;
            gender: string | null;
            weightKg: import("@prisma/client-runtime-utils").Decimal | null;
            doesGiveMilk: boolean;
            dailyMilkProdLtr: import("@prisma/client-runtime-utils").Decimal | null;
            mainCategoryId: string;
            subCategoryId: string;
        };
        images: {
            id: string;
            createdAt: Date;
            url: import("@prisma/client/runtime/client").JsonValue | null;
            sortOrder: number;
            listingId: string;
        }[];
        location: ({
            state: {
                state: string | null;
                id: string;
                latitude: number | null;
                longitude: number | null;
                deletedAt: Date | null;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                stateCode: string;
                country: string;
                countryCode: string;
                isActive: boolean;
                isHiring: boolean;
            };
            city: {
                id: string;
                latitude: number | null;
                longitude: number | null;
                deletedAt: Date | null;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                stateCode: string;
                stateId: string;
                country: string;
                countryCode: string;
                isActive: boolean;
                isHiring: boolean;
            };
            area: {
                id: string;
                latitude: number;
                longitude: number;
                deletedAt: Date | null;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                cityId: string;
                isActive: boolean;
                isHiring: boolean;
                serviceRadiusKm: number;
                priority: number;
            } | null;
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            stateId: string;
            cityId: string;
            areaId: string | null;
            listingId: string;
        }) | null;
    } & {
        id: string;
        title: string;
        description: string;
        price: import("@prisma/client-runtime-utils").Decimal;
        status: import("../../../types/types.js").ListingStatus;
        latitude: import("@prisma/client-runtime-utils").Decimal | null;
        longitude: import("@prisma/client-runtime-utils").Decimal | null;
        listingExpiresAt: Date;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        ownerId: string;
        animalId: string;
    }>;
    /**
     * Get active listings by nearest city
     */
    static getListingsByLocation(lat: number, lng: number, page: number, limit: number): Promise<{
        city: null;
        listings: never[];
        total: number;
    } | {
        city: {
            id: string | undefined;
            stateId: string | undefined;
            latitude?: number | null;
            longitude?: number | null;
            name?: string;
        };
        listings: ({
            animal: {
                category: string;
                id: string;
                description: string | null;
                status: import("../../../types/types.js").AnimalStatus;
                createdAt: Date;
                updatedAt: Date;
                ownerId: string;
                name: string | null;
                breed: string | null;
                ageMonths: number | null;
                gender: string | null;
                weightKg: import("@prisma/client-runtime-utils").Decimal | null;
                doesGiveMilk: boolean;
                dailyMilkProdLtr: import("@prisma/client-runtime-utils").Decimal | null;
                mainCategoryId: string;
                subCategoryId: string;
            };
            images: {
                id: string;
                createdAt: Date;
                url: import("@prisma/client/runtime/client").JsonValue | null;
                sortOrder: number;
                listingId: string;
            }[];
            location: ({
                state: {
                    state: string | null;
                    id: string;
                    latitude: number | null;
                    longitude: number | null;
                    deletedAt: Date | null;
                    createdAt: Date;
                    updatedAt: Date;
                    name: string;
                    stateCode: string;
                    country: string;
                    countryCode: string;
                    isActive: boolean;
                    isHiring: boolean;
                };
                city: {
                    id: string;
                    latitude: number | null;
                    longitude: number | null;
                    deletedAt: Date | null;
                    createdAt: Date;
                    updatedAt: Date;
                    name: string;
                    stateCode: string;
                    stateId: string;
                    country: string;
                    countryCode: string;
                    isActive: boolean;
                    isHiring: boolean;
                };
                area: {
                    id: string;
                    latitude: number;
                    longitude: number;
                    deletedAt: Date | null;
                    createdAt: Date;
                    updatedAt: Date;
                    name: string;
                    cityId: string;
                    isActive: boolean;
                    isHiring: boolean;
                    serviceRadiusKm: number;
                    priority: number;
                } | null;
            } & {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                stateId: string;
                cityId: string;
                areaId: string | null;
                listingId: string;
            }) | null;
        } & {
            id: string;
            title: string;
            description: string;
            price: import("@prisma/client-runtime-utils").Decimal;
            status: import("../../../types/types.js").ListingStatus;
            latitude: import("@prisma/client-runtime-utils").Decimal | null;
            longitude: import("@prisma/client-runtime-utils").Decimal | null;
            listingExpiresAt: Date;
            deletedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
            ownerId: string;
            animalId: string;
        })[];
        total: number;
    }>;
    /**
     * Get listing by ID with all details
     */
    static getListingById(id: string): Promise<({
        animal: {
            category: string;
            id: string;
            description: string | null;
            status: import("../../../types/types.js").AnimalStatus;
            createdAt: Date;
            updatedAt: Date;
            ownerId: string;
            name: string | null;
            breed: string | null;
            ageMonths: number | null;
            gender: string | null;
            weightKg: import("@prisma/client-runtime-utils").Decimal | null;
            doesGiveMilk: boolean;
            dailyMilkProdLtr: import("@prisma/client-runtime-utils").Decimal | null;
            mainCategoryId: string;
            subCategoryId: string;
        };
        owner: {
            id: string;
            name: string | null;
            phone: string;
            avatarUrl: import("@prisma/client/runtime/client").JsonValue;
        };
        images: {
            id: string;
            createdAt: Date;
            url: import("@prisma/client/runtime/client").JsonValue | null;
            sortOrder: number;
            listingId: string;
        }[];
        location: ({
            state: {
                state: string | null;
                id: string;
                latitude: number | null;
                longitude: number | null;
                deletedAt: Date | null;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                stateCode: string;
                country: string;
                countryCode: string;
                isActive: boolean;
                isHiring: boolean;
            };
            city: {
                id: string;
                latitude: number | null;
                longitude: number | null;
                deletedAt: Date | null;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                stateCode: string;
                stateId: string;
                country: string;
                countryCode: string;
                isActive: boolean;
                isHiring: boolean;
            };
            area: {
                id: string;
                latitude: number;
                longitude: number;
                deletedAt: Date | null;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                cityId: string;
                isActive: boolean;
                isHiring: boolean;
                serviceRadiusKm: number;
                priority: number;
            } | null;
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            stateId: string;
            cityId: string;
            areaId: string | null;
            listingId: string;
        }) | null;
    } & {
        id: string;
        title: string;
        description: string;
        price: import("@prisma/client-runtime-utils").Decimal;
        status: import("../../../types/types.js").ListingStatus;
        latitude: import("@prisma/client-runtime-utils").Decimal | null;
        longitude: import("@prisma/client-runtime-utils").Decimal | null;
        listingExpiresAt: Date;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        ownerId: string;
        animalId: string;
    }) | null>;
}
//# sourceMappingURL=animal-listing.service.d.ts.map