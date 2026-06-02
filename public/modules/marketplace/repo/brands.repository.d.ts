import { db } from "../../../db/db.js";
import { Prisma } from "../../../generated/prisma/client.js";
type PrismaClientOrTx = Prisma.TransactionClient | typeof db;
export declare class BrandsRepository {
    static findByUserId(userId: string, tx?: PrismaClientOrTx): Promise<({
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
    static findByBrandName(brandName: string, tx?: PrismaClientOrTx): Promise<{
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
    } | null>;
    static findBySlug(slug: string, tx?: PrismaClientOrTx): Promise<{
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
    } | null>;
    static createBrandProfile(data: Prisma.BrandProfileUncheckedCreateInput, tx?: PrismaClientOrTx): Promise<{
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
    static updateUserRole(userId: string, role: "BRAND" | "USER" | "DOCTOR" | "BREEDER" | "ADMIN", tx?: PrismaClientOrTx): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string | null;
        email: string | null;
        phone: string;
        avatarUrl: import("@prisma/client/runtime/client").JsonValue | null;
        role: import("../../../generated/prisma/enums.js").UserRole;
        status: import("../../../generated/prisma/enums.js").UserStatus;
        lastLoginAt: Date | null;
        deletedAt: Date | null;
    }>;
    static findStateByName(stateName: string, tx?: PrismaClientOrTx): Promise<{
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
    } | null>;
    static createState(data: Prisma.StateCreateInput, tx?: PrismaClientOrTx): Promise<{
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
    }>;
    static findCityByNameAndState(cityName: string, stateId: string, tx?: PrismaClientOrTx): Promise<{
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
    } | null>;
    static createCity(data: Prisma.CityUncheckedCreateInput, tx?: PrismaClientOrTx): Promise<{
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
    }>;
    static findMany(where: Prisma.BrandProfileWhereInput, tx?: PrismaClientOrTx): Promise<({
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
    })[]>;
    static findById(id: string, tx?: PrismaClientOrTx): Promise<({
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
    static updateBrandProfile(id: string, data: Prisma.BrandProfileUncheckedUpdateInput, tx?: PrismaClientOrTx): Promise<{
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
    static findLocationByBrandId(brandId: string, tx?: PrismaClientOrTx): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        latitude: import("@prisma/client-runtime-utils").Decimal | null;
        longitude: import("@prisma/client-runtime-utils").Decimal | null;
        stateId: string;
        cityId: string;
        brandId: string;
    } | null>;
    static updateBrandLocation(id: string, data: Prisma.BrandLocationUncheckedUpdateInput, tx?: PrismaClientOrTx): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        latitude: import("@prisma/client-runtime-utils").Decimal | null;
        longitude: import("@prisma/client-runtime-utils").Decimal | null;
        stateId: string;
        cityId: string;
        brandId: string;
    }>;
    static createBrandLocation(data: Prisma.BrandLocationUncheckedCreateInput, tx?: PrismaClientOrTx): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        latitude: import("@prisma/client-runtime-utils").Decimal | null;
        longitude: import("@prisma/client-runtime-utils").Decimal | null;
        stateId: string;
        cityId: string;
        brandId: string;
    }>;
}
export {};
//# sourceMappingURL=brands.repository.d.ts.map