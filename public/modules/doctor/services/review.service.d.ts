export declare class ReviewService {
    /**
     * Submit a review for a doctor
     */
    static createReview(userId: string, data: {
        appointmentId: string;
        rating: number;
        comment?: string | null | undefined;
    }): Promise<{
        appointment: {
            patient: {
                id: string;
                name: string | null;
                avatarUrl: import("@prisma/client/runtime/client").JsonValue;
            };
        };
    } & {
        id: string;
        rating: number;
        comment: string | null;
        createdAt: Date;
        doctorId: string;
        appointmentId: string;
    }>;
    /**
     * Get reviews for a doctor with pagination
     */
    static getDoctorReviews(doctorId: string, page: number, limit: number): Promise<{
        reviews: ({
            appointment: {
                patient: {
                    id: string;
                    name: string | null;
                    avatarUrl: import("@prisma/client/runtime/client").JsonValue;
                };
            };
        } & {
            id: string;
            rating: number;
            comment: string | null;
            createdAt: Date;
            doctorId: string;
            appointmentId: string;
        })[];
        total: number;
    }>;
    /**
     * Get review status/details for an appointment
     */
    static getReviewByAppointment(userId: string, appointmentId: string): Promise<({
        appointment: {
            patient: {
                id: string;
                name: string | null;
                avatarUrl: import("@prisma/client/runtime/client").JsonValue;
            };
        };
    } & {
        id: string;
        rating: number;
        comment: string | null;
        createdAt: Date;
        doctorId: string;
        appointmentId: string;
    }) | null>;
}
//# sourceMappingURL=review.service.d.ts.map