export declare class BrandsService {
    static registerBrand(userId: string, brandData: {
        brandName: string;
        slug: string;
        description?: string | null | undefined;
        logoUrl?: any;
        bannerUrl?: any;
        contactEmail?: string | null | undefined;
        contactPhone?: string | null | undefined;
        address?: string | null | undefined;
        gstNumber?: string | null | undefined;
    }, locationData: {
        stateName: string;
        stateCode?: string | null | undefined;
        stateLatitude?: number | null | undefined;
        stateLongitude?: number | null | undefined;
        cityName: string;
        cityLatitude?: number | null | undefined;
        cityLongitude?: number | null | undefined;
        latitude?: number | null | undefined;
        longitude?: number | null | undefined;
    }): Promise<{
        brandLocations: ({
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
            brandId: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        isActive: boolean;
        isVerified: boolean;
        userId: string;
        brandName: string;
        slug: string;
        contactEmail: string | null;
        contactPhone: string | null;
        address: string | null;
        gstNumber: string | null;
        rating: import("@prisma/client-runtime-utils").Decimal;
        logoUrl: import("@prisma/client/runtime/client").JsonValue | null;
        bannerUrl: import("@prisma/client/runtime/client").JsonValue | null;
    }>;
    static getBrandsNearby(lat: number, lng: number, radiusKm: number, page: number, limit: number, search?: string): Promise<{
        brands: {
            distance: number;
            user: {
                id: string;
                name: string | null;
                email: string | null;
                phone: string;
                avatarUrl: import("@prisma/client/runtime/client").JsonValue;
            };
            brandLocations: ({
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
                brandId: string;
            })[];
            id: string;
            createdAt: Date;
            updatedAt: Date;
            description: string | null;
            isActive: boolean;
            isVerified: boolean;
            userId: string;
            brandName: string;
            slug: string;
            contactEmail: string | null;
            contactPhone: string | null;
            address: string | null;
            gstNumber: string | null;
            rating: import("@prisma/client-runtime-utils").Decimal;
            logoUrl: import("@prisma/client/runtime/client").JsonValue | null;
            bannerUrl: import("@prisma/client/runtime/client").JsonValue | null;
        }[];
        total: number;
    }>;
    static getBrandById(id: string): Promise<({
        user: {
            id: string;
            name: string | null;
            email: string | null;
            phone: string;
            avatarUrl: import("@prisma/client/runtime/client").JsonValue;
        };
        brandLocations: ({
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
            brandId: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        isActive: boolean;
        isVerified: boolean;
        userId: string;
        brandName: string;
        slug: string;
        contactEmail: string | null;
        contactPhone: string | null;
        address: string | null;
        gstNumber: string | null;
        rating: import("@prisma/client-runtime-utils").Decimal;
        logoUrl: import("@prisma/client/runtime/client").JsonValue | null;
        bannerUrl: import("@prisma/client/runtime/client").JsonValue | null;
    }) | null>;
    static updateBrand(ownerId: string, brandId: string, brandData: {
        brandName?: string;
        slug?: string;
        description?: string | null | undefined;
        logoUrl?: any;
        bannerUrl?: any;
        contactEmail?: string | null | undefined;
        contactPhone?: string | null | undefined;
        address?: string | null | undefined;
        gstNumber?: string | null | undefined;
        isActive?: boolean;
    }, locationData?: {
        stateName: string;
        stateCode?: string | null | undefined;
        stateLatitude?: number | null | undefined;
        stateLongitude?: number | null | undefined;
        cityName: string;
        cityLatitude?: number | null | undefined;
        cityLongitude?: number | null | undefined;
        latitude?: number | null | undefined;
        longitude?: number | null | undefined;
    } | null): Promise<{
        user: {
            id: string;
            name: string | null;
            email: string | null;
            phone: string;
            avatarUrl: import("@prisma/client/runtime/client").JsonValue;
        };
        brandLocations: ({
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
            brandId: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        isActive: boolean;
        isVerified: boolean;
        userId: string;
        brandName: string;
        slug: string;
        contactEmail: string | null;
        contactPhone: string | null;
        address: string | null;
        gstNumber: string | null;
        rating: import("@prisma/client-runtime-utils").Decimal;
        logoUrl: import("@prisma/client/runtime/client").JsonValue | null;
        bannerUrl: import("@prisma/client/runtime/client").JsonValue | null;
    }>;
}
//# sourceMappingURL=brands.service.d.ts.map