import { db } from "../../../db/db.js";
import { Prisma } from "../../../generated/prisma/client.js";
export class ProductsRepository {
    static async findById(id, tx = db) {
        return tx.marketplaceProduct.findUnique({
            where: { id },
            include: {
                brand: true,
                category: true,
                variants: true,
            },
        });
    }
    static async findBySlug(slug, tx = db) {
        return tx.marketplaceProduct.findUnique({
            where: { slug },
            include: {
                brand: true,
                category: true,
                variants: true,
            },
        });
    }
    static async create(data, tx = db) {
        return tx.marketplaceProduct.create({
            data,
            include: {
                variants: true,
            },
        });
    }
    static async update(id, data, tx = db) {
        return tx.marketplaceProduct.update({
            where: { id },
            data,
            include: {
                variants: true,
            },
        });
    }
    static async delete(id, tx = db) {
        return tx.marketplaceProduct.delete({
            where: { id },
        });
    }
    static async findMany(options, tx = db) {
        const args = {
            where: options.where,
            include: {
                brand: true,
                category: true,
                variants: true,
            },
        };
        if (options.skip !== undefined)
            args.skip = options.skip;
        if (options.take !== undefined)
            args.take = options.take;
        if (options.orderBy !== undefined)
            args.orderBy = options.orderBy;
        return tx.marketplaceProduct.findMany(args);
    }
    static async count(where, tx = db) {
        return tx.marketplaceProduct.count({
            where,
        });
    }
}
//# sourceMappingURL=products.repository.js.map