import { db } from "../../../db/db.js";
import { ErrorResponse } from "../../../utils/response.util.js";
import { ProductsRepository } from "../repo/products.repository.js";
import { BrandsRepository } from "../repo/brands.repository.js";
import { CategoriesRepository } from "../repo/categories.repository.js";
import { VariantsRepository } from "../repo/variants.repository.js";
import { deleteFromCloudinary } from "../../../config/cloudinary.js";
export class ProductsService {
    /**
     * Create a new product with optional variants
     */
    static async createProduct(ownerId, data) {
        return await db.$transaction(async (tx) => {
            // 1. Verify brand exists and is owned by request user
            const brand = await BrandsRepository.findById(data.brandId, tx);
            if (!brand) {
                throw new ErrorResponse("Brand profile not found", 404);
            }
            if (brand.userId !== ownerId) {
                throw new ErrorResponse("You are not authorized to create products for this brand", 403);
            }
            // 2. Verify category exists
            const category = await CategoriesRepository.findById(data.categoryId, tx);
            if (!category) {
                throw new ErrorResponse("Category not found", 404);
            }
            // 3. Generate unique slug from product title
            let slug = generateSlug(data.title);
            let isUnique = false;
            let counter = 0;
            let checkSlug = slug;
            while (!isUnique) {
                const existingProduct = await ProductsRepository.findBySlug(checkSlug, tx);
                if (!existingProduct) {
                    isUnique = true;
                    slug = checkSlug;
                }
                else {
                    counter++;
                    checkSlug = `${slug}-${counter}`;
                }
            }
            // 4. Handle default variant creation logic
            let finalVariants = [];
            if (data.variants && data.variants.length > 0) {
                const skus = data.variants.map((v) => v.sku.trim());
                const uniqueSkus = new Set(skus);
                if (uniqueSkus.size !== skus.length) {
                    throw new ErrorResponse("Duplicate SKUs detected in variants list", 400);
                }
                for (const sku of skus) {
                    const existingVariant = await VariantsRepository.findBySku(sku, tx);
                    if (existingVariant) {
                        throw new ErrorResponse(`SKU "${sku}" is already taken by another variant`, 400);
                    }
                }
                const hasExplicitDefault = data.variants.some((v) => v.isDefault === true);
                finalVariants = data.variants.map((v, index) => {
                    let isDefaultVal = false;
                    if (hasExplicitDefault) {
                        isDefaultVal = !!v.isDefault;
                    }
                    else {
                        isDefaultVal = index === 0;
                    }
                    return {
                        sku: v.sku,
                        title: v.title,
                        price: v.price,
                        compareAtPrice: v.compareAtPrice ?? null,
                        stock: v.stock ?? 0,
                        imageUrl: v.imageUrl,
                        isActive: v.isActive ?? true,
                        isDefault: isDefaultVal,
                    };
                });
            }
            else {
                if (!data.sku || data.price === undefined) {
                    throw new ErrorResponse("Sku and Price are required for the default product variant", 400);
                }
                const existingVariant = await VariantsRepository.findBySku(data.sku, tx);
                if (existingVariant) {
                    throw new ErrorResponse(`SKU "${data.sku}" is already taken`, 400);
                }
                const variantImage = data.images && data.images.length > 0 ? data.images[0] : null;
                finalVariants = [
                    {
                        sku: data.sku,
                        title: "Default",
                        price: data.price,
                        compareAtPrice: data.compareAtPrice ?? null,
                        stock: data.stock ?? 0,
                        imageUrl: variantImage,
                        isActive: true,
                        isDefault: true,
                    },
                ];
            }
            // 5. Create product and nested variants
            const productInput = {
                brandId: data.brandId,
                categoryId: data.categoryId,
                title: data.title,
                slug,
                description: data.description,
                status: data.status ?? "ACTIVE",
                metaTitle: data.metaTitle ?? null,
                metaDescription: data.metaDescription ?? null,
                images: data.images,
                attributes: data.attributes,
                variants: {
                    create: finalVariants,
                },
            };
            const product = await ProductsRepository.create(productInput, tx);
            return product;
        });
    }
    /**
     * Update an existing product
     */
    static async updateProduct(ownerId, productId, data) {
        return await db.$transaction(async (tx) => {
            // 1. Fetch product
            const product = await ProductsRepository.findById(productId, tx);
            if (!product) {
                throw new ErrorResponse("Product not found", 404);
            }
            // 2. Verify brand ownership
            if (product.brand.userId !== ownerId) {
                throw new ErrorResponse("You are not authorized to update this product", 403);
            }
            // 3. Verify category if updated
            if (data.categoryId !== undefined && data.categoryId !== product.categoryId) {
                const category = await CategoriesRepository.findById(data.categoryId, tx);
                if (!category) {
                    throw new ErrorResponse("Category not found", 404);
                }
            }
            // 4. Resolve slug if title is updated
            let newSlug = undefined;
            if (data.title !== undefined && data.title !== product.title) {
                newSlug = generateSlug(data.title);
                let isUnique = false;
                let counter = 0;
                let checkSlug = newSlug;
                while (!isUnique) {
                    const existingProduct = await ProductsRepository.findBySlug(checkSlug, tx);
                    if (!existingProduct || existingProduct.id === productId) {
                        isUnique = true;
                        newSlug = checkSlug;
                    }
                    else {
                        counter++;
                        checkSlug = `${newSlug}-${counter}`;
                    }
                }
            }
            // 5. Cloudinary image cleanup (delete removed images)
            if (data.images !== undefined) {
                const currentImages = product.images || [];
                const newImages = data.images || [];
                const newPublicIds = new Set(newImages.map((img) => img.public_id).filter(Boolean));
                for (const oldImg of currentImages) {
                    if (oldImg && oldImg.public_id && !newPublicIds.has(oldImg.public_id)) {
                        try {
                            await deleteFromCloudinary(oldImg.public_id);
                        }
                        catch (err) {
                            console.error(`Failed to delete orphaned product image: ${oldImg.public_id}`, err);
                        }
                    }
                }
            }
            // 6. Perform update
            const updateData = {};
            if (data.categoryId !== undefined)
                updateData.categoryId = data.categoryId;
            if (data.title !== undefined)
                updateData.title = data.title;
            if (newSlug !== undefined)
                updateData.slug = newSlug;
            if (data.description !== undefined)
                updateData.description = data.description;
            if (data.status !== undefined)
                updateData.status = data.status;
            if (data.metaTitle !== undefined)
                updateData.metaTitle = data.metaTitle;
            if (data.metaDescription !== undefined)
                updateData.metaDescription = data.metaDescription;
            if (data.images !== undefined)
                updateData.images = data.images;
            if (data.attributes !== undefined)
                updateData.attributes = data.attributes;
            return await ProductsRepository.update(productId, updateData, tx);
        });
    }
    /**
     * Get single product by ID
     */
    static async getProductById(id) {
        return await ProductsRepository.findById(id);
    }
    /**
     * Get single product by Slug
     */
    static async getProductBySlug(slug) {
        return await ProductsRepository.findBySlug(slug);
    }
    /**
     * List products with pagination and filters
     */
    static async getProducts(filters) {
        const page = filters.page ?? 1;
        const limit = filters.limit ?? 10;
        const skip = (page - 1) * limit;
        const where = {};
        if (filters.brandId) {
            where.brandId = filters.brandId;
        }
        if (filters.categoryId) {
            where.categoryId = filters.categoryId;
        }
        if (filters.status) {
            where.status = filters.status;
        }
        else {
            // Default list active products
            where.status = "ACTIVE";
        }
        if (filters.search) {
            where.OR = [
                { title: { contains: filters.search, mode: "insensitive" } },
                { description: { contains: filters.search, mode: "insensitive" } },
            ];
        }
        if (filters.minPrice !== undefined || filters.maxPrice !== undefined) {
            const priceFilter = {};
            if (filters.minPrice !== undefined) {
                priceFilter.gte = filters.minPrice;
            }
            if (filters.maxPrice !== undefined) {
                priceFilter.lte = filters.maxPrice;
            }
            where.variants = {
                some: {
                    price: priceFilter,
                    isActive: true,
                },
            };
        }
        const [products, total] = await db.$transaction(async (tx) => {
            const items = await ProductsRepository.findMany({
                where,
                skip,
                take: limit,
                orderBy: { createdAt: "desc" },
            }, tx);
            const count = await ProductsRepository.count(where, tx);
            return [items, count];
        });
        return {
            products,
            total,
            page,
            limit,
            pages: Math.ceil(total / limit),
        };
    }
    /**
     * Delete product and clean up all Cloudinary assets
     */
    static async deleteProduct(ownerId, id) {
        return await db.$transaction(async (tx) => {
            const product = await ProductsRepository.findById(id, tx);
            if (!product) {
                throw new ErrorResponse("Product not found", 404);
            }
            if (product.brand.userId !== ownerId) {
                throw new ErrorResponse("You are not authorized to delete this product", 403);
            }
            // Collect product images
            const productImages = product.images || [];
            const imageIdsToDelete = [];
            for (const img of productImages) {
                if (img && img.public_id) {
                    imageIdsToDelete.push(img.public_id);
                }
            }
            // Collect variant images
            for (const variant of product.variants) {
                const variantImg = variant.imageUrl;
                if (variantImg && variantImg.public_id) {
                    imageIdsToDelete.push(variantImg.public_id);
                }
            }
            // Delete from Cloudinary
            for (const publicId of imageIdsToDelete) {
                try {
                    await deleteFromCloudinary(publicId);
                }
                catch (err) {
                    console.error(`Failed to delete image ${publicId} on product deletion:`, err);
                }
            }
            // Delete from db
            return await ProductsRepository.delete(id, tx);
        });
    }
}
function generateSlug(text) {
    return text
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "") // remove non-alphanumeric (except spaces/hyphens)
        .replace(/[\s_]+/g, "-") // replace spaces and underscores with hyphens
        .replace(/^-+|-+$/g, ""); // trim leading/trailing hyphens
}
//# sourceMappingURL=products.service.js.map