import { asyncHandler } from "../../../middlewares/error.middleware.js";
import { ErrorResponse, SuccessResponse } from "../../../utils/response.util.js";
import { registerBrandSchema, updateBrandSchema } from "../schema/brands.schema.js";
import { BrandsService } from "../services/brands.service.js";
import { uploadToCloudinary, deleteFromCloudinary } from "../../../config/cloudinary.js";
export const registerBrand = asyncHandler(async (req, res, next) => {
    // 1. Ensure user is authenticated
    if (!req.user) {
        return next(new ErrorResponse("Authentication required", 401));
    }
    // 2. Validate request body with Zod
    const validated = registerBrandSchema.parse(req.body);
    // 3. Upload logo and banner to Cloudinary if provided as files
    let logoUrl = null;
    let bannerUrl = null;
    const files = req.files;
    if (files) {
        if (files["logo"]?.[0]) {
            logoUrl = await uploadToCloudinary(files["logo"][0].buffer, "brand_logos");
        }
        if (files["banner"]?.[0]) {
            bannerUrl = await uploadToCloudinary(files["banner"][0].buffer, "brand_banners");
        }
    }
    // Fallback to body-supplied URL/JSON if file was not sent in form-data
    if (!logoUrl && req.body.logoUrl) {
        try {
            logoUrl = typeof req.body.logoUrl === "string"
                ? JSON.parse(req.body.logoUrl)
                : req.body.logoUrl;
        }
        catch {
            logoUrl = { secure_url: req.body.logoUrl };
        }
    }
    if (!bannerUrl && req.body.bannerUrl) {
        try {
            bannerUrl = typeof req.body.bannerUrl === "string"
                ? JSON.parse(req.body.bannerUrl)
                : req.body.bannerUrl;
        }
        catch {
            bannerUrl = { secure_url: req.body.bannerUrl };
        }
    }
    // 4. Call Service
    const brand = await BrandsService.registerBrand(req.user.id, {
        brandName: validated.brandName,
        slug: validated.slug,
        description: validated.description,
        logoUrl,
        bannerUrl,
        contactEmail: validated.contactEmail,
        contactPhone: validated.contactPhone,
        address: validated.address,
        gstNumber: validated.gstNumber,
    }, {
        stateName: validated.stateName,
        stateCode: validated.stateCode,
        stateLatitude: validated.stateLatitude,
        stateLongitude: validated.stateLongitude,
        cityName: validated.cityName,
        cityLatitude: validated.cityLatitude,
        cityLongitude: validated.cityLongitude,
        latitude: validated.latitude,
        longitude: validated.longitude,
    });
    return SuccessResponse(res, "Brand registered successfully", brand, 201);
});
export const getBrandsByLocation = asyncHandler(async (req, res, next) => {
    const { latitude, longitude, radius = "50", page = "1", limit = "10", search } = req.query;
    if (!latitude || !longitude) {
        return next(new ErrorResponse("Latitude and longitude are required", 400));
    }
    const lat = parseFloat(latitude);
    const lng = parseFloat(longitude);
    const rad = parseFloat(radius);
    const pageNumber = parseInt(page, 10);
    const pageSize = parseInt(limit, 10);
    if (isNaN(lat) || isNaN(lng)) {
        return next(new ErrorResponse("Invalid latitude or longitude", 400));
    }
    if (isNaN(rad) || rad <= 0) {
        return next(new ErrorResponse("Invalid radius", 400));
    }
    const result = await BrandsService.getBrandsNearby(lat, lng, rad, pageNumber, pageSize, search ? search : undefined);
    return SuccessResponse(res, "Brands fetched successfully", {
        brands: result.brands,
        pagination: {
            total: result.total,
            totalPages: Math.ceil(result.total / pageSize),
            currentPage: pageNumber,
            count: result.brands.length,
        },
    }, 200);
});
export const getBrandById = asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    if (!id) {
        return next(new ErrorResponse("Brand ID is required", 400));
    }
    const brand = await BrandsService.getBrandById(id);
    if (!brand) {
        return next(new ErrorResponse("Brand profile not found", 404));
    }
    return SuccessResponse(res, "Brand profile fetched successfully", brand, 200);
});
export const updateBrand = asyncHandler(async (req, res, next) => {
    if (!req.user) {
        return next(new ErrorResponse("Authentication required", 401));
    }
    const id = req.params.id;
    if (!id) {
        return next(new ErrorResponse("Brand ID is required", 400));
    }
    const existingBrand = await BrandsService.getBrandById(id);
    if (!existingBrand) {
        return next(new ErrorResponse("Brand profile not found", 404));
    }
    if (existingBrand.userId !== req.user.id) {
        return next(new ErrorResponse("You are not authorized to update this brand profile", 403));
    }
    const validated = updateBrandSchema.parse(req.body);
    let logoUrl = undefined;
    let bannerUrl = undefined;
    const files = req.files;
    if (files) {
        if (files["logo"]?.[0]) {
            const oldLogo = existingBrand.logoUrl;
            if (oldLogo && oldLogo.public_id) {
                try {
                    await deleteFromCloudinary(oldLogo.public_id);
                }
                catch (err) {
                    console.error("Failed to delete old logo:", err);
                }
            }
            logoUrl = await uploadToCloudinary(files["logo"][0].buffer, "brand_logos");
        }
        if (files["banner"]?.[0]) {
            const oldBanner = existingBrand.bannerUrl;
            if (oldBanner && oldBanner.public_id) {
                try {
                    await deleteFromCloudinary(oldBanner.public_id);
                }
                catch (err) {
                    console.error("Failed to delete old banner:", err);
                }
            }
            bannerUrl = await uploadToCloudinary(files["banner"][0].buffer, "brand_banners");
        }
    }
    if (!logoUrl && req.body.logoUrl) {
        try {
            logoUrl = typeof req.body.logoUrl === "string"
                ? JSON.parse(req.body.logoUrl)
                : req.body.logoUrl;
        }
        catch {
            logoUrl = { secure_url: req.body.logoUrl };
        }
    }
    if (!bannerUrl && req.body.bannerUrl) {
        try {
            bannerUrl = typeof req.body.bannerUrl === "string"
                ? JSON.parse(req.body.bannerUrl)
                : req.body.bannerUrl;
        }
        catch {
            bannerUrl = { secure_url: req.body.bannerUrl };
        }
    }
    const hasLocationUpdate = validated.stateName !== undefined ||
        validated.cityName !== undefined ||
        validated.latitude !== undefined ||
        validated.longitude !== undefined;
    let locationData = null;
    if (hasLocationUpdate) {
        const existingLoc = existingBrand.brandLocations?.[0];
        const stateName = validated.stateName ?? existingLoc?.state?.name;
        const cityName = validated.cityName ?? existingLoc?.city?.name;
        const latitude = validated.latitude ?? (existingLoc?.latitude ? Number(existingLoc.latitude) : null);
        const longitude = validated.longitude ?? (existingLoc?.longitude ? Number(existingLoc.longitude) : null);
        if (!stateName || !cityName) {
            return next(new ErrorResponse("State name and City name are required for location updates", 400));
        }
        locationData = {
            stateName: stateName,
            stateCode: validated.stateCode ?? existingLoc?.state?.stateCode ?? null,
            stateLatitude: validated.stateLatitude ?? (existingLoc?.state?.latitude ? Number(existingLoc.state.latitude) : null),
            stateLongitude: validated.stateLongitude ?? (existingLoc?.state?.longitude ? Number(existingLoc.state.longitude) : null),
            cityName: cityName,
            cityLatitude: validated.cityLatitude ?? (existingLoc?.city?.latitude ? Number(existingLoc.city.latitude) : null),
            cityLongitude: validated.cityLongitude ?? (existingLoc?.city?.longitude ? Number(existingLoc.city.longitude) : null),
            latitude,
            longitude,
        };
    }
    const brandData = {};
    if (validated.brandName !== undefined)
        brandData.brandName = validated.brandName;
    if (validated.slug !== undefined)
        brandData.slug = validated.slug;
    if (validated.description !== undefined)
        brandData.description = validated.description;
    if (logoUrl !== undefined)
        brandData.logoUrl = logoUrl;
    if (bannerUrl !== undefined)
        brandData.bannerUrl = bannerUrl;
    if (validated.contactEmail !== undefined)
        brandData.contactEmail = validated.contactEmail;
    if (validated.contactPhone !== undefined)
        brandData.contactPhone = validated.contactPhone;
    if (validated.address !== undefined)
        brandData.address = validated.address;
    if (validated.gstNumber !== undefined)
        brandData.gstNumber = validated.gstNumber;
    if (validated.isActive !== undefined)
        brandData.isActive = validated.isActive;
    const updatedBrand = await BrandsService.updateBrand(req.user.id, id, brandData, locationData);
    return SuccessResponse(res, "Brand profile updated successfully", updatedBrand, 200);
});
//# sourceMappingURL=brands.controller.js.map