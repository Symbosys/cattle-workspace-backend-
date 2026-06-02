import { db } from "../../../db/db.js";
import { Prisma } from "../../../generated/prisma/client.js";
export class CategoriesRepository {
    static async findById(id, tx = db) {
        return tx.marketplaceCategory.findUnique({
            where: { id },
            include: {
                parent: true,
                children: true,
                brand: true,
            },
        });
    }
    static async create(data, tx = db) {
        return tx.marketplaceCategory.create({
            data,
            include: {
                parent: true,
                children: true,
            },
        });
    }
    static async update(id, data, tx = db) {
        return tx.marketplaceCategory.update({
            where: { id },
            data,
            include: {
                parent: true,
                children: true,
            },
        });
    }
    static async delete(id, tx = db) {
        return tx.marketplaceCategory.delete({
            where: { id },
        });
    }
    static async findMany(where, tx = db) {
        return tx.marketplaceCategory.findMany({
            where,
            include: {
                parent: true,
                children: true,
            },
        });
    }
}
//# sourceMappingURL=categories.repository.js.map