import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "./prismaNamespace.js";
export type LogOptions<ClientOptions extends Prisma.PrismaClientOptions> = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never;
export interface PrismaClientConstructor {
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
    new <Options extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions, LogOpts extends LogOptions<Options> = LogOptions<Options>, OmitOpts extends Prisma.PrismaClientOptions['omit'] = Options extends {
        omit: infer U;
    } ? U : Prisma.PrismaClientOptions['omit'], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs>(options: Prisma.Subset<Options, Prisma.PrismaClientOptions>): PrismaClient<LogOpts, OmitOpts, ExtArgs>;
}
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
export interface PrismaClient<in LogOpts extends Prisma.LogLevel = never, in out OmitOpts extends Prisma.PrismaClientOptions['omit'] = undefined, in out ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['other'];
    };
    $on<V extends LogOpts>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;
    /**
     * Connect with the database
     */
    $connect(): runtime.Types.Utils.JsPromise<void>;
    /**
     * Disconnect from the database
     */
    $disconnect(): runtime.Types.Utils.JsPromise<void>;
    /**
       * Executes a prepared raw query and returns the number of affected rows.
       * @example
       * ```
       * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
       * ```
       *
       * Read more in our [docs](https://pris.ly/d/raw-queries).
       */
    $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;
    /**
     * Executes a raw query and returns the number of affected rows.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;
    /**
     * Performs a prepared raw query and returns the `SELECT` data.
     * @example
     * ```
     * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;
    /**
     * Performs a raw query and returns the `SELECT` data.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;
    /**
     * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
     * @example
     * ```
     * const [george, bob, alice] = await prisma.$transaction([
     *   prisma.user.create({ data: { name: 'George' } }),
     *   prisma.user.create({ data: { name: 'Bob' } }),
     *   prisma.user.create({ data: { name: 'Alice' } }),
     * ])
     * ```
     *
     * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
     */
    $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;
    $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => runtime.Types.Utils.JsPromise<R>, options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<R>;
    $extends: runtime.Types.Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<OmitOpts>, ExtArgs, runtime.Types.Utils.Call<Prisma.TypeMapCb<OmitOpts>, {
        extArgs: ExtArgs;
    }>>;
    /**
 * `prisma.animal`: Exposes CRUD operations for the **Animal** model.
  * Example usage:
  * ```ts
  * // Fetch zero or more Animals
  * const animals = await prisma.animal.findMany()
  * ```
  */
    get animal(): Prisma.AnimalDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.vaccinationRecord`: Exposes CRUD operations for the **VaccinationRecord** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more VaccinationRecords
      * const vaccinationRecords = await prisma.vaccinationRecord.findMany()
      * ```
      */
    get vaccinationRecord(): Prisma.VaccinationRecordDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.category`: Exposes CRUD operations for the **Category** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Categories
      * const categories = await prisma.category.findMany()
      * ```
      */
    get category(): Prisma.CategoryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.subCategory`: Exposes CRUD operations for the **SubCategory** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more SubCategories
      * const subCategories = await prisma.subCategory.findMany()
      * ```
      */
    get subCategory(): Prisma.SubCategoryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.breederProfile`: Exposes CRUD operations for the **BreederProfile** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more BreederProfiles
      * const breederProfiles = await prisma.breederProfile.findMany()
      * ```
      */
    get breederProfile(): Prisma.BreederProfileDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.breedingRequest`: Exposes CRUD operations for the **BreedingRequest** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more BreedingRequests
      * const breedingRequests = await prisma.breedingRequest.findMany()
      * ```
      */
    get breedingRequest(): Prisma.BreedingRequestDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.breederReview`: Exposes CRUD operations for the **BreederReview** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more BreederReviews
      * const breederReviews = await prisma.breederReview.findMany()
      * ```
      */
    get breederReview(): Prisma.BreederReviewDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.doctorProfile`: Exposes CRUD operations for the **DoctorProfile** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more DoctorProfiles
      * const doctorProfiles = await prisma.doctorProfile.findMany()
      * ```
      */
    get doctorProfile(): Prisma.DoctorProfileDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.doctorLocation`: Exposes CRUD operations for the **DoctorLocation** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more DoctorLocations
      * const doctorLocations = await prisma.doctorLocation.findMany()
      * ```
      */
    get doctorLocation(): Prisma.DoctorLocationDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.doctorVerificationLog`: Exposes CRUD operations for the **DoctorVerificationLog** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more DoctorVerificationLogs
      * const doctorVerificationLogs = await prisma.doctorVerificationLog.findMany()
      * ```
      */
    get doctorVerificationLog(): Prisma.DoctorVerificationLogDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.doctorAppointment`: Exposes CRUD operations for the **DoctorAppointment** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more DoctorAppointments
      * const doctorAppointments = await prisma.doctorAppointment.findMany()
      * ```
      */
    get doctorAppointment(): Prisma.DoctorAppointmentDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.doctorReview`: Exposes CRUD operations for the **DoctorReview** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more DoctorReviews
      * const doctorReviews = await prisma.doctorReview.findMany()
      * ```
      */
    get doctorReview(): Prisma.DoctorReviewDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.forumQuestion`: Exposes CRUD operations for the **ForumQuestion** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ForumQuestions
      * const forumQuestions = await prisma.forumQuestion.findMany()
      * ```
      */
    get forumQuestion(): Prisma.ForumQuestionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.forumAnswer`: Exposes CRUD operations for the **ForumAnswer** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ForumAnswers
      * const forumAnswers = await prisma.forumAnswer.findMany()
      * ```
      */
    get forumAnswer(): Prisma.ForumAnswerDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.forumComment`: Exposes CRUD operations for the **ForumComment** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ForumComments
      * const forumComments = await prisma.forumComment.findMany()
      * ```
      */
    get forumComment(): Prisma.ForumCommentDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.forumVote`: Exposes CRUD operations for the **ForumVote** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ForumVotes
      * const forumVotes = await prisma.forumVote.findMany()
      * ```
      */
    get forumVote(): Prisma.ForumVoteDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.forumBookmark`: Exposes CRUD operations for the **ForumBookmark** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ForumBookmarks
      * const forumBookmarks = await prisma.forumBookmark.findMany()
      * ```
      */
    get forumBookmark(): Prisma.ForumBookmarkDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.forumReport`: Exposes CRUD operations for the **ForumReport** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ForumReports
      * const forumReports = await prisma.forumReport.findMany()
      * ```
      */
    get forumReport(): Prisma.ForumReportDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.cattleListing`: Exposes CRUD operations for the **CattleListing** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more CattleListings
      * const cattleListings = await prisma.cattleListing.findMany()
      * ```
      */
    get cattleListing(): Prisma.CattleListingDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.listingImage`: Exposes CRUD operations for the **ListingImage** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ListingImages
      * const listingImages = await prisma.listingImage.findMany()
      * ```
      */
    get listingImage(): Prisma.ListingImageDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.listingLocation`: Exposes CRUD operations for the **ListingLocation** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ListingLocations
      * const listingLocations = await prisma.listingLocation.findMany()
      * ```
      */
    get listingLocation(): Prisma.ListingLocationDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.brandProfile`: Exposes CRUD operations for the **BrandProfile** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more BrandProfiles
      * const brandProfiles = await prisma.brandProfile.findMany()
      * ```
      */
    get brandProfile(): Prisma.BrandProfileDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.brandLocation`: Exposes CRUD operations for the **BrandLocation** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more BrandLocations
      * const brandLocations = await prisma.brandLocation.findMany()
      * ```
      */
    get brandLocation(): Prisma.BrandLocationDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.marketplaceCategory`: Exposes CRUD operations for the **MarketplaceCategory** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more MarketplaceCategories
      * const marketplaceCategories = await prisma.marketplaceCategory.findMany()
      * ```
      */
    get marketplaceCategory(): Prisma.MarketplaceCategoryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.marketplaceProduct`: Exposes CRUD operations for the **MarketplaceProduct** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more MarketplaceProducts
      * const marketplaceProducts = await prisma.marketplaceProduct.findMany()
      * ```
      */
    get marketplaceProduct(): Prisma.MarketplaceProductDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.productVariant`: Exposes CRUD operations for the **ProductVariant** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ProductVariants
      * const productVariants = await prisma.productVariant.findMany()
      * ```
      */
    get productVariant(): Prisma.ProductVariantDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.marketplaceOrder`: Exposes CRUD operations for the **MarketplaceOrder** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more MarketplaceOrders
      * const marketplaceOrders = await prisma.marketplaceOrder.findMany()
      * ```
      */
    get marketplaceOrder(): Prisma.MarketplaceOrderDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.marketplaceOrderItem`: Exposes CRUD operations for the **MarketplaceOrderItem** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more MarketplaceOrderItems
      * const marketplaceOrderItems = await prisma.marketplaceOrderItem.findMany()
      * ```
      */
    get marketplaceOrderItem(): Prisma.MarketplaceOrderItemDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.productReview`: Exposes CRUD operations for the **ProductReview** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ProductReviews
      * const productReviews = await prisma.productReview.findMany()
      * ```
      */
    get productReview(): Prisma.ProductReviewDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.cart`: Exposes CRUD operations for the **Cart** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Carts
      * const carts = await prisma.cart.findMany()
      * ```
      */
    get cart(): Prisma.CartDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.cartItem`: Exposes CRUD operations for the **CartItem** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more CartItems
      * const cartItems = await prisma.cartItem.findMany()
      * ```
      */
    get cartItem(): Prisma.CartItemDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.subscriptionPlan`: Exposes CRUD operations for the **SubscriptionPlan** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more SubscriptionPlans
      * const subscriptionPlans = await prisma.subscriptionPlan.findMany()
      * ```
      */
    get subscriptionPlan(): Prisma.SubscriptionPlanDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.subscription`: Exposes CRUD operations for the **Subscription** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Subscriptions
      * const subscriptions = await prisma.subscription.findMany()
      * ```
      */
    get subscription(): Prisma.SubscriptionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.platformLedger`: Exposes CRUD operations for the **PlatformLedger** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more PlatformLedgers
      * const platformLedgers = await prisma.platformLedger.findMany()
      * ```
      */
    get platformLedger(): Prisma.PlatformLedgerDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.user`: Exposes CRUD operations for the **User** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Users
      * const users = await prisma.user.findMany()
      * ```
      */
    get user(): Prisma.UserDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.state`: Exposes CRUD operations for the **State** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more States
      * const states = await prisma.state.findMany()
      * ```
      */
    get state(): Prisma.StateDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.city`: Exposes CRUD operations for the **City** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Cities
      * const cities = await prisma.city.findMany()
      * ```
      */
    get city(): Prisma.CityDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.area`: Exposes CRUD operations for the **Area** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Areas
      * const areas = await prisma.area.findMany()
      * ```
      */
    get area(): Prisma.AreaDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.otpCode`: Exposes CRUD operations for the **OtpCode** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more OtpCodes
      * const otpCodes = await prisma.otpCode.findMany()
      * ```
      */
    get otpCode(): Prisma.OtpCodeDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.userAddress`: Exposes CRUD operations for the **UserAddress** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more UserAddresses
      * const userAddresses = await prisma.userAddress.findMany()
      * ```
      */
    get userAddress(): Prisma.UserAddressDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
}
export declare function getPrismaClientClass(): PrismaClientConstructor;
//# sourceMappingURL=class.d.ts.map