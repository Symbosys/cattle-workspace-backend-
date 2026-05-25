import { asyncHandler } from "../../../middlewares/error.middleware.js";
import { ErrorResponse, SuccessResponse } from "../../../utils/response.util.js";
import { createAnimalListingSchema } from "../schemas/animal-listing.schema.js";
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
  const userListingCount = await AnimalListingService.countUserListings(req.user.id);
  if (userListingCount >= 5) {
    return next(
      new ErrorResponse(
        "You have reached the limit of 5 free animal listings. Payment is required to list more animals.",
        402
      )
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
        "animal_listings"
      );
    }
  }

  // 5. Create listing
  const listing = await AnimalListingService.createListing(req.user.id, validated, uploadedImages);

  // 6. Return response
  return SuccessResponse(res, "Animal listing created successfully", listing, 201);
});
export default createAnimalListing;
