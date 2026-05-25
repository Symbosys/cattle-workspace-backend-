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
                id: bigint;
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
                id: bigint;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                deletedAt: Date | null;
                latitude: number | null;
                longitude: number | null;
                stateCode: string;
                stateId: bigint;
                country: string;
                countryCode: string;
                isActive: boolean;
                isHiring: boolean;
            };
            area: {
                id: bigint;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                deletedAt: Date | null;
                latitude: number;
                longitude: number;
                cityId: bigint;
                isActive: boolean;
                isHiring: boolean;
                serviceRadiusKm: number;
                priority: number;
            } | null;
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            stateId: bigint;
            cityId: bigint;
            areaId: bigint | null;
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
                id: bigint;
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
                id: bigint;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                deletedAt: Date | null;
                latitude: number | null;
                longitude: number | null;
                stateCode: string;
                stateId: bigint;
                country: string;
                countryCode: string;
                isActive: boolean;
                isHiring: boolean;
            };
            area: {
                id: bigint;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                deletedAt: Date | null;
                latitude: number;
                longitude: number;
                cityId: bigint;
                isActive: boolean;
                isHiring: boolean;
                serviceRadiusKm: number;
                priority: number;
            } | null;
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            stateId: bigint;
            cityId: bigint;
            areaId: bigint | null;
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
}
//# sourceMappingURL=animal-listing.service.d.ts.map