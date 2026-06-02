import * as runtime from "@prisma/client/runtime/client";
import * as $Class from "./internal/class.js";
import * as Prisma from "./internal/prismaNamespace.js";
export * as $Enums from './enums.js';
export * from "./enums.js";
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Animals
 * const animals = await prisma.animal.findMany()
 * ```
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export declare const PrismaClient: $Class.PrismaClientConstructor;
export type PrismaClient<LogOpts extends Prisma.LogLevel = never, OmitOpts extends Prisma.PrismaClientOptions["omit"] = Prisma.PrismaClientOptions["omit"], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = $Class.PrismaClient<LogOpts, OmitOpts, ExtArgs>;
export { Prisma };
/**
 * Model Animal
 *
 */
export type Animal = Prisma.AnimalModel;
/**
 * Model VaccinationRecord
 *
 */
export type VaccinationRecord = Prisma.VaccinationRecordModel;
/**
 * Model Category
 *
 */
export type Category = Prisma.CategoryModel;
/**
 * Model SubCategory
 *
 */
export type SubCategory = Prisma.SubCategoryModel;
/**
 * Model BreederProfile
 *
 */
export type BreederProfile = Prisma.BreederProfileModel;
/**
 * Model BreedingRequest
 *
 */
export type BreedingRequest = Prisma.BreedingRequestModel;
/**
 * Model BreederReview
 *
 */
export type BreederReview = Prisma.BreederReviewModel;
/**
 * Model DoctorProfile
 *
 */
export type DoctorProfile = Prisma.DoctorProfileModel;
/**
 * Model DoctorLocation
 *
 */
export type DoctorLocation = Prisma.DoctorLocationModel;
/**
 * Model DoctorVerificationLog
 *
 */
export type DoctorVerificationLog = Prisma.DoctorVerificationLogModel;
/**
 * Model DoctorAppointment
 *
 */
export type DoctorAppointment = Prisma.DoctorAppointmentModel;
/**
 * Model DoctorReview
 *
 */
export type DoctorReview = Prisma.DoctorReviewModel;
/**
 * Model ForumQuestion
 *
 */
export type ForumQuestion = Prisma.ForumQuestionModel;
/**
 * Model ForumAnswer
 *
 */
export type ForumAnswer = Prisma.ForumAnswerModel;
/**
 * Model QuestionVote
 *
 */
export type QuestionVote = Prisma.QuestionVoteModel;
/**
 * Model AnswerVote
 *
 */
export type AnswerVote = Prisma.AnswerVoteModel;
/**
 * Model ForumReport
 *
 */
export type ForumReport = Prisma.ForumReportModel;
/**
 * Model CattleListing
 *
 */
export type CattleListing = Prisma.CattleListingModel;
/**
 * Model ListingImage
 *
 */
export type ListingImage = Prisma.ListingImageModel;
/**
 * Model ListingLocation
 *
 */
export type ListingLocation = Prisma.ListingLocationModel;
/**
 * Model BrandProfile
 *
 */
export type BrandProfile = Prisma.BrandProfileModel;
/**
 * Model BrandLocation
 *
 */
export type BrandLocation = Prisma.BrandLocationModel;
/**
 * Model MarketplaceCategory
 *
 */
export type MarketplaceCategory = Prisma.MarketplaceCategoryModel;
/**
 * Model MarketplaceProduct
 *
 */
export type MarketplaceProduct = Prisma.MarketplaceProductModel;
/**
 * Model ProductVariant
 *
 */
export type ProductVariant = Prisma.ProductVariantModel;
/**
 * Model MarketplaceOrder
 *
 */
export type MarketplaceOrder = Prisma.MarketplaceOrderModel;
/**
 * Model MarketplaceOrderItem
 *
 */
export type MarketplaceOrderItem = Prisma.MarketplaceOrderItemModel;
/**
 * Model ProductReview
 *
 */
export type ProductReview = Prisma.ProductReviewModel;
/**
 * Model Cart
 *
 */
export type Cart = Prisma.CartModel;
/**
 * Model CartItem
 *
 */
export type CartItem = Prisma.CartItemModel;
/**
 * Model SubscriptionPlan
 *
 */
export type SubscriptionPlan = Prisma.SubscriptionPlanModel;
/**
 * Model Subscription
 *
 */
export type Subscription = Prisma.SubscriptionModel;
/**
 * Model PlatformLedger
 *
 */
export type PlatformLedger = Prisma.PlatformLedgerModel;
/**
 * Model User
 *
 */
export type User = Prisma.UserModel;
/**
 * Model State
 *
 */
export type State = Prisma.StateModel;
/**
 * Model City
 *
 */
export type City = Prisma.CityModel;
/**
 * Model Area
 *
 */
export type Area = Prisma.AreaModel;
/**
 * Model OtpCode
 *
 */
export type OtpCode = Prisma.OtpCodeModel;
/**
 * Model UserAddress
 *
 */
export type UserAddress = Prisma.UserAddressModel;
//# sourceMappingURL=client.d.ts.map