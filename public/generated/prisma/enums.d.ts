export declare const AnimalStatus: {
    readonly OWNED: "OWNED";
    readonly LISTED_FOR_SALE: "LISTED_FOR_SALE";
    readonly SOLD: "SOLD";
    readonly DECEASED: "DECEASED";
};
export type AnimalStatus = (typeof AnimalStatus)[keyof typeof AnimalStatus];
export declare const DoctorListingStatus: {
    readonly INACTIVE: "INACTIVE";
    readonly ACTIVE: "ACTIVE";
    readonly EXPIRED: "EXPIRED";
};
export type DoctorListingStatus = (typeof DoctorListingStatus)[keyof typeof DoctorListingStatus];
export declare const VerificationStatus: {
    readonly PENDING: "PENDING";
    readonly VERIFIED: "VERIFIED";
    readonly REJECTED: "REJECTED";
};
export type VerificationStatus = (typeof VerificationStatus)[keyof typeof VerificationStatus];
export declare const AppointmentStatus: {
    readonly PENDING: "PENDING";
    readonly CONFIRMED: "CONFIRMED";
    readonly COMPLETED: "COMPLETED";
    readonly CANCELLED: "CANCELLED";
};
export type AppointmentStatus = (typeof AppointmentStatus)[keyof typeof AppointmentStatus];
export declare const ReportStatus: {
    readonly PENDING: "PENDING";
    readonly RESOLVED: "RESOLVED";
    readonly DISMISSED: "DISMISSED";
};
export type ReportStatus = (typeof ReportStatus)[keyof typeof ReportStatus];
export declare const ListingStatus: {
    readonly DRAFT: "DRAFT";
    readonly ACTIVE: "ACTIVE";
    readonly SOLD: "SOLD";
    readonly EXPIRED: "EXPIRED";
    readonly ARCHIVED: "ARCHIVED";
};
export type ListingStatus = (typeof ListingStatus)[keyof typeof ListingStatus];
export declare const ProductStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly OUT_OF_STOCK: "OUT_OF_STOCK";
    readonly ARCHIVED: "ARCHIVED";
};
export type ProductStatus = (typeof ProductStatus)[keyof typeof ProductStatus];
export declare const OrderStatus: {
    readonly PENDING: "PENDING";
    readonly PAID: "PAID";
    readonly SHIPPED: "SHIPPED";
    readonly DELIVERED: "DELIVERED";
    readonly CANCELLED: "CANCELLED";
    readonly RETURNED: "RETURNED";
};
export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus];
export declare const PaymentStatus: {
    readonly PENDING: "PENDING";
    readonly PAID: "PAID";
    readonly FAILED: "FAILED";
    readonly REFUNDED: "REFUNDED";
};
export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus];
export declare const PlanType: {
    readonly CATTLE_LISTING: "CATTLE_LISTING";
    readonly DOCTOR_LISTING: "DOCTOR_LISTING";
    readonly DOCTOR_FEATURED: "DOCTOR_FEATURED";
};
export type PlanType = (typeof PlanType)[keyof typeof PlanType];
export declare const SubscriptionStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly PAST_DUE: "PAST_DUE";
    readonly CANCELED: "CANCELED";
    readonly EXPIRED: "EXPIRED";
};
export type SubscriptionStatus = (typeof SubscriptionStatus)[keyof typeof SubscriptionStatus];
export declare const LedgerDirection: {
    readonly INFLOW: "INFLOW";
    readonly OUTFLOW: "OUTFLOW";
};
export type LedgerDirection = (typeof LedgerDirection)[keyof typeof LedgerDirection];
export declare const LedgerType: {
    readonly LISTING_SUBSCRIPTION: "LISTING_SUBSCRIPTION";
    readonly PREMIUM_BOOST: "PREMIUM_BOOST";
    readonly APPOINTMENT_FEE: "APPOINTMENT_FEE";
    readonly APPOINTMENT_PAYOUT: "APPOINTMENT_PAYOUT";
    readonly MARKETPLACE_PURCHASE: "MARKETPLACE_PURCHASE";
    readonly MARKETPLACE_PAYOUT: "MARKETPLACE_PAYOUT";
    readonly BREEDING_FEE: "BREEDING_FEE";
};
export type LedgerType = (typeof LedgerType)[keyof typeof LedgerType];
export declare const UserRole: {
    readonly USER: "USER";
    readonly DOCTOR: "DOCTOR";
    readonly BREEDER: "BREEDER";
    readonly BRAND: "BRAND";
    readonly ADMIN: "ADMIN";
};
export type UserRole = (typeof UserRole)[keyof typeof UserRole];
export declare const UserStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly SUSPENDED: "SUSPENDED";
    readonly DELETED: "DELETED";
};
export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus];
//# sourceMappingURL=enums.d.ts.map