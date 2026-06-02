import { db } from "../../../db/db.js";
import { Prisma } from "../../../generated/prisma/client.js";
export class VariantsRepository {
    static async findById(id, tx = db) {
        return tx.productVariant.findUnique({
            where: { id },
            include: {
                product: {
                    include: {
                        brand: true,
                    },
                },
            },
        });
    }
    static async findBySku(sku, tx = db) {
        return tx.productVariant.findUnique({
            where: { sku },
        });
    }
    static async create(data, tx = db) {
        return tx.productVariant.create({
            data,
        });
    }
    static async update(id, data, tx = db) {
        return tx.productVariant.update({
            where: { id },
            data,
        });
    }
    static async delete(id, tx = db) {
        return tx.productVariant.delete({
            where: { id },
        });
    }
    static async findMany(where, tx = db) {
        return tx.productVariant.findMany({
            where,
        });
    }
}
//# sourceMappingURL=variants.repository.js.map