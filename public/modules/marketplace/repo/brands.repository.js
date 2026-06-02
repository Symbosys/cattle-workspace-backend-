import { db } from "../../../db/db.js";
import { Prisma } from "../../../generated/prisma/client.js";
export class BrandsRepository {
    static async findByUserId(userId, tx = db) {
        return tx.brandProfile.findUnique({
            where: { userId },
            include: {
                brandLocations: {
                    include: {
                        state: true,
                        city: true,
                    },
                },
            },
        });
    }
    static async findByBrandName(brandName, tx = db) {
        return tx.brandProfile.findFirst({
            where: { brandName: { equals: brandName, mode: "insensitive" } },
        });
    }
    static async findBySlug(slug, tx = db) {
        return tx.brandProfile.findFirst({
            where: { slug: { equals: slug, mode: "insensitive" } },
        });
    }
    static async createBrandProfile(data, tx = db) {
        return tx.brandProfile.create({
            data,
            include: {
                brandLocations: {
                    include: {
                        state: true,
                        city: true,
                    },
                },
            },
        });
    }
    static async updateUserRole(userId, role, tx = db) {
        return tx.user.update({
            where: { id: userId },
            data: { role },
        });
    }
    static async findStateByName(stateName, tx = db) {
        return tx.state.findFirst({
            where: { name: { equals: stateName, mode: "insensitive" } },
        });
    }
    static async createState(data, tx = db) {
        return tx.state.create({ data });
    }
    static async findCityByNameAndState(cityName, stateId, tx = db) {
        return tx.city.findFirst({
            where: {
                name: { equals: cityName, mode: "insensitive" },
                stateId,
            },
        });
    }
    static async createCity(data, tx = db) {
        return tx.city.create({ data });
    }
    static async findMany(where, tx = db) {
        return tx.brandProfile.findMany({
            where,
            include: {
                brandLocations: {
                    include: {
                        state: true,
                        city: true,
                    },
                },
                user: {
                    select: {
                        id: true,
                        name: true,
                        phone: true,
                        avatarUrl: true,
                        email: true,
                    },
                },
            },
        });
    }
    static async findById(id, tx = db) {
        return tx.brandProfile.findUnique({
            where: { id },
            include: {
                brandLocations: {
                    include: {
                        state: true,
                        city: true,
                    },
                },
                user: {
                    select: {
                        id: true,
                        name: true,
                        phone: true,
                        avatarUrl: true,
                        email: true,
                    },
                },
            },
        });
    }
    static async updateBrandProfile(id, data, tx = db) {
        return tx.brandProfile.update({
            where: { id },
            data,
            include: {
                brandLocations: {
                    include: {
                        state: true,
                        city: true,
                    },
                },
                user: {
                    select: {
                        id: true,
                        name: true,
                        phone: true,
                        avatarUrl: true,
                        email: true,
                    },
                },
            },
        });
    }
    static async findLocationByBrandId(brandId, tx = db) {
        return tx.brandLocation.findFirst({
            where: { brandId },
        });
    }
    static async updateBrandLocation(id, data, tx = db) {
        return tx.brandLocation.update({
            where: { id },
            data,
        });
    }
    static async createBrandLocation(data, tx = db) {
        return tx.brandLocation.create({
            data,
        });
    }
}
//# sourceMappingURL=brands.repository.js.map