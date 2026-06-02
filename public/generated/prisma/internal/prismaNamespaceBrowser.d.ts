import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly Animal: "Animal";
    readonly VaccinationRecord: "VaccinationRecord";
    readonly Category: "Category";
    readonly SubCategory: "SubCategory";
    readonly BreederProfile: "BreederProfile";
    readonly BreedingRequest: "BreedingRequest";
    readonly BreederReview: "BreederReview";
    readonly DoctorProfile: "DoctorProfile";
    readonly DoctorLocation: "DoctorLocation";
    readonly DoctorVerificationLog: "DoctorVerificationLog";
    readonly DoctorAppointment: "DoctorAppointment";
    readonly DoctorReview: "DoctorReview";
    readonly ForumQuestion: "ForumQuestion";
    readonly ForumAnswer: "ForumAnswer";
    readonly QuestionVote: "QuestionVote";
    readonly AnswerVote: "AnswerVote";
    readonly ForumReport: "ForumReport";
    readonly CattleListing: "CattleListing";
    readonly ListingImage: "ListingImage";
    readonly ListingLocation: "ListingLocation";
    readonly BrandProfile: "BrandProfile";
    readonly BrandLocation: "BrandLocation";
    readonly MarketplaceCategory: "MarketplaceCategory";
    readonly MarketplaceProduct: "MarketplaceProduct";
    readonly ProductVariant: "ProductVariant";
    readonly MarketplaceOrder: "MarketplaceOrder";
    readonly MarketplaceOrderItem: "MarketplaceOrderItem";
    readonly ProductReview: "ProductReview";
    readonly Cart: "Cart";
    readonly CartItem: "CartItem";
    readonly SubscriptionPlan: "SubscriptionPlan";
    readonly Subscription: "Subscription";
    readonly PlatformLedger: "PlatformLedger";
    readonly User: "User";
    readonly State: "State";
    readonly City: "City";
    readonly Area: "Area";
    readonly OtpCode: "OtpCode";
    readonly UserAddress: "UserAddress";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const AnimalScalarFieldEnum: {
    readonly id: "id";
    readonly ownerId: "ownerId";
    readonly mainCategoryId: "mainCategoryId";
    readonly subCategoryId: "subCategoryId";
    readonly name: "name";
    readonly category: "category";
    readonly breed: "breed";
    readonly ageMonths: "ageMonths";
    readonly gender: "gender";
    readonly weightKg: "weightKg";
    readonly description: "description";
    readonly doesGiveMilk: "doesGiveMilk";
    readonly dailyMilkProdLtr: "dailyMilkProdLtr";
    readonly status: "status";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type AnimalScalarFieldEnum = (typeof AnimalScalarFieldEnum)[keyof typeof AnimalScalarFieldEnum];
export declare const VaccinationRecordScalarFieldEnum: {
    readonly id: "id";
    readonly animalId: "animalId";
    readonly vaccineName: "vaccineName";
    readonly administeredAt: "administeredAt";
    readonly nextDueDate: "nextDueDate";
    readonly proofDocUrl: "proofDocUrl";
    readonly verifiedByDoctorId: "verifiedByDoctorId";
    readonly createdAt: "createdAt";
};
export type VaccinationRecordScalarFieldEnum = (typeof VaccinationRecordScalarFieldEnum)[keyof typeof VaccinationRecordScalarFieldEnum];
export declare const CategoryScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly description: "description";
    readonly imageUrl: "imageUrl";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum];
export declare const SubCategoryScalarFieldEnum: {
    readonly id: "id";
    readonly categoryId: "categoryId";
    readonly name: "name";
    readonly description: "description";
    readonly imageUrl: "imageUrl";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type SubCategoryScalarFieldEnum = (typeof SubCategoryScalarFieldEnum)[keyof typeof SubCategoryScalarFieldEnum];
export declare const BreederProfileScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly description: "description";
    readonly serviceFee: "serviceFee";
    readonly isVerified: "isVerified";
    readonly latitude: "latitude";
    readonly longitude: "longitude";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type BreederProfileScalarFieldEnum = (typeof BreederProfileScalarFieldEnum)[keyof typeof BreederProfileScalarFieldEnum];
export declare const BreedingRequestScalarFieldEnum: {
    readonly id: "id";
    readonly breederId: "breederId";
    readonly requesterId: "requesterId";
    readonly requesterAnimalId: "requesterAnimalId";
    readonly breederAnimalId: "breederAnimalId";
    readonly status: "status";
    readonly agreedPrice: "agreedPrice";
    readonly paymentIntentId: "paymentIntentId";
    readonly breedingDate: "breedingDate";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type BreedingRequestScalarFieldEnum = (typeof BreedingRequestScalarFieldEnum)[keyof typeof BreedingRequestScalarFieldEnum];
export declare const BreederReviewScalarFieldEnum: {
    readonly id: "id";
    readonly breederId: "breederId";
    readonly rating: "rating";
    readonly comment: "comment";
    readonly createdAt: "createdAt";
};
export type BreederReviewScalarFieldEnum = (typeof BreederReviewScalarFieldEnum)[keyof typeof BreederReviewScalarFieldEnum];
export declare const DoctorProfileScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly licenseNumber: "licenseNumber";
    readonly specialization: "specialization";
    readonly experienceYears: "experienceYears";
    readonly qualificationDocUrl: "qualificationDocUrl";
    readonly isVerified: "isVerified";
    readonly verificationStatus: "verificationStatus";
    readonly listingStatus: "listingStatus";
    readonly consultationFee: "consultationFee";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type DoctorProfileScalarFieldEnum = (typeof DoctorProfileScalarFieldEnum)[keyof typeof DoctorProfileScalarFieldEnum];
export declare const DoctorLocationScalarFieldEnum: {
    readonly id: "id";
    readonly doctorId: "doctorId";
    readonly latitude: "latitude";
    readonly longitude: "longitude";
    readonly stateId: "stateId";
    readonly cityId: "cityId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type DoctorLocationScalarFieldEnum = (typeof DoctorLocationScalarFieldEnum)[keyof typeof DoctorLocationScalarFieldEnum];
export declare const DoctorVerificationLogScalarFieldEnum: {
    readonly id: "id";
    readonly doctorId: "doctorId";
    readonly action: "action";
    readonly remarks: "remarks";
    readonly createdAt: "createdAt";
};
export type DoctorVerificationLogScalarFieldEnum = (typeof DoctorVerificationLogScalarFieldEnum)[keyof typeof DoctorVerificationLogScalarFieldEnum];
export declare const DoctorAppointmentScalarFieldEnum: {
    readonly id: "id";
    readonly doctorId: "doctorId";
    readonly patientId: "patientId";
    readonly appointmentDate: "appointmentDate";
    readonly timeSlot: "timeSlot";
    readonly status: "status";
    readonly totalPaid: "totalPaid";
    readonly commissionAmount: "commissionAmount";
    readonly payoutAmount: "payoutAmount";
    readonly paymentIntentId: "paymentIntentId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type DoctorAppointmentScalarFieldEnum = (typeof DoctorAppointmentScalarFieldEnum)[keyof typeof DoctorAppointmentScalarFieldEnum];
export declare const DoctorReviewScalarFieldEnum: {
    readonly id: "id";
    readonly doctorId: "doctorId";
    readonly appointmentId: "appointmentId";
    readonly rating: "rating";
    readonly comment: "comment";
    readonly createdAt: "createdAt";
};
export type DoctorReviewScalarFieldEnum = (typeof DoctorReviewScalarFieldEnum)[keyof typeof DoctorReviewScalarFieldEnum];
export declare const ForumQuestionScalarFieldEnum: {
    readonly id: "id";
    readonly authorId: "authorId";
    readonly title: "title";
    readonly content: "content";
    readonly tags: "tags";
    readonly viewCount: "viewCount";
    readonly isLocked: "isLocked";
    readonly isPinned: "isPinned";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ForumQuestionScalarFieldEnum = (typeof ForumQuestionScalarFieldEnum)[keyof typeof ForumQuestionScalarFieldEnum];
export declare const ForumAnswerScalarFieldEnum: {
    readonly id: "id";
    readonly questionId: "questionId";
    readonly authorId: "authorId";
    readonly content: "content";
    readonly isAccepted: "isAccepted";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ForumAnswerScalarFieldEnum = (typeof ForumAnswerScalarFieldEnum)[keyof typeof ForumAnswerScalarFieldEnum];
export declare const QuestionVoteScalarFieldEnum: {
    readonly id: "id";
    readonly questionId: "questionId";
    readonly userId: "userId";
    readonly value: "value";
};
export type QuestionVoteScalarFieldEnum = (typeof QuestionVoteScalarFieldEnum)[keyof typeof QuestionVoteScalarFieldEnum];
export declare const AnswerVoteScalarFieldEnum: {
    readonly id: "id";
    readonly answerId: "answerId";
    readonly userId: "userId";
    readonly value: "value";
};
export type AnswerVoteScalarFieldEnum = (typeof AnswerVoteScalarFieldEnum)[keyof typeof AnswerVoteScalarFieldEnum];
export declare const ForumReportScalarFieldEnum: {
    readonly id: "id";
    readonly questionId: "questionId";
    readonly reporterId: "reporterId";
    readonly reason: "reason";
    readonly status: "status";
    readonly reviewerId: "reviewerId";
    readonly remarks: "remarks";
    readonly createdAt: "createdAt";
};
export type ForumReportScalarFieldEnum = (typeof ForumReportScalarFieldEnum)[keyof typeof ForumReportScalarFieldEnum];
export declare const CattleListingScalarFieldEnum: {
    readonly id: "id";
    readonly ownerId: "ownerId";
    readonly animalId: "animalId";
    readonly title: "title";
    readonly description: "description";
    readonly price: "price";
    readonly status: "status";
    readonly latitude: "latitude";
    readonly longitude: "longitude";
    readonly listingExpiresAt: "listingExpiresAt";
    readonly deletedAt: "deletedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CattleListingScalarFieldEnum = (typeof CattleListingScalarFieldEnum)[keyof typeof CattleListingScalarFieldEnum];
export declare const ListingImageScalarFieldEnum: {
    readonly id: "id";
    readonly listingId: "listingId";
    readonly url: "url";
    readonly sortOrder: "sortOrder";
    readonly createdAt: "createdAt";
};
export type ListingImageScalarFieldEnum = (typeof ListingImageScalarFieldEnum)[keyof typeof ListingImageScalarFieldEnum];
export declare const ListingLocationScalarFieldEnum: {
    readonly id: "id";
    readonly listingId: "listingId";
    readonly stateId: "stateId";
    readonly cityId: "cityId";
    readonly areaId: "areaId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ListingLocationScalarFieldEnum = (typeof ListingLocationScalarFieldEnum)[keyof typeof ListingLocationScalarFieldEnum];
export declare const BrandProfileScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly brandName: "brandName";
    readonly slug: "slug";
    readonly description: "description";
    readonly logoUrl: "logoUrl";
    readonly bannerUrl: "bannerUrl";
    readonly contactEmail: "contactEmail";
    readonly contactPhone: "contactPhone";
    readonly address: "address";
    readonly gstNumber: "gstNumber";
    readonly isVerified: "isVerified";
    readonly isActive: "isActive";
    readonly rating: "rating";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type BrandProfileScalarFieldEnum = (typeof BrandProfileScalarFieldEnum)[keyof typeof BrandProfileScalarFieldEnum];
export declare const BrandLocationScalarFieldEnum: {
    readonly id: "id";
    readonly brandId: "brandId";
    readonly latitude: "latitude";
    readonly longitude: "longitude";
    readonly stateId: "stateId";
    readonly cityId: "cityId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type BrandLocationScalarFieldEnum = (typeof BrandLocationScalarFieldEnum)[keyof typeof BrandLocationScalarFieldEnum];
export declare const MarketplaceCategoryScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly brandId: "brandId";
    readonly description: "description";
    readonly parentId: "parentId";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type MarketplaceCategoryScalarFieldEnum = (typeof MarketplaceCategoryScalarFieldEnum)[keyof typeof MarketplaceCategoryScalarFieldEnum];
export declare const MarketplaceProductScalarFieldEnum: {
    readonly id: "id";
    readonly brandId: "brandId";
    readonly categoryId: "categoryId";
    readonly title: "title";
    readonly slug: "slug";
    readonly description: "description";
    readonly status: "status";
    readonly metaTitle: "metaTitle";
    readonly metaDescription: "metaDescription";
    readonly images: "images";
    readonly attributes: "attributes";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type MarketplaceProductScalarFieldEnum = (typeof MarketplaceProductScalarFieldEnum)[keyof typeof MarketplaceProductScalarFieldEnum];
export declare const ProductVariantScalarFieldEnum: {
    readonly id: "id";
    readonly productId: "productId";
    readonly sku: "sku";
    readonly title: "title";
    readonly price: "price";
    readonly compareAtPrice: "compareAtPrice";
    readonly stock: "stock";
    readonly imageUrl: "imageUrl";
    readonly isActive: "isActive";
    readonly isDefault: "isDefault";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ProductVariantScalarFieldEnum = (typeof ProductVariantScalarFieldEnum)[keyof typeof ProductVariantScalarFieldEnum];
export declare const MarketplaceOrderScalarFieldEnum: {
    readonly id: "id";
    readonly buyerId: "buyerId";
    readonly subTotal: "subTotal";
    readonly discountAmount: "discountAmount";
    readonly shippingAmount: "shippingAmount";
    readonly taxAmount: "taxAmount";
    readonly totalAmount: "totalAmount";
    readonly paymentStatus: "paymentStatus";
    readonly paymentIntentId: "paymentIntentId";
    readonly shippingAddressId: "shippingAddressId";
    readonly billingAddressId: "billingAddressId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type MarketplaceOrderScalarFieldEnum = (typeof MarketplaceOrderScalarFieldEnum)[keyof typeof MarketplaceOrderScalarFieldEnum];
export declare const MarketplaceOrderItemScalarFieldEnum: {
    readonly id: "id";
    readonly orderId: "orderId";
    readonly variantId: "variantId";
    readonly brandId: "brandId";
    readonly quantity: "quantity";
    readonly price: "price";
    readonly taxAmount: "taxAmount";
    readonly discountAmount: "discountAmount";
    readonly status: "status";
    readonly trackingNumber: "trackingNumber";
    readonly carrier: "carrier";
    readonly shippedAt: "shippedAt";
    readonly deliveredAt: "deliveredAt";
};
export type MarketplaceOrderItemScalarFieldEnum = (typeof MarketplaceOrderItemScalarFieldEnum)[keyof typeof MarketplaceOrderItemScalarFieldEnum];
export declare const ProductReviewScalarFieldEnum: {
    readonly id: "id";
    readonly productId: "productId";
    readonly userId: "userId";
    readonly rating: "rating";
    readonly comment: "comment";
    readonly images: "images";
    readonly isVerifiedPurchase: "isVerifiedPurchase";
    readonly sellerReply: "sellerReply";
    readonly createdAt: "createdAt";
};
export type ProductReviewScalarFieldEnum = (typeof ProductReviewScalarFieldEnum)[keyof typeof ProductReviewScalarFieldEnum];
export declare const CartScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly subTotal: "subTotal";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CartScalarFieldEnum = (typeof CartScalarFieldEnum)[keyof typeof CartScalarFieldEnum];
export declare const CartItemScalarFieldEnum: {
    readonly id: "id";
    readonly cartId: "cartId";
    readonly variantId: "variantId";
    readonly quantity: "quantity";
    readonly total: "total";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CartItemScalarFieldEnum = (typeof CartItemScalarFieldEnum)[keyof typeof CartItemScalarFieldEnum];
export declare const SubscriptionPlanScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly description: "description";
    readonly type: "type";
    readonly price: "price";
    readonly durationDays: "durationDays";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type SubscriptionPlanScalarFieldEnum = (typeof SubscriptionPlanScalarFieldEnum)[keyof typeof SubscriptionPlanScalarFieldEnum];
export declare const SubscriptionScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly planId: "planId";
    readonly status: "status";
    readonly stripeSubId: "stripeSubId";
    readonly currentPeriodStart: "currentPeriodStart";
    readonly currentPeriodEnd: "currentPeriodEnd";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type SubscriptionScalarFieldEnum = (typeof SubscriptionScalarFieldEnum)[keyof typeof SubscriptionScalarFieldEnum];
export declare const PlatformLedgerScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly amount: "amount";
    readonly direction: "direction";
    readonly type: "type";
    readonly paymentGateway: "paymentGateway";
    readonly gatewayRefId: "gatewayRefId";
    readonly feeCharged: "feeCharged";
    readonly createdAt: "createdAt";
};
export type PlatformLedgerScalarFieldEnum = (typeof PlatformLedgerScalarFieldEnum)[keyof typeof PlatformLedgerScalarFieldEnum];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly name: "name";
    readonly phone: "phone";
    readonly avatarUrl: "avatarUrl";
    readonly role: "role";
    readonly status: "status";
    readonly lastLoginAt: "lastLoginAt";
    readonly deletedAt: "deletedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const StateScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly state: "state";
    readonly country: "country";
    readonly countryCode: "countryCode";
    readonly stateCode: "stateCode";
    readonly latitude: "latitude";
    readonly longitude: "longitude";
    readonly isActive: "isActive";
    readonly isHiring: "isHiring";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly deletedAt: "deletedAt";
};
export type StateScalarFieldEnum = (typeof StateScalarFieldEnum)[keyof typeof StateScalarFieldEnum];
export declare const CityScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly country: "country";
    readonly countryCode: "countryCode";
    readonly stateCode: "stateCode";
    readonly stateId: "stateId";
    readonly latitude: "latitude";
    readonly longitude: "longitude";
    readonly isActive: "isActive";
    readonly isHiring: "isHiring";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly deletedAt: "deletedAt";
};
export type CityScalarFieldEnum = (typeof CityScalarFieldEnum)[keyof typeof CityScalarFieldEnum];
export declare const AreaScalarFieldEnum: {
    readonly id: "id";
    readonly cityId: "cityId";
    readonly name: "name";
    readonly latitude: "latitude";
    readonly longitude: "longitude";
    readonly serviceRadiusKm: "serviceRadiusKm";
    readonly isActive: "isActive";
    readonly isHiring: "isHiring";
    readonly priority: "priority";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly deletedAt: "deletedAt";
};
export type AreaScalarFieldEnum = (typeof AreaScalarFieldEnum)[keyof typeof AreaScalarFieldEnum];
export declare const OtpCodeScalarFieldEnum: {
    readonly id: "id";
    readonly mobile: "mobile";
    readonly otp: "otp";
    readonly expiresAt: "expiresAt";
    readonly attempts: "attempts";
    readonly lastAttemptedAt: "lastAttemptedAt";
    readonly isUsed: "isUsed";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type OtpCodeScalarFieldEnum = (typeof OtpCodeScalarFieldEnum)[keyof typeof OtpCodeScalarFieldEnum];
export declare const UserAddressScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly name: "name";
    readonly recipientName: "recipientName";
    readonly phone: "phone";
    readonly streetAddress: "streetAddress";
    readonly apartment: "apartment";
    readonly city: "city";
    readonly state: "state";
    readonly country: "country";
    readonly postalCode: "postalCode";
    readonly latitude: "latitude";
    readonly longitude: "longitude";
    readonly isDefault: "isDefault";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserAddressScalarFieldEnum = (typeof UserAddressScalarFieldEnum)[keyof typeof UserAddressScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const JsonNullValueFilter: {
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
    readonly AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map