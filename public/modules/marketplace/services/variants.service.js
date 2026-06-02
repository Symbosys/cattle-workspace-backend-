import { db } from "../../../db/db.js";
import { ErrorResponse } from "../../../utils/response.util.js";
import { VariantsRepository } from "../repo/variants.repository.js";
import { ProductsRepository } from "../repo/products.repository.js";
import { deleteFromCloudinary } from "../../../config/cloudinary.js";
export class VariantsService {
    /**
     * Create a new variant for a product
     */
    static async createVariant(ownerId, productId, data) {
        return await db.$transaction(async (tx) => {
            // 1. Fetch parent product and verify ownership
            const product = await ProductsRepository.findById(productId, tx);
            if (!product) {
                throw new ErrorResponse("Product not found", 404);
            }
            if (product.brand.userId !== ownerId) {
                throw new ErrorResponse("You are not authorized to add variants to this product", 403);
            }
            // 2. Verify SKU uniqueness
            const existingVariant = await VariantsRepository.findBySku(data.sku, tx);
            if (existingVariant) {
                throw new ErrorResponse(`SKU "${data.sku}" is already taken`, 400);
            }
            const isDefaultVal = !!data.isDefault;
            if (isDefaultVal) {
                await tx.productVariant.updateMany({
                    where: { productId },
                    data: { isDefault: false },
                });
            }
            // 3. Create variant
            return await VariantsRepository.create({
                productId,
                sku: data.sku,
                title: data.title,
                price: data.price,
                compareAtPrice: data.compareAtPrice ?? null,
                stock: data.stock ?? 0,
                imageUrl: data.imageUrl,
                isActive: data.isActive ?? true,
                isDefault: isDefaultVal,
            }, tx);
        });
    }
    /**
     * Update an existing variant
     */
    static async updateVariant(ownerId, id, data) {
        return await db.$transaction(async (tx) => {
            // 1. Fetch variant and verify ownership
            const variant = await VariantsRepository.findById(id, tx);
            if (!variant) {
                throw new ErrorResponse("Variant not found", 404);
            }
            if (variant.product.brand.userId !== ownerId) {
                throw new ErrorResponse("You are not authorized to update this variant", 403);
            }
            // 2. Verify SKU uniqueness if updated
            if (data.sku !== undefined && data.sku !== variant.sku) {
                const existingSku = await VariantsRepository.findBySku(data.sku, tx);
                if (existingSku) {
                    throw new ErrorResponse(`SKU "${data.sku}" is already taken by another variant`, 400);
                }
            }
            // 3. Cloudinary cleanup for replaced imageUrl
            if (data.imageUrl !== undefined) {
                const oldImage = variant.imageUrl;
                if (oldImage && oldImage.public_id) {
                    // If we are replacing with null or a new image with a different public_id, delete old one
                    if (!data.imageUrl || data.imageUrl.public_id !== oldImage.public_id) {
                        try {
                            await deleteFromCloudinary(oldImage.public_id);
                        }
                        catch (err) {
                            console.error(`Failed to delete replaced variant image: ${oldImage.public_id}`, err);
                        }
                    }
                }
            }
            if (data.isDefault === true) {
                await tx.productVariant.updateMany({
                    where: { productId: variant.productId },
                    data: { isDefault: false },
                });
            }
            else if (data.isDefault === false && variant.isDefault) {
                throw new ErrorResponse("Cannot unset this variant as default. Designate another variant as default first.", 400);
            }
            // 4. Update variant fields
            const updateData = {};
            if (data.sku !== undefined)
                updateData.sku = data.sku;
            if (data.title !== undefined)
                updateData.title = data.title;
            if (data.price !== undefined)
                updateData.price = data.price;
            if (data.compareAtPrice !== undefined)
                updateData.compareAtPrice = data.compareAtPrice;
            if (data.stock !== undefined)
                updateData.stock = data.stock;
            if (data.imageUrl !== undefined)
                updateData.imageUrl = data.imageUrl;
            if (data.isActive !== undefined)
                updateData.isActive = data.isActive;
            if (data.isDefault !== undefined)
                updateData.isDefault = data.isDefault;
            return await VariantsRepository.update(id, updateData, tx);
        });
    }
    /**
     * Delete an existing variant
     */
    static async deleteVariant(ownerId, id) {
        return await db.$transaction(async (tx) => {
            // 1. Fetch variant and verify ownership
            const variant = await VariantsRepository.findById(id, tx);
            if (!variant) {
                throw new ErrorResponse("Variant not found", 404);
            }
            if (variant.product.brand.userId !== ownerId) {
                throw new ErrorResponse("You are not authorized to delete this variant", 403);
            }
            if (variant.isDefault) {
                throw new ErrorResponse("The default variant of a product cannot be deleted. Mark another variant as default first or delete the entire product.", 400);
            }
            // 2. Cloudinary image cleanup
            const oldImage = variant.imageUrl;
            if (oldImage && oldImage.public_id) {
                try {
                    await deleteFromCloudinary(oldImage.public_id);
                }
                catch (err) {
                    console.error(`Failed to delete variant image ${oldImage.public_id}:`, err);
                }
            }
            // 3. Delete from db
            return await VariantsRepository.delete(id, tx);
        });
    }
    /**
     * Get variant by ID
     */
    static async getVariantById(id) {
        return await VariantsRepository.findById(id);
    }
}
//# sourceMappingURL=variants.service.js.map