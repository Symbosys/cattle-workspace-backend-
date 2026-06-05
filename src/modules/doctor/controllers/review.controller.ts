import { asyncHandler } from "../../../middlewares/error.middleware.js";
import { ErrorResponse, SuccessResponse } from "../../../utils/response.util.js";
import { createDoctorReviewSchema, getDoctorReviewsQuerySchema } from "../schemas/review.schema.js";
import { ReviewService } from "../services/review.service.js";

export const createDoctorReview = asyncHandler(async (req, res, next) => {
  if (!req.user) {
    return next(new ErrorResponse("Authentication required", 401));
  }

  const validated = createDoctorReviewSchema.parse(req.body);

  const review = await ReviewService.createReview(req.user.id, {
    appointmentId: validated.appointmentId,
    rating: validated.rating,
    comment: validated.comment,
  });

  return SuccessResponse(res, "Review submitted successfully", review, 201);
});

export const getDoctorReviews = asyncHandler(async (req, res, next) => {
  const doctorId = req.params.id as string;
  if (!doctorId) {
    return next(new ErrorResponse("Doctor ID is required", 400));
  }

  const validated = getDoctorReviewsQuerySchema.parse(req.query);

  const result = await ReviewService.getDoctorReviews(
    doctorId,
    validated.page,
    validated.limit
  );

  return SuccessResponse(
    res,
    "Reviews fetched successfully",
    {
      reviews: result.reviews,
      pagination: {
        total: result.total,
        totalPages: Math.ceil(result.total / validated.limit),
        currentPage: validated.page,
        count: result.reviews.length,
      },
    },
    200
  );
});

export const getReviewByAppointmentId = asyncHandler(async (req, res, next) => {
  if (!req.user) {
    return next(new ErrorResponse("Authentication required", 401));
  }

  const appointmentId = req.params.appointmentId as string;
  if (!appointmentId) {
    return next(new ErrorResponse("Appointment ID is required", 400));
  }

  const review = await ReviewService.getReviewByAppointment(
    req.user.id,
    appointmentId
  );

  if (!review) {
    return next(new ErrorResponse("Review not found for this appointment", 404));
  }

  return SuccessResponse(res, "Review fetched successfully", review, 200);
});
