import { asyncHandler } from "../../../middlewares/error.middleware.js";
import {
  ErrorResponse,
  SuccessResponse,
} from "../../../utils/response.util.js";
import {
  createAnimalListingSchema,
  updateAnimalListingSchema,
} from "../schemas/animal-listing.schema.js";
import { AnimalListingService } from "../services/animal-listing.service.js";
import { uploadMultipleToCloudinary } from "../../../config/cloudinary.js";

export const createAnimalListing = asyncHandler(async (req, res, next) => {
  // 1. Ensure user is authenticated
  if (!req.user) {
    return next(new ErrorResponse("Authentication required", 401));
  }

  // 2. Validate request body with Zod
  const validated = createAnimalListingSchema.parse(req.body);

  // 3. Enforce the first 5 animal listings free limit
  const userListingCount = await AnimalListingService.countUserListings(
    req.user.id,
  );
  if (userListingCount >= 5) {
    return next(
      new ErrorResponse(
        "You have reached the limit of 5 free animal listings. Payment is required to list more animals.",
        402,
      ),
    );
  }

  // 4. Upload images to Cloudinary (if files were sent)
  let uploadedImages: { public_id: string; secure_url: string }[] = [];
  if (req.files) {
    const files = Array.isArray(req.files)
      ? req.files
      : Object.values(req.files).flat();
    if (files.length > 0) {
      uploadedImages = await uploadMultipleToCloudinary(
        files.map((file) => file.buffer),
        "animal_listings",
      );
    }
  }

  // 5. Create listing
  const listing = await AnimalListingService.createListing(
    req.user.id,
    validated,
    uploadedImages,
  );

  // 6. Return response
  return SuccessResponse(
    res,
    "Animal listing created successfully",
    listing,
    201,
  );
});

export const updateAnimalListing = asyncHandler(async (req, res, next) => {
  // 1. Ensure user is authenticated
  if (!req.user) {
    return next(new ErrorResponse("Authentication required", 401));
  }

  const id = req.params.id as string;
  if (!id) {
    return next(new ErrorResponse("Listing ID is required", 400));
  }

  // 2. Validate request body with Zod
  const validated = updateAnimalListingSchema.parse(req.body);

  // 3. Upload new images to Cloudinary (if files were sent)
  let uploadedImages: { public_id: string; secure_url: string }[] = [];
  if (req.files) {
    const files = Array.isArray(req.files)
      ? req.files
      : Object.values(req.files).flat();
    if (files.length > 0) {
      uploadedImages = await uploadMultipleToCloudinary(
        files.map((file) => file.buffer),
        "animal_listings",
      );
    }
  }

  // 4. Update listing
  const listing = await AnimalListingService.updateListing(
    req.user.id,
    id,
    validated,
    uploadedImages,
  );

  // 5. Return response
  return SuccessResponse(
    res,
    "Animal listing updated successfully",
    listing,
    200,
  );
});

export const getListedAnimalsByLocation = asyncHandler(
  async (req, res, next) => {
    const { latitude, longitude, page = "1", limit = "10", categoryId } = req.query;

    if (!latitude || !longitude) {
      return next(
        new ErrorResponse("Latitude and longitude are required", 400),
      );
    }

    const lat = parseFloat(latitude as string);
    const lng = parseFloat(longitude as string);
    const pageNumber = parseInt(page as string, 10);
    const pageSize = parseInt(limit as string, 10);

    if (isNaN(lat) || isNaN(lng)) {
      return next(new ErrorResponse("Invalid latitude or longitude", 400));
    }

    const result = await AnimalListingService.getListingsByLocation(
      lat,
      lng,
      pageNumber,
      pageSize,
      categoryId as string
    );

    if (!result.city) {
      return next(
        new ErrorResponse("No city found near the provided location", 404),
      );
    }

    return SuccessResponse(
      res,
      "Listings fetched successfully",
      {
        city: result.city,
        listings: result.listings,
        pagination: {
          total: result.total,
          totalPages: Math.ceil(result.total / pageSize),
          currentPage: pageNumber,
          count: result.listings.length,
        },
      },
      200,
    );
  },
);

export const getAnimalListingById = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  if (!id) {
    return next(new ErrorResponse("Listing ID is required", 400));
  }

  const listing = await AnimalListingService.getListingById(id as string);

  if (!listing) {
    return next(new ErrorResponse("Cattle listing not found", 404));
  }

  return SuccessResponse(res, "Listing fetched successfully", listing, 200);
});
