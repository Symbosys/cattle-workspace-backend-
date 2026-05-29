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
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string | null;
            status: import("../../../types/types.js").AnimalStatus;
            description: string | null;
            category: string;
            breed: string | null;
            ageMonths: number | null;
            gender: string | null;
            weightKg: import("@prisma/client-runtime-utils").Decimal | null;
            doesGiveMilk: boolean;
            dailyMilkProdLtr: import("@prisma/client-runtime-utils").Decimal | null;
            ownerId: string;
            subCategoryId: string;
            mainCategoryId: string;
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
            area: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                deletedAt: Date | null;
                latitude: number;
                longitude: number;
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
        createdAt: Date;
        updatedAt: Date;
        status: import("../../../types/types.js").ListingStatus;
        deletedAt: Date | null;
        description: string;
        ownerId: string;
        title: string;
        price: import("@prisma/client-runtime-utils").Decimal;
        latitude: import("@prisma/client-runtime-utils").Decimal | null;
        longitude: import("@prisma/client-runtime-utils").Decimal | null;
        listingExpiresAt: Date;
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
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string | null;
            status: import("../../../types/types.js").AnimalStatus;
            description: string | null;
            category: string;
            breed: string | null;
            ageMonths: number | null;
            gender: string | null;
            weightKg: import("@prisma/client-runtime-utils").Decimal | null;
            doesGiveMilk: boolean;
            dailyMilkProdLtr: import("@prisma/client-runtime-utils").Decimal | null;
            ownerId: string;
            subCategoryId: string;
            mainCategoryId: string;
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
            area: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                deletedAt: Date | null;
                latitude: number;
                longitude: number;
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
        createdAt: Date;
        updatedAt: Date;
        status: import("../../../types/types.js").ListingStatus;
        deletedAt: Date | null;
        description: string;
        ownerId: string;
        title: string;
        price: import("@prisma/client-runtime-utils").Decimal;
        latitude: import("@prisma/client-runtime-utils").Decimal | null;
        longitude: import("@prisma/client-runtime-utils").Decimal | null;
        listingExpiresAt: Date;
        animalId: string;
    }>;
    /**
     * Get active listings by nearest city
     */
    static getListingsByLocation(lat: number, lng: number, page: number, limit: number, categoryId?: string): Promise<{
        city: null;
        listings: never[];
        total: number;
    } | {
        city: {
            id: string;
            stateId: string;
            name: string;
            latitude: number | null;
            longitude: number | null;
        };
        listings: ({
            animal: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                name: string | null;
                status: import("../../../types/types.js").AnimalStatus;
                description: string | null;
                category: string;
                breed: string | null;
                ageMonths: number | null;
                gender: string | null;
                weightKg: import("@prisma/client-runtime-utils").Decimal | null;
                doesGiveMilk: boolean;
                dailyMilkProdLtr: import("@prisma/client-runtime-utils").Decimal | null;
                ownerId: string;
                subCategoryId: string;
                mainCategoryId: string;
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
                area: {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    name: string;
                    deletedAt: Date | null;
                    latitude: number;
                    longitude: number;
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
            createdAt: Date;
            updatedAt: Date;
            status: import("../../../types/types.js").ListingStatus;
            deletedAt: Date | null;
            description: string;
            ownerId: string;
            title: string;
            price: import("@prisma/client-runtime-utils").Decimal;
            latitude: import("@prisma/client-runtime-utils").Decimal | null;
            longitude: import("@prisma/client-runtime-utils").Decimal | null;
            listingExpiresAt: Date;
            animalId: string;
        })[];
        total: number;
    }>;
    /**
     * Get listing by ID with all details
     */
    static getListingById(id: string): Promise<({
        owner: {
            id: string;
            name: string | null;
            phone: string;
            avatarUrl: import("@prisma/client/runtime/client").JsonValue;
        };
        animal: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string | null;
            status: import("../../../types/types.js").AnimalStatus;
            description: string | null;
            category: string;
            breed: string | null;
            ageMonths: number | null;
            gender: string | null;
            weightKg: import("@prisma/client-runtime-utils").Decimal | null;
            doesGiveMilk: boolean;
            dailyMilkProdLtr: import("@prisma/client-runtime-utils").Decimal | null;
            ownerId: string;
            subCategoryId: string;
            mainCategoryId: string;
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
            area: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                deletedAt: Date | null;
                latitude: number;
                longitude: number;
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
        createdAt: Date;
        updatedAt: Date;
        status: import("../../../types/types.js").ListingStatus;
        deletedAt: Date | null;
        description: string;
        ownerId: string;
        title: string;
        price: import("@prisma/client-runtime-utils").Decimal;
        latitude: import("@prisma/client-runtime-utils").Decimal | null;
        longitude: import("@prisma/client-runtime-utils").Decimal | null;
        listingExpiresAt: Date;
        animalId: string;
    }) | null>;
}
//# sourceMappingURL=animal-listing.service.d.ts.map