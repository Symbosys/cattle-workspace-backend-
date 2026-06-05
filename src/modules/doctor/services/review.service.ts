import { db } from "../../../db/db.js";
import { ErrorResponse } from "../../../utils/response.util.js";

export class ReviewService {
  /**
   * Submit a review for a doctor
   */
  public static async createReview(
    userId: string,
    data: {
      appointmentId: string;
      rating: number;
      comment?: string | null | undefined;
    }
  ) {
    const { appointmentId, rating, comment } = data;

    return await db.$transaction(async (tx) => {
      // 1. Fetch appointment
      const appointment = await tx.doctorAppointment.findUnique({
        where: { id: appointmentId },
      });

      if (!appointment) {
        throw new ErrorResponse("Appointment not found", 404);
      }

      // 2. Authorize patient
      if (appointment.patientId !== userId) {
        throw new ErrorResponse("You are not authorized to review this appointment", 403);
      }

      // 3. Verify appointment status is completed
      if (appointment.status !== "COMPLETED") {
        throw new ErrorResponse("You can only review completed appointments", 400);
      }

      // 4. Check duplicate review
      const existingReview = await tx.doctorReview.findUnique({
        where: { appointmentId },
      });

      if (existingReview) {
        throw new ErrorResponse("You have already reviewed this appointment", 400);
      }

      // 5. Create review
      const review = await tx.doctorReview.create({
        data: {
          doctorId: appointment.doctorId,
          appointmentId,
          rating,
          comment: comment || null,
        },
        include: {
          appointment: {
            select: {
              patient: {
                select: {
                  id: true,
                  name: true,
                  avatarUrl: true,
                },
              },
            },
          },
        },
      });

      return review;
    });
  }

  /**
   * Get reviews for a doctor with pagination
   */
  public static async getDoctorReviews(
    doctorId: string,
    page: number,
    limit: number
  ) {
    // 1. Verify doctor profile exists
    const doctor = await db.doctorProfile.findUnique({
      where: { id: doctorId },
    });

    if (!doctor) {
      throw new ErrorResponse("Doctor profile not found", 404);
    }

    const skip = (page - 1) * limit;

    // 2. Fetch reviews and count in a transaction
    const [reviews, total] = await Promise.all([
      db.doctorReview.findMany({
        where: { doctorId },
        orderBy: { createdAt: "desc" },
        skip,
        take: limit,
        include: {
          appointment: {
            select: {
              patient: {
                select: {
                  id: true,
                  name: true,
                  avatarUrl: true,
                },
              },
            },
          },
        },
      }),
      db.doctorReview.count({
        where: { doctorId },
      }),
    ]);

    return {
      reviews,
      total,
    };
  }

  /**
   * Get review status/details for an appointment
   */
  public static async getReviewByAppointment(userId: string, appointmentId: string) {
    const appointment = await db.doctorAppointment.findUnique({
      where: { id: appointmentId },
    });

    if (!appointment) {
      throw new ErrorResponse("Appointment not found", 404);
    }

    if (appointment.patientId !== userId) {
      throw new ErrorResponse("You are not authorized to view details of this appointment", 403);
    }

    const review = await db.doctorReview.findUnique({
      where: { appointmentId },
      include: {
        appointment: {
          select: {
            patient: {
              select: {
                id: true,
                name: true,
                avatarUrl: true,
              },
            },
          },
        },
      },
    });

    return review;
  }
}
