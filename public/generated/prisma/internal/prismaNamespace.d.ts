import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
/**
 * Prisma Errors
 */
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
/**
 * Re-export of sql-template-tag
 */
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
/**
 * Decimal.js
 */
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
/**
* Extensions
*/
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
/**
 * Prisma Client JS version: 7.8.0
 * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
 */
export declare const prismaVersion: PrismaVersion;
/**
 * Utility Types
 */
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
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
export declare const DbNull: runtime.DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: runtime.JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
/**
 * From T, pick a set of properties whose keys are in the union K
 */
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
/**
 * Subset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
 */
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
/**
 * SelectSubset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
 * Additionally, it validates, if both select and include are present. If the case, it errors.
 */
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
/**
 * Subset + Intersection
 * @desc From `T` pick properties that exist in `U` and intersect `K`
 */
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
/**
 * XOR is needed to have a real mutually exclusive union type
 * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
 */
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
/**
 * Is T a Record?
 */
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
/**
 * If it's T[], return T
 */
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
/**
 * From ts-toolbelt
 */
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
/** Helper Types for "Merge" **/
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
/** End Helper Types for "Merge" **/
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
/**
 * Convert tuple to union
 */
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
/**
 * Like `Pick`, but additionally can also accept an array of keys
 */
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
/**
 * Exclude all keys with underscores
 */
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
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
    readonly MarketplaceProduct: "MarketplaceProduct";
    readonly ProductReview: "ProductReview";
    readonly Cart: "Cart";
    readonly CartItem: "CartItem";
    readonly MarketplaceOrder: "MarketplaceOrder";
    readonly MarketplaceOrderItem: "MarketplaceOrderItem";
    readonly SubscriptionPlan: "SubscriptionPlan";
    readonly Subscription: "Subscription";
    readonly PlatformLedger: "PlatformLedger";
    readonly User: "User";
    readonly State: "State";
    readonly City: "City";
    readonly Area: "Area";
    readonly OtpCode: "OtpCode";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "animal" | "vaccinationRecord" | "category" | "subCategory" | "breederProfile" | "breedingRequest" | "breederReview" | "doctorProfile" | "doctorLocation" | "doctorVerificationLog" | "doctorAppointment" | "doctorReview" | "forumQuestion" | "forumAnswer" | "questionVote" | "answerVote" | "forumReport" | "cattleListing" | "listingImage" | "listingLocation" | "brandProfile" | "marketplaceProduct" | "productReview" | "cart" | "cartItem" | "marketplaceOrder" | "marketplaceOrderItem" | "subscriptionPlan" | "subscription" | "platformLedger" | "user" | "state" | "city" | "area" | "otpCode";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        Animal: {
            payload: Prisma.$AnimalPayload<ExtArgs>;
            fields: Prisma.AnimalFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AnimalFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnimalPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AnimalFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnimalPayload>;
                };
                findFirst: {
                    args: Prisma.AnimalFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnimalPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AnimalFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnimalPayload>;
                };
                findMany: {
                    args: Prisma.AnimalFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnimalPayload>[];
                };
                create: {
                    args: Prisma.AnimalCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnimalPayload>;
                };
                createMany: {
                    args: Prisma.AnimalCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AnimalCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnimalPayload>[];
                };
                delete: {
                    args: Prisma.AnimalDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnimalPayload>;
                };
                update: {
                    args: Prisma.AnimalUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnimalPayload>;
                };
                deleteMany: {
                    args: Prisma.AnimalDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AnimalUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AnimalUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnimalPayload>[];
                };
                upsert: {
                    args: Prisma.AnimalUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnimalPayload>;
                };
                aggregate: {
                    args: Prisma.AnimalAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAnimal>;
                };
                groupBy: {
                    args: Prisma.AnimalGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AnimalGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AnimalCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AnimalCountAggregateOutputType> | number;
                };
            };
        };
        VaccinationRecord: {
            payload: Prisma.$VaccinationRecordPayload<ExtArgs>;
            fields: Prisma.VaccinationRecordFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.VaccinationRecordFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VaccinationRecordPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.VaccinationRecordFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VaccinationRecordPayload>;
                };
                findFirst: {
                    args: Prisma.VaccinationRecordFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VaccinationRecordPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.VaccinationRecordFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VaccinationRecordPayload>;
                };
                findMany: {
                    args: Prisma.VaccinationRecordFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VaccinationRecordPayload>[];
                };
                create: {
                    args: Prisma.VaccinationRecordCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VaccinationRecordPayload>;
                };
                createMany: {
                    args: Prisma.VaccinationRecordCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.VaccinationRecordCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VaccinationRecordPayload>[];
                };
                delete: {
                    args: Prisma.VaccinationRecordDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VaccinationRecordPayload>;
                };
                update: {
                    args: Prisma.VaccinationRecordUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VaccinationRecordPayload>;
                };
                deleteMany: {
                    args: Prisma.VaccinationRecordDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.VaccinationRecordUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.VaccinationRecordUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VaccinationRecordPayload>[];
                };
                upsert: {
                    args: Prisma.VaccinationRecordUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VaccinationRecordPayload>;
                };
                aggregate: {
                    args: Prisma.VaccinationRecordAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateVaccinationRecord>;
                };
                groupBy: {
                    args: Prisma.VaccinationRecordGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.VaccinationRecordGroupByOutputType>[];
                };
                count: {
                    args: Prisma.VaccinationRecordCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.VaccinationRecordCountAggregateOutputType> | number;
                };
            };
        };
        Category: {
            payload: Prisma.$CategoryPayload<ExtArgs>;
            fields: Prisma.CategoryFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CategoryFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryPayload>;
                };
                findFirst: {
                    args: Prisma.CategoryFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryPayload>;
                };
                findMany: {
                    args: Prisma.CategoryFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryPayload>[];
                };
                create: {
                    args: Prisma.CategoryCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryPayload>;
                };
                createMany: {
                    args: Prisma.CategoryCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryPayload>[];
                };
                delete: {
                    args: Prisma.CategoryDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryPayload>;
                };
                update: {
                    args: Prisma.CategoryUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryPayload>;
                };
                deleteMany: {
                    args: Prisma.CategoryDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CategoryUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryPayload>[];
                };
                upsert: {
                    args: Prisma.CategoryUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryPayload>;
                };
                aggregate: {
                    args: Prisma.CategoryAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCategory>;
                };
                groupBy: {
                    args: Prisma.CategoryGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CategoryGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CategoryCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CategoryCountAggregateOutputType> | number;
                };
            };
        };
        SubCategory: {
            payload: Prisma.$SubCategoryPayload<ExtArgs>;
            fields: Prisma.SubCategoryFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SubCategoryFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubCategoryPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SubCategoryFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubCategoryPayload>;
                };
                findFirst: {
                    args: Prisma.SubCategoryFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubCategoryPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SubCategoryFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubCategoryPayload>;
                };
                findMany: {
                    args: Prisma.SubCategoryFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubCategoryPayload>[];
                };
                create: {
                    args: Prisma.SubCategoryCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubCategoryPayload>;
                };
                createMany: {
                    args: Prisma.SubCategoryCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SubCategoryCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubCategoryPayload>[];
                };
                delete: {
                    args: Prisma.SubCategoryDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubCategoryPayload>;
                };
                update: {
                    args: Prisma.SubCategoryUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubCategoryPayload>;
                };
                deleteMany: {
                    args: Prisma.SubCategoryDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SubCategoryUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SubCategoryUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubCategoryPayload>[];
                };
                upsert: {
                    args: Prisma.SubCategoryUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubCategoryPayload>;
                };
                aggregate: {
                    args: Prisma.SubCategoryAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSubCategory>;
                };
                groupBy: {
                    args: Prisma.SubCategoryGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SubCategoryGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SubCategoryCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SubCategoryCountAggregateOutputType> | number;
                };
            };
        };
        BreederProfile: {
            payload: Prisma.$BreederProfilePayload<ExtArgs>;
            fields: Prisma.BreederProfileFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.BreederProfileFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BreederProfilePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.BreederProfileFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BreederProfilePayload>;
                };
                findFirst: {
                    args: Prisma.BreederProfileFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BreederProfilePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.BreederProfileFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BreederProfilePayload>;
                };
                findMany: {
                    args: Prisma.BreederProfileFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BreederProfilePayload>[];
                };
                create: {
                    args: Prisma.BreederProfileCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BreederProfilePayload>;
                };
                createMany: {
                    args: Prisma.BreederProfileCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.BreederProfileCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BreederProfilePayload>[];
                };
                delete: {
                    args: Prisma.BreederProfileDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BreederProfilePayload>;
                };
                update: {
                    args: Prisma.BreederProfileUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BreederProfilePayload>;
                };
                deleteMany: {
                    args: Prisma.BreederProfileDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.BreederProfileUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.BreederProfileUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BreederProfilePayload>[];
                };
                upsert: {
                    args: Prisma.BreederProfileUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BreederProfilePayload>;
                };
                aggregate: {
                    args: Prisma.BreederProfileAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateBreederProfile>;
                };
                groupBy: {
                    args: Prisma.BreederProfileGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BreederProfileGroupByOutputType>[];
                };
                count: {
                    args: Prisma.BreederProfileCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BreederProfileCountAggregateOutputType> | number;
                };
            };
        };
        BreedingRequest: {
            payload: Prisma.$BreedingRequestPayload<ExtArgs>;
            fields: Prisma.BreedingRequestFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.BreedingRequestFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BreedingRequestPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.BreedingRequestFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BreedingRequestPayload>;
                };
                findFirst: {
                    args: Prisma.BreedingRequestFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BreedingRequestPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.BreedingRequestFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BreedingRequestPayload>;
                };
                findMany: {
                    args: Prisma.BreedingRequestFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BreedingRequestPayload>[];
                };
                create: {
                    args: Prisma.BreedingRequestCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BreedingRequestPayload>;
                };
                createMany: {
                    args: Prisma.BreedingRequestCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.BreedingRequestCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BreedingRequestPayload>[];
                };
                delete: {
                    args: Prisma.BreedingRequestDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BreedingRequestPayload>;
                };
                update: {
                    args: Prisma.BreedingRequestUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BreedingRequestPayload>;
                };
                deleteMany: {
                    args: Prisma.BreedingRequestDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.BreedingRequestUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.BreedingRequestUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BreedingRequestPayload>[];
                };
                upsert: {
                    args: Prisma.BreedingRequestUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BreedingRequestPayload>;
                };
                aggregate: {
                    args: Prisma.BreedingRequestAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateBreedingRequest>;
                };
                groupBy: {
                    args: Prisma.BreedingRequestGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BreedingRequestGroupByOutputType>[];
                };
                count: {
                    args: Prisma.BreedingRequestCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BreedingRequestCountAggregateOutputType> | number;
                };
            };
        };
        BreederReview: {
            payload: Prisma.$BreederReviewPayload<ExtArgs>;
            fields: Prisma.BreederReviewFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.BreederReviewFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BreederReviewPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.BreederReviewFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BreederReviewPayload>;
                };
                findFirst: {
                    args: Prisma.BreederReviewFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BreederReviewPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.BreederReviewFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BreederReviewPayload>;
                };
                findMany: {
                    args: Prisma.BreederReviewFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BreederReviewPayload>[];
                };
                create: {
                    args: Prisma.BreederReviewCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BreederReviewPayload>;
                };
                createMany: {
                    args: Prisma.BreederReviewCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.BreederReviewCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BreederReviewPayload>[];
                };
                delete: {
                    args: Prisma.BreederReviewDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BreederReviewPayload>;
                };
                update: {
                    args: Prisma.BreederReviewUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BreederReviewPayload>;
                };
                deleteMany: {
                    args: Prisma.BreederReviewDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.BreederReviewUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.BreederReviewUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BreederReviewPayload>[];
                };
                upsert: {
                    args: Prisma.BreederReviewUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BreederReviewPayload>;
                };
                aggregate: {
                    args: Prisma.BreederReviewAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateBreederReview>;
                };
                groupBy: {
                    args: Prisma.BreederReviewGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BreederReviewGroupByOutputType>[];
                };
                count: {
                    args: Prisma.BreederReviewCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BreederReviewCountAggregateOutputType> | number;
                };
            };
        };
        DoctorProfile: {
            payload: Prisma.$DoctorProfilePayload<ExtArgs>;
            fields: Prisma.DoctorProfileFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DoctorProfileFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorProfilePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DoctorProfileFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorProfilePayload>;
                };
                findFirst: {
                    args: Prisma.DoctorProfileFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorProfilePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DoctorProfileFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorProfilePayload>;
                };
                findMany: {
                    args: Prisma.DoctorProfileFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorProfilePayload>[];
                };
                create: {
                    args: Prisma.DoctorProfileCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorProfilePayload>;
                };
                createMany: {
                    args: Prisma.DoctorProfileCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.DoctorProfileCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorProfilePayload>[];
                };
                delete: {
                    args: Prisma.DoctorProfileDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorProfilePayload>;
                };
                update: {
                    args: Prisma.DoctorProfileUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorProfilePayload>;
                };
                deleteMany: {
                    args: Prisma.DoctorProfileDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DoctorProfileUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.DoctorProfileUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorProfilePayload>[];
                };
                upsert: {
                    args: Prisma.DoctorProfileUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorProfilePayload>;
                };
                aggregate: {
                    args: Prisma.DoctorProfileAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDoctorProfile>;
                };
                groupBy: {
                    args: Prisma.DoctorProfileGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DoctorProfileGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DoctorProfileCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DoctorProfileCountAggregateOutputType> | number;
                };
            };
        };
        DoctorLocation: {
            payload: Prisma.$DoctorLocationPayload<ExtArgs>;
            fields: Prisma.DoctorLocationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DoctorLocationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorLocationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DoctorLocationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorLocationPayload>;
                };
                findFirst: {
                    args: Prisma.DoctorLocationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorLocationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DoctorLocationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorLocationPayload>;
                };
                findMany: {
                    args: Prisma.DoctorLocationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorLocationPayload>[];
                };
                create: {
                    args: Prisma.DoctorLocationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorLocationPayload>;
                };
                createMany: {
                    args: Prisma.DoctorLocationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.DoctorLocationCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorLocationPayload>[];
                };
                delete: {
                    args: Prisma.DoctorLocationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorLocationPayload>;
                };
                update: {
                    args: Prisma.DoctorLocationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorLocationPayload>;
                };
                deleteMany: {
                    args: Prisma.DoctorLocationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DoctorLocationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.DoctorLocationUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorLocationPayload>[];
                };
                upsert: {
                    args: Prisma.DoctorLocationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorLocationPayload>;
                };
                aggregate: {
                    args: Prisma.DoctorLocationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDoctorLocation>;
                };
                groupBy: {
                    args: Prisma.DoctorLocationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DoctorLocationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DoctorLocationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DoctorLocationCountAggregateOutputType> | number;
                };
            };
        };
        DoctorVerificationLog: {
            payload: Prisma.$DoctorVerificationLogPayload<ExtArgs>;
            fields: Prisma.DoctorVerificationLogFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DoctorVerificationLogFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorVerificationLogPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DoctorVerificationLogFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorVerificationLogPayload>;
                };
                findFirst: {
                    args: Prisma.DoctorVerificationLogFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorVerificationLogPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DoctorVerificationLogFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorVerificationLogPayload>;
                };
                findMany: {
                    args: Prisma.DoctorVerificationLogFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorVerificationLogPayload>[];
                };
                create: {
                    args: Prisma.DoctorVerificationLogCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorVerificationLogPayload>;
                };
                createMany: {
                    args: Prisma.DoctorVerificationLogCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.DoctorVerificationLogCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorVerificationLogPayload>[];
                };
                delete: {
                    args: Prisma.DoctorVerificationLogDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorVerificationLogPayload>;
                };
                update: {
                    args: Prisma.DoctorVerificationLogUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorVerificationLogPayload>;
                };
                deleteMany: {
                    args: Prisma.DoctorVerificationLogDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DoctorVerificationLogUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.DoctorVerificationLogUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorVerificationLogPayload>[];
                };
                upsert: {
                    args: Prisma.DoctorVerificationLogUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorVerificationLogPayload>;
                };
                aggregate: {
                    args: Prisma.DoctorVerificationLogAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDoctorVerificationLog>;
                };
                groupBy: {
                    args: Prisma.DoctorVerificationLogGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DoctorVerificationLogGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DoctorVerificationLogCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DoctorVerificationLogCountAggregateOutputType> | number;
                };
            };
        };
        DoctorAppointment: {
            payload: Prisma.$DoctorAppointmentPayload<ExtArgs>;
            fields: Prisma.DoctorAppointmentFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DoctorAppointmentFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorAppointmentPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DoctorAppointmentFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorAppointmentPayload>;
                };
                findFirst: {
                    args: Prisma.DoctorAppointmentFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorAppointmentPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DoctorAppointmentFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorAppointmentPayload>;
                };
                findMany: {
                    args: Prisma.DoctorAppointmentFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorAppointmentPayload>[];
                };
                create: {
                    args: Prisma.DoctorAppointmentCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorAppointmentPayload>;
                };
                createMany: {
                    args: Prisma.DoctorAppointmentCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.DoctorAppointmentCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorAppointmentPayload>[];
                };
                delete: {
                    args: Prisma.DoctorAppointmentDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorAppointmentPayload>;
                };
                update: {
                    args: Prisma.DoctorAppointmentUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorAppointmentPayload>;
                };
                deleteMany: {
                    args: Prisma.DoctorAppointmentDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DoctorAppointmentUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.DoctorAppointmentUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorAppointmentPayload>[];
                };
                upsert: {
                    args: Prisma.DoctorAppointmentUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorAppointmentPayload>;
                };
                aggregate: {
                    args: Prisma.DoctorAppointmentAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDoctorAppointment>;
                };
                groupBy: {
                    args: Prisma.DoctorAppointmentGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DoctorAppointmentGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DoctorAppointmentCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DoctorAppointmentCountAggregateOutputType> | number;
                };
            };
        };
        DoctorReview: {
            payload: Prisma.$DoctorReviewPayload<ExtArgs>;
            fields: Prisma.DoctorReviewFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DoctorReviewFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorReviewPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DoctorReviewFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorReviewPayload>;
                };
                findFirst: {
                    args: Prisma.DoctorReviewFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorReviewPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DoctorReviewFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorReviewPayload>;
                };
                findMany: {
                    args: Prisma.DoctorReviewFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorReviewPayload>[];
                };
                create: {
                    args: Prisma.DoctorReviewCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorReviewPayload>;
                };
                createMany: {
                    args: Prisma.DoctorReviewCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.DoctorReviewCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorReviewPayload>[];
                };
                delete: {
                    args: Prisma.DoctorReviewDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorReviewPayload>;
                };
                update: {
                    args: Prisma.DoctorReviewUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorReviewPayload>;
                };
                deleteMany: {
                    args: Prisma.DoctorReviewDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DoctorReviewUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.DoctorReviewUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorReviewPayload>[];
                };
                upsert: {
                    args: Prisma.DoctorReviewUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorReviewPayload>;
                };
                aggregate: {
                    args: Prisma.DoctorReviewAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDoctorReview>;
                };
                groupBy: {
                    args: Prisma.DoctorReviewGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DoctorReviewGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DoctorReviewCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DoctorReviewCountAggregateOutputType> | number;
                };
            };
        };
        ForumQuestion: {
            payload: Prisma.$ForumQuestionPayload<ExtArgs>;
            fields: Prisma.ForumQuestionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ForumQuestionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ForumQuestionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ForumQuestionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ForumQuestionPayload>;
                };
                findFirst: {
                    args: Prisma.ForumQuestionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ForumQuestionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ForumQuestionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ForumQuestionPayload>;
                };
                findMany: {
                    args: Prisma.ForumQuestionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ForumQuestionPayload>[];
                };
                create: {
                    args: Prisma.ForumQuestionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ForumQuestionPayload>;
                };
                createMany: {
                    args: Prisma.ForumQuestionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ForumQuestionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ForumQuestionPayload>[];
                };
                delete: {
                    args: Prisma.ForumQuestionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ForumQuestionPayload>;
                };
                update: {
                    args: Prisma.ForumQuestionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ForumQuestionPayload>;
                };
                deleteMany: {
                    args: Prisma.ForumQuestionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ForumQuestionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ForumQuestionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ForumQuestionPayload>[];
                };
                upsert: {
                    args: Prisma.ForumQuestionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ForumQuestionPayload>;
                };
                aggregate: {
                    args: Prisma.ForumQuestionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateForumQuestion>;
                };
                groupBy: {
                    args: Prisma.ForumQuestionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ForumQuestionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ForumQuestionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ForumQuestionCountAggregateOutputType> | number;
                };
            };
        };
        ForumAnswer: {
            payload: Prisma.$ForumAnswerPayload<ExtArgs>;
            fields: Prisma.ForumAnswerFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ForumAnswerFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ForumAnswerPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ForumAnswerFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ForumAnswerPayload>;
                };
                findFirst: {
                    args: Prisma.ForumAnswerFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ForumAnswerPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ForumAnswerFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ForumAnswerPayload>;
                };
                findMany: {
                    args: Prisma.ForumAnswerFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ForumAnswerPayload>[];
                };
                create: {
                    args: Prisma.ForumAnswerCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ForumAnswerPayload>;
                };
                createMany: {
                    args: Prisma.ForumAnswerCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ForumAnswerCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ForumAnswerPayload>[];
                };
                delete: {
                    args: Prisma.ForumAnswerDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ForumAnswerPayload>;
                };
                update: {
                    args: Prisma.ForumAnswerUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ForumAnswerPayload>;
                };
                deleteMany: {
                    args: Prisma.ForumAnswerDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ForumAnswerUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ForumAnswerUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ForumAnswerPayload>[];
                };
                upsert: {
                    args: Prisma.ForumAnswerUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ForumAnswerPayload>;
                };
                aggregate: {
                    args: Prisma.ForumAnswerAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateForumAnswer>;
                };
                groupBy: {
                    args: Prisma.ForumAnswerGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ForumAnswerGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ForumAnswerCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ForumAnswerCountAggregateOutputType> | number;
                };
            };
        };
        QuestionVote: {
            payload: Prisma.$QuestionVotePayload<ExtArgs>;
            fields: Prisma.QuestionVoteFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.QuestionVoteFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuestionVotePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.QuestionVoteFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuestionVotePayload>;
                };
                findFirst: {
                    args: Prisma.QuestionVoteFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuestionVotePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.QuestionVoteFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuestionVotePayload>;
                };
                findMany: {
                    args: Prisma.QuestionVoteFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuestionVotePayload>[];
                };
                create: {
                    args: Prisma.QuestionVoteCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuestionVotePayload>;
                };
                createMany: {
                    args: Prisma.QuestionVoteCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.QuestionVoteCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuestionVotePayload>[];
                };
                delete: {
                    args: Prisma.QuestionVoteDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuestionVotePayload>;
                };
                update: {
                    args: Prisma.QuestionVoteUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuestionVotePayload>;
                };
                deleteMany: {
                    args: Prisma.QuestionVoteDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.QuestionVoteUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.QuestionVoteUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuestionVotePayload>[];
                };
                upsert: {
                    args: Prisma.QuestionVoteUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$QuestionVotePayload>;
                };
                aggregate: {
                    args: Prisma.QuestionVoteAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateQuestionVote>;
                };
                groupBy: {
                    args: Prisma.QuestionVoteGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.QuestionVoteGroupByOutputType>[];
                };
                count: {
                    args: Prisma.QuestionVoteCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.QuestionVoteCountAggregateOutputType> | number;
                };
            };
        };
        AnswerVote: {
            payload: Prisma.$AnswerVotePayload<ExtArgs>;
            fields: Prisma.AnswerVoteFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AnswerVoteFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnswerVotePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AnswerVoteFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnswerVotePayload>;
                };
                findFirst: {
                    args: Prisma.AnswerVoteFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnswerVotePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AnswerVoteFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnswerVotePayload>;
                };
                findMany: {
                    args: Prisma.AnswerVoteFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnswerVotePayload>[];
                };
                create: {
                    args: Prisma.AnswerVoteCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnswerVotePayload>;
                };
                createMany: {
                    args: Prisma.AnswerVoteCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AnswerVoteCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnswerVotePayload>[];
                };
                delete: {
                    args: Prisma.AnswerVoteDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnswerVotePayload>;
                };
                update: {
                    args: Prisma.AnswerVoteUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnswerVotePayload>;
                };
                deleteMany: {
                    args: Prisma.AnswerVoteDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AnswerVoteUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AnswerVoteUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnswerVotePayload>[];
                };
                upsert: {
                    args: Prisma.AnswerVoteUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnswerVotePayload>;
                };
                aggregate: {
                    args: Prisma.AnswerVoteAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAnswerVote>;
                };
                groupBy: {
                    args: Prisma.AnswerVoteGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AnswerVoteGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AnswerVoteCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AnswerVoteCountAggregateOutputType> | number;
                };
            };
        };
        ForumReport: {
            payload: Prisma.$ForumReportPayload<ExtArgs>;
            fields: Prisma.ForumReportFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ForumReportFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ForumReportPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ForumReportFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ForumReportPayload>;
                };
                findFirst: {
                    args: Prisma.ForumReportFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ForumReportPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ForumReportFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ForumReportPayload>;
                };
                findMany: {
                    args: Prisma.ForumReportFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ForumReportPayload>[];
                };
                create: {
                    args: Prisma.ForumReportCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ForumReportPayload>;
                };
                createMany: {
                    args: Prisma.ForumReportCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ForumReportCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ForumReportPayload>[];
                };
                delete: {
                    args: Prisma.ForumReportDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ForumReportPayload>;
                };
                update: {
                    args: Prisma.ForumReportUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ForumReportPayload>;
                };
                deleteMany: {
                    args: Prisma.ForumReportDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ForumReportUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ForumReportUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ForumReportPayload>[];
                };
                upsert: {
                    args: Prisma.ForumReportUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ForumReportPayload>;
                };
                aggregate: {
                    args: Prisma.ForumReportAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateForumReport>;
                };
                groupBy: {
                    args: Prisma.ForumReportGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ForumReportGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ForumReportCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ForumReportCountAggregateOutputType> | number;
                };
            };
        };
        CattleListing: {
            payload: Prisma.$CattleListingPayload<ExtArgs>;
            fields: Prisma.CattleListingFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CattleListingFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CattleListingPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CattleListingFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CattleListingPayload>;
                };
                findFirst: {
                    args: Prisma.CattleListingFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CattleListingPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CattleListingFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CattleListingPayload>;
                };
                findMany: {
                    args: Prisma.CattleListingFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CattleListingPayload>[];
                };
                create: {
                    args: Prisma.CattleListingCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CattleListingPayload>;
                };
                createMany: {
                    args: Prisma.CattleListingCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CattleListingCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CattleListingPayload>[];
                };
                delete: {
                    args: Prisma.CattleListingDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CattleListingPayload>;
                };
                update: {
                    args: Prisma.CattleListingUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CattleListingPayload>;
                };
                deleteMany: {
                    args: Prisma.CattleListingDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CattleListingUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CattleListingUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CattleListingPayload>[];
                };
                upsert: {
                    args: Prisma.CattleListingUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CattleListingPayload>;
                };
                aggregate: {
                    args: Prisma.CattleListingAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCattleListing>;
                };
                groupBy: {
                    args: Prisma.CattleListingGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CattleListingGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CattleListingCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CattleListingCountAggregateOutputType> | number;
                };
            };
        };
        ListingImage: {
            payload: Prisma.$ListingImagePayload<ExtArgs>;
            fields: Prisma.ListingImageFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ListingImageFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ListingImagePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ListingImageFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ListingImagePayload>;
                };
                findFirst: {
                    args: Prisma.ListingImageFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ListingImagePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ListingImageFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ListingImagePayload>;
                };
                findMany: {
                    args: Prisma.ListingImageFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ListingImagePayload>[];
                };
                create: {
                    args: Prisma.ListingImageCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ListingImagePayload>;
                };
                createMany: {
                    args: Prisma.ListingImageCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ListingImageCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ListingImagePayload>[];
                };
                delete: {
                    args: Prisma.ListingImageDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ListingImagePayload>;
                };
                update: {
                    args: Prisma.ListingImageUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ListingImagePayload>;
                };
                deleteMany: {
                    args: Prisma.ListingImageDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ListingImageUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ListingImageUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ListingImagePayload>[];
                };
                upsert: {
                    args: Prisma.ListingImageUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ListingImagePayload>;
                };
                aggregate: {
                    args: Prisma.ListingImageAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateListingImage>;
                };
                groupBy: {
                    args: Prisma.ListingImageGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ListingImageGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ListingImageCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ListingImageCountAggregateOutputType> | number;
                };
            };
        };
        ListingLocation: {
            payload: Prisma.$ListingLocationPayload<ExtArgs>;
            fields: Prisma.ListingLocationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ListingLocationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ListingLocationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ListingLocationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ListingLocationPayload>;
                };
                findFirst: {
                    args: Prisma.ListingLocationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ListingLocationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ListingLocationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ListingLocationPayload>;
                };
                findMany: {
                    args: Prisma.ListingLocationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ListingLocationPayload>[];
                };
                create: {
                    args: Prisma.ListingLocationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ListingLocationPayload>;
                };
                createMany: {
                    args: Prisma.ListingLocationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ListingLocationCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ListingLocationPayload>[];
                };
                delete: {
                    args: Prisma.ListingLocationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ListingLocationPayload>;
                };
                update: {
                    args: Prisma.ListingLocationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ListingLocationPayload>;
                };
                deleteMany: {
                    args: Prisma.ListingLocationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ListingLocationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ListingLocationUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ListingLocationPayload>[];
                };
                upsert: {
                    args: Prisma.ListingLocationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ListingLocationPayload>;
                };
                aggregate: {
                    args: Prisma.ListingLocationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateListingLocation>;
                };
                groupBy: {
                    args: Prisma.ListingLocationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ListingLocationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ListingLocationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ListingLocationCountAggregateOutputType> | number;
                };
            };
        };
        BrandProfile: {
            payload: Prisma.$BrandProfilePayload<ExtArgs>;
            fields: Prisma.BrandProfileFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.BrandProfileFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandProfilePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.BrandProfileFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandProfilePayload>;
                };
                findFirst: {
                    args: Prisma.BrandProfileFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandProfilePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.BrandProfileFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandProfilePayload>;
                };
                findMany: {
                    args: Prisma.BrandProfileFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandProfilePayload>[];
                };
                create: {
                    args: Prisma.BrandProfileCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandProfilePayload>;
                };
                createMany: {
                    args: Prisma.BrandProfileCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.BrandProfileCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandProfilePayload>[];
                };
                delete: {
                    args: Prisma.BrandProfileDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandProfilePayload>;
                };
                update: {
                    args: Prisma.BrandProfileUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandProfilePayload>;
                };
                deleteMany: {
                    args: Prisma.BrandProfileDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.BrandProfileUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.BrandProfileUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandProfilePayload>[];
                };
                upsert: {
                    args: Prisma.BrandProfileUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandProfilePayload>;
                };
                aggregate: {
                    args: Prisma.BrandProfileAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateBrandProfile>;
                };
                groupBy: {
                    args: Prisma.BrandProfileGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BrandProfileGroupByOutputType>[];
                };
                count: {
                    args: Prisma.BrandProfileCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BrandProfileCountAggregateOutputType> | number;
                };
            };
        };
        MarketplaceProduct: {
            payload: Prisma.$MarketplaceProductPayload<ExtArgs>;
            fields: Prisma.MarketplaceProductFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MarketplaceProductFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MarketplaceProductPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MarketplaceProductFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MarketplaceProductPayload>;
                };
                findFirst: {
                    args: Prisma.MarketplaceProductFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MarketplaceProductPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MarketplaceProductFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MarketplaceProductPayload>;
                };
                findMany: {
                    args: Prisma.MarketplaceProductFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MarketplaceProductPayload>[];
                };
                create: {
                    args: Prisma.MarketplaceProductCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MarketplaceProductPayload>;
                };
                createMany: {
                    args: Prisma.MarketplaceProductCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.MarketplaceProductCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MarketplaceProductPayload>[];
                };
                delete: {
                    args: Prisma.MarketplaceProductDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MarketplaceProductPayload>;
                };
                update: {
                    args: Prisma.MarketplaceProductUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MarketplaceProductPayload>;
                };
                deleteMany: {
                    args: Prisma.MarketplaceProductDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MarketplaceProductUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.MarketplaceProductUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MarketplaceProductPayload>[];
                };
                upsert: {
                    args: Prisma.MarketplaceProductUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MarketplaceProductPayload>;
                };
                aggregate: {
                    args: Prisma.MarketplaceProductAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMarketplaceProduct>;
                };
                groupBy: {
                    args: Prisma.MarketplaceProductGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MarketplaceProductGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MarketplaceProductCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MarketplaceProductCountAggregateOutputType> | number;
                };
            };
        };
        ProductReview: {
            payload: Prisma.$ProductReviewPayload<ExtArgs>;
            fields: Prisma.ProductReviewFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ProductReviewFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductReviewPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ProductReviewFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductReviewPayload>;
                };
                findFirst: {
                    args: Prisma.ProductReviewFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductReviewPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ProductReviewFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductReviewPayload>;
                };
                findMany: {
                    args: Prisma.ProductReviewFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductReviewPayload>[];
                };
                create: {
                    args: Prisma.ProductReviewCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductReviewPayload>;
                };
                createMany: {
                    args: Prisma.ProductReviewCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ProductReviewCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductReviewPayload>[];
                };
                delete: {
                    args: Prisma.ProductReviewDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductReviewPayload>;
                };
                update: {
                    args: Prisma.ProductReviewUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductReviewPayload>;
                };
                deleteMany: {
                    args: Prisma.ProductReviewDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ProductReviewUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ProductReviewUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductReviewPayload>[];
                };
                upsert: {
                    args: Prisma.ProductReviewUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductReviewPayload>;
                };
                aggregate: {
                    args: Prisma.ProductReviewAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProductReview>;
                };
                groupBy: {
                    args: Prisma.ProductReviewGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProductReviewGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ProductReviewCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProductReviewCountAggregateOutputType> | number;
                };
            };
        };
        Cart: {
            payload: Prisma.$CartPayload<ExtArgs>;
            fields: Prisma.CartFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CartFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CartPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CartFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CartPayload>;
                };
                findFirst: {
                    args: Prisma.CartFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CartPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CartFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CartPayload>;
                };
                findMany: {
                    args: Prisma.CartFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CartPayload>[];
                };
                create: {
                    args: Prisma.CartCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CartPayload>;
                };
                createMany: {
                    args: Prisma.CartCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CartCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CartPayload>[];
                };
                delete: {
                    args: Prisma.CartDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CartPayload>;
                };
                update: {
                    args: Prisma.CartUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CartPayload>;
                };
                deleteMany: {
                    args: Prisma.CartDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CartUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CartUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CartPayload>[];
                };
                upsert: {
                    args: Prisma.CartUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CartPayload>;
                };
                aggregate: {
                    args: Prisma.CartAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCart>;
                };
                groupBy: {
                    args: Prisma.CartGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CartGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CartCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CartCountAggregateOutputType> | number;
                };
            };
        };
        CartItem: {
            payload: Prisma.$CartItemPayload<ExtArgs>;
            fields: Prisma.CartItemFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CartItemFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CartItemPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CartItemFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CartItemPayload>;
                };
                findFirst: {
                    args: Prisma.CartItemFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CartItemPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CartItemFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CartItemPayload>;
                };
                findMany: {
                    args: Prisma.CartItemFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CartItemPayload>[];
                };
                create: {
                    args: Prisma.CartItemCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CartItemPayload>;
                };
                createMany: {
                    args: Prisma.CartItemCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CartItemCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CartItemPayload>[];
                };
                delete: {
                    args: Prisma.CartItemDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CartItemPayload>;
                };
                update: {
                    args: Prisma.CartItemUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CartItemPayload>;
                };
                deleteMany: {
                    args: Prisma.CartItemDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CartItemUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CartItemUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CartItemPayload>[];
                };
                upsert: {
                    args: Prisma.CartItemUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CartItemPayload>;
                };
                aggregate: {
                    args: Prisma.CartItemAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCartItem>;
                };
                groupBy: {
                    args: Prisma.CartItemGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CartItemGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CartItemCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CartItemCountAggregateOutputType> | number;
                };
            };
        };
        MarketplaceOrder: {
            payload: Prisma.$MarketplaceOrderPayload<ExtArgs>;
            fields: Prisma.MarketplaceOrderFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MarketplaceOrderFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MarketplaceOrderPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MarketplaceOrderFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MarketplaceOrderPayload>;
                };
                findFirst: {
                    args: Prisma.MarketplaceOrderFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MarketplaceOrderPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MarketplaceOrderFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MarketplaceOrderPayload>;
                };
                findMany: {
                    args: Prisma.MarketplaceOrderFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MarketplaceOrderPayload>[];
                };
                create: {
                    args: Prisma.MarketplaceOrderCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MarketplaceOrderPayload>;
                };
                createMany: {
                    args: Prisma.MarketplaceOrderCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.MarketplaceOrderCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MarketplaceOrderPayload>[];
                };
                delete: {
                    args: Prisma.MarketplaceOrderDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MarketplaceOrderPayload>;
                };
                update: {
                    args: Prisma.MarketplaceOrderUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MarketplaceOrderPayload>;
                };
                deleteMany: {
                    args: Prisma.MarketplaceOrderDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MarketplaceOrderUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.MarketplaceOrderUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MarketplaceOrderPayload>[];
                };
                upsert: {
                    args: Prisma.MarketplaceOrderUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MarketplaceOrderPayload>;
                };
                aggregate: {
                    args: Prisma.MarketplaceOrderAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMarketplaceOrder>;
                };
                groupBy: {
                    args: Prisma.MarketplaceOrderGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MarketplaceOrderGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MarketplaceOrderCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MarketplaceOrderCountAggregateOutputType> | number;
                };
            };
        };
        MarketplaceOrderItem: {
            payload: Prisma.$MarketplaceOrderItemPayload<ExtArgs>;
            fields: Prisma.MarketplaceOrderItemFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MarketplaceOrderItemFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MarketplaceOrderItemPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MarketplaceOrderItemFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MarketplaceOrderItemPayload>;
                };
                findFirst: {
                    args: Prisma.MarketplaceOrderItemFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MarketplaceOrderItemPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MarketplaceOrderItemFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MarketplaceOrderItemPayload>;
                };
                findMany: {
                    args: Prisma.MarketplaceOrderItemFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MarketplaceOrderItemPayload>[];
                };
                create: {
                    args: Prisma.MarketplaceOrderItemCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MarketplaceOrderItemPayload>;
                };
                createMany: {
                    args: Prisma.MarketplaceOrderItemCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.MarketplaceOrderItemCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MarketplaceOrderItemPayload>[];
                };
                delete: {
                    args: Prisma.MarketplaceOrderItemDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MarketplaceOrderItemPayload>;
                };
                update: {
                    args: Prisma.MarketplaceOrderItemUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MarketplaceOrderItemPayload>;
                };
                deleteMany: {
                    args: Prisma.MarketplaceOrderItemDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MarketplaceOrderItemUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.MarketplaceOrderItemUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MarketplaceOrderItemPayload>[];
                };
                upsert: {
                    args: Prisma.MarketplaceOrderItemUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MarketplaceOrderItemPayload>;
                };
                aggregate: {
                    args: Prisma.MarketplaceOrderItemAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMarketplaceOrderItem>;
                };
                groupBy: {
                    args: Prisma.MarketplaceOrderItemGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MarketplaceOrderItemGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MarketplaceOrderItemCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MarketplaceOrderItemCountAggregateOutputType> | number;
                };
            };
        };
        SubscriptionPlan: {
            payload: Prisma.$SubscriptionPlanPayload<ExtArgs>;
            fields: Prisma.SubscriptionPlanFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SubscriptionPlanFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SubscriptionPlanFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>;
                };
                findFirst: {
                    args: Prisma.SubscriptionPlanFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SubscriptionPlanFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>;
                };
                findMany: {
                    args: Prisma.SubscriptionPlanFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>[];
                };
                create: {
                    args: Prisma.SubscriptionPlanCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>;
                };
                createMany: {
                    args: Prisma.SubscriptionPlanCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SubscriptionPlanCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>[];
                };
                delete: {
                    args: Prisma.SubscriptionPlanDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>;
                };
                update: {
                    args: Prisma.SubscriptionPlanUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>;
                };
                deleteMany: {
                    args: Prisma.SubscriptionPlanDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SubscriptionPlanUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SubscriptionPlanUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>[];
                };
                upsert: {
                    args: Prisma.SubscriptionPlanUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>;
                };
                aggregate: {
                    args: Prisma.SubscriptionPlanAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSubscriptionPlan>;
                };
                groupBy: {
                    args: Prisma.SubscriptionPlanGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SubscriptionPlanGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SubscriptionPlanCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SubscriptionPlanCountAggregateOutputType> | number;
                };
            };
        };
        Subscription: {
            payload: Prisma.$SubscriptionPayload<ExtArgs>;
            fields: Prisma.SubscriptionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SubscriptionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SubscriptionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPayload>;
                };
                findFirst: {
                    args: Prisma.SubscriptionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SubscriptionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPayload>;
                };
                findMany: {
                    args: Prisma.SubscriptionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPayload>[];
                };
                create: {
                    args: Prisma.SubscriptionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPayload>;
                };
                createMany: {
                    args: Prisma.SubscriptionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SubscriptionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPayload>[];
                };
                delete: {
                    args: Prisma.SubscriptionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPayload>;
                };
                update: {
                    args: Prisma.SubscriptionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPayload>;
                };
                deleteMany: {
                    args: Prisma.SubscriptionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SubscriptionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SubscriptionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPayload>[];
                };
                upsert: {
                    args: Prisma.SubscriptionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPayload>;
                };
                aggregate: {
                    args: Prisma.SubscriptionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSubscription>;
                };
                groupBy: {
                    args: Prisma.SubscriptionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SubscriptionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SubscriptionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SubscriptionCountAggregateOutputType> | number;
                };
            };
        };
        PlatformLedger: {
            payload: Prisma.$PlatformLedgerPayload<ExtArgs>;
            fields: Prisma.PlatformLedgerFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PlatformLedgerFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlatformLedgerPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PlatformLedgerFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlatformLedgerPayload>;
                };
                findFirst: {
                    args: Prisma.PlatformLedgerFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlatformLedgerPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PlatformLedgerFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlatformLedgerPayload>;
                };
                findMany: {
                    args: Prisma.PlatformLedgerFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlatformLedgerPayload>[];
                };
                create: {
                    args: Prisma.PlatformLedgerCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlatformLedgerPayload>;
                };
                createMany: {
                    args: Prisma.PlatformLedgerCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PlatformLedgerCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlatformLedgerPayload>[];
                };
                delete: {
                    args: Prisma.PlatformLedgerDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlatformLedgerPayload>;
                };
                update: {
                    args: Prisma.PlatformLedgerUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlatformLedgerPayload>;
                };
                deleteMany: {
                    args: Prisma.PlatformLedgerDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PlatformLedgerUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PlatformLedgerUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlatformLedgerPayload>[];
                };
                upsert: {
                    args: Prisma.PlatformLedgerUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlatformLedgerPayload>;
                };
                aggregate: {
                    args: Prisma.PlatformLedgerAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePlatformLedger>;
                };
                groupBy: {
                    args: Prisma.PlatformLedgerGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PlatformLedgerGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PlatformLedgerCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PlatformLedgerCountAggregateOutputType> | number;
                };
            };
        };
        User: {
            payload: Prisma.$UserPayload<ExtArgs>;
            fields: Prisma.UserFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findFirst: {
                    args: Prisma.UserFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findMany: {
                    args: Prisma.UserFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                create: {
                    args: Prisma.UserCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                createMany: {
                    args: Prisma.UserCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                delete: {
                    args: Prisma.UserDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                update: {
                    args: Prisma.UserUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                deleteMany: {
                    args: Prisma.UserDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                upsert: {
                    args: Prisma.UserUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                aggregate: {
                    args: Prisma.UserAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUser>;
                };
                groupBy: {
                    args: Prisma.UserGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserCountAggregateOutputType> | number;
                };
            };
        };
        State: {
            payload: Prisma.$StatePayload<ExtArgs>;
            fields: Prisma.StateFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.StateFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StatePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.StateFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StatePayload>;
                };
                findFirst: {
                    args: Prisma.StateFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StatePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.StateFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StatePayload>;
                };
                findMany: {
                    args: Prisma.StateFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StatePayload>[];
                };
                create: {
                    args: Prisma.StateCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StatePayload>;
                };
                createMany: {
                    args: Prisma.StateCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.StateCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StatePayload>[];
                };
                delete: {
                    args: Prisma.StateDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StatePayload>;
                };
                update: {
                    args: Prisma.StateUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StatePayload>;
                };
                deleteMany: {
                    args: Prisma.StateDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.StateUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.StateUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StatePayload>[];
                };
                upsert: {
                    args: Prisma.StateUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StatePayload>;
                };
                aggregate: {
                    args: Prisma.StateAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateState>;
                };
                groupBy: {
                    args: Prisma.StateGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StateGroupByOutputType>[];
                };
                count: {
                    args: Prisma.StateCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StateCountAggregateOutputType> | number;
                };
            };
        };
        City: {
            payload: Prisma.$CityPayload<ExtArgs>;
            fields: Prisma.CityFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CityFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CityPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CityFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CityPayload>;
                };
                findFirst: {
                    args: Prisma.CityFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CityPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CityFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CityPayload>;
                };
                findMany: {
                    args: Prisma.CityFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CityPayload>[];
                };
                create: {
                    args: Prisma.CityCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CityPayload>;
                };
                createMany: {
                    args: Prisma.CityCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CityCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CityPayload>[];
                };
                delete: {
                    args: Prisma.CityDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CityPayload>;
                };
                update: {
                    args: Prisma.CityUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CityPayload>;
                };
                deleteMany: {
                    args: Prisma.CityDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CityUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CityUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CityPayload>[];
                };
                upsert: {
                    args: Prisma.CityUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CityPayload>;
                };
                aggregate: {
                    args: Prisma.CityAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCity>;
                };
                groupBy: {
                    args: Prisma.CityGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CityGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CityCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CityCountAggregateOutputType> | number;
                };
            };
        };
        Area: {
            payload: Prisma.$AreaPayload<ExtArgs>;
            fields: Prisma.AreaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AreaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AreaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AreaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AreaPayload>;
                };
                findFirst: {
                    args: Prisma.AreaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AreaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AreaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AreaPayload>;
                };
                findMany: {
                    args: Prisma.AreaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AreaPayload>[];
                };
                create: {
                    args: Prisma.AreaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AreaPayload>;
                };
                createMany: {
                    args: Prisma.AreaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AreaCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AreaPayload>[];
                };
                delete: {
                    args: Prisma.AreaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AreaPayload>;
                };
                update: {
                    args: Prisma.AreaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AreaPayload>;
                };
                deleteMany: {
                    args: Prisma.AreaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AreaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AreaUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AreaPayload>[];
                };
                upsert: {
                    args: Prisma.AreaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AreaPayload>;
                };
                aggregate: {
                    args: Prisma.AreaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateArea>;
                };
                groupBy: {
                    args: Prisma.AreaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AreaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AreaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AreaCountAggregateOutputType> | number;
                };
            };
        };
        OtpCode: {
            payload: Prisma.$OtpCodePayload<ExtArgs>;
            fields: Prisma.OtpCodeFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.OtpCodeFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OtpCodePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.OtpCodeFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OtpCodePayload>;
                };
                findFirst: {
                    args: Prisma.OtpCodeFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OtpCodePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.OtpCodeFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OtpCodePayload>;
                };
                findMany: {
                    args: Prisma.OtpCodeFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OtpCodePayload>[];
                };
                create: {
                    args: Prisma.OtpCodeCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OtpCodePayload>;
                };
                createMany: {
                    args: Prisma.OtpCodeCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.OtpCodeCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OtpCodePayload>[];
                };
                delete: {
                    args: Prisma.OtpCodeDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OtpCodePayload>;
                };
                update: {
                    args: Prisma.OtpCodeUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OtpCodePayload>;
                };
                deleteMany: {
                    args: Prisma.OtpCodeDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.OtpCodeUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.OtpCodeUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OtpCodePayload>[];
                };
                upsert: {
                    args: Prisma.OtpCodeUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OtpCodePayload>;
                };
                aggregate: {
                    args: Prisma.OtpCodeAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOtpCode>;
                };
                groupBy: {
                    args: Prisma.OtpCodeGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OtpCodeGroupByOutputType>[];
                };
                count: {
                    args: Prisma.OtpCodeCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OtpCodeCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
/**
 * Enums
 */
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
    readonly description: "description";
    readonly logoUrl: "logoUrl";
    readonly isVerified: "isVerified";
    readonly commissionRate: "commissionRate";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type BrandProfileScalarFieldEnum = (typeof BrandProfileScalarFieldEnum)[keyof typeof BrandProfileScalarFieldEnum];
export declare const MarketplaceProductScalarFieldEnum: {
    readonly id: "id";
    readonly brandId: "brandId";
    readonly title: "title";
    readonly description: "description";
    readonly category: "category";
    readonly price: "price";
    readonly stock: "stock";
    readonly imageUrl: "imageUrl";
    readonly status: "status";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type MarketplaceProductScalarFieldEnum = (typeof MarketplaceProductScalarFieldEnum)[keyof typeof MarketplaceProductScalarFieldEnum];
export declare const ProductReviewScalarFieldEnum: {
    readonly id: "id";
    readonly productId: "productId";
    readonly userId: "userId";
    readonly rating: "rating";
    readonly comment: "comment";
    readonly createdAt: "createdAt";
};
export type ProductReviewScalarFieldEnum = (typeof ProductReviewScalarFieldEnum)[keyof typeof ProductReviewScalarFieldEnum];
export declare const CartScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CartScalarFieldEnum = (typeof CartScalarFieldEnum)[keyof typeof CartScalarFieldEnum];
export declare const CartItemScalarFieldEnum: {
    readonly id: "id";
    readonly cartId: "cartId";
    readonly productId: "productId";
    readonly quantity: "quantity";
};
export type CartItemScalarFieldEnum = (typeof CartItemScalarFieldEnum)[keyof typeof CartItemScalarFieldEnum];
export declare const MarketplaceOrderScalarFieldEnum: {
    readonly id: "id";
    readonly buyerId: "buyerId";
    readonly totalAmount: "totalAmount";
    readonly commissionAmount: "commissionAmount";
    readonly status: "status";
    readonly paymentIntentId: "paymentIntentId";
    readonly shippingAddress: "shippingAddress";
    readonly trackingNumber: "trackingNumber";
    readonly carrier: "carrier";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type MarketplaceOrderScalarFieldEnum = (typeof MarketplaceOrderScalarFieldEnum)[keyof typeof MarketplaceOrderScalarFieldEnum];
export declare const MarketplaceOrderItemScalarFieldEnum: {
    readonly id: "id";
    readonly orderId: "orderId";
    readonly productId: "productId";
    readonly quantity: "quantity";
    readonly price: "price";
};
export type MarketplaceOrderItemScalarFieldEnum = (typeof MarketplaceOrderItemScalarFieldEnum)[keyof typeof MarketplaceOrderItemScalarFieldEnum];
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
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
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
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
    readonly AnyNull: runtime.AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
/**
 * Field references
 */
/**
 * Reference to a field of type 'String'
 */
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
/**
 * Reference to a field of type 'String[]'
 */
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
/**
 * Reference to a field of type 'Int'
 */
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
/**
 * Reference to a field of type 'Int[]'
 */
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
/**
 * Reference to a field of type 'Decimal'
 */
export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>;
/**
 * Reference to a field of type 'Decimal[]'
 */
export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>;
/**
 * Reference to a field of type 'Boolean'
 */
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
/**
 * Reference to a field of type 'AnimalStatus'
 */
export type EnumAnimalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AnimalStatus'>;
/**
 * Reference to a field of type 'AnimalStatus[]'
 */
export type ListEnumAnimalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AnimalStatus[]'>;
/**
 * Reference to a field of type 'DateTime'
 */
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
/**
 * Reference to a field of type 'DateTime[]'
 */
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
/**
 * Reference to a field of type 'Json'
 */
export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>;
/**
 * Reference to a field of type 'QueryMode'
 */
export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>;
/**
 * Reference to a field of type 'AppointmentStatus'
 */
export type EnumAppointmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AppointmentStatus'>;
/**
 * Reference to a field of type 'AppointmentStatus[]'
 */
export type ListEnumAppointmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AppointmentStatus[]'>;
/**
 * Reference to a field of type 'VerificationStatus'
 */
export type EnumVerificationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VerificationStatus'>;
/**
 * Reference to a field of type 'VerificationStatus[]'
 */
export type ListEnumVerificationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VerificationStatus[]'>;
/**
 * Reference to a field of type 'DoctorListingStatus'
 */
export type EnumDoctorListingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DoctorListingStatus'>;
/**
 * Reference to a field of type 'DoctorListingStatus[]'
 */
export type ListEnumDoctorListingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DoctorListingStatus[]'>;
/**
 * Reference to a field of type 'ReportStatus'
 */
export type EnumReportStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReportStatus'>;
/**
 * Reference to a field of type 'ReportStatus[]'
 */
export type ListEnumReportStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReportStatus[]'>;
/**
 * Reference to a field of type 'ListingStatus'
 */
export type EnumListingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ListingStatus'>;
/**
 * Reference to a field of type 'ListingStatus[]'
 */
export type ListEnumListingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ListingStatus[]'>;
/**
 * Reference to a field of type 'ProductStatus'
 */
export type EnumProductStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProductStatus'>;
/**
 * Reference to a field of type 'ProductStatus[]'
 */
export type ListEnumProductStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProductStatus[]'>;
/**
 * Reference to a field of type 'OrderStatus'
 */
export type EnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus'>;
/**
 * Reference to a field of type 'OrderStatus[]'
 */
export type ListEnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus[]'>;
/**
 * Reference to a field of type 'PlanType'
 */
export type EnumPlanTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlanType'>;
/**
 * Reference to a field of type 'PlanType[]'
 */
export type ListEnumPlanTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlanType[]'>;
/**
 * Reference to a field of type 'SubscriptionStatus'
 */
export type EnumSubscriptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionStatus'>;
/**
 * Reference to a field of type 'SubscriptionStatus[]'
 */
export type ListEnumSubscriptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionStatus[]'>;
/**
 * Reference to a field of type 'LedgerDirection'
 */
export type EnumLedgerDirectionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LedgerDirection'>;
/**
 * Reference to a field of type 'LedgerDirection[]'
 */
export type ListEnumLedgerDirectionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LedgerDirection[]'>;
/**
 * Reference to a field of type 'LedgerType'
 */
export type EnumLedgerTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LedgerType'>;
/**
 * Reference to a field of type 'LedgerType[]'
 */
export type ListEnumLedgerTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LedgerType[]'>;
/**
 * Reference to a field of type 'UserRole'
 */
export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>;
/**
 * Reference to a field of type 'UserRole[]'
 */
export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>;
/**
 * Reference to a field of type 'UserStatus'
 */
export type EnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus'>;
/**
 * Reference to a field of type 'UserStatus[]'
 */
export type ListEnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus[]'>;
/**
 * Reference to a field of type 'Float'
 */
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
/**
 * Reference to a field of type 'Float[]'
 */
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
/**
 * Batch Payload for updateMany & deleteMany & createMany
 */
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export type PrismaClientOptions = ({
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-pg`.
     */
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
} | {
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl: string;
    adapter?: never;
}) & {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     *
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     *
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: GlobalOmitConfig;
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[];
    /**
     * Optional maximum size for the query plan cache. If not provided, a default size will be used.
     * A value of `0` can be used to disable the cache entirely. A higher cache size can improve
     * performance for applications that execute a large number of unique queries, while a smaller
     * cache size can reduce memory usage.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   queryPlanCacheMaxSize: 100,
     * })
     * ```
     */
    queryPlanCacheMaxSize?: number;
};
export type GlobalOmitConfig = {
    animal?: Prisma.AnimalOmit;
    vaccinationRecord?: Prisma.VaccinationRecordOmit;
    category?: Prisma.CategoryOmit;
    subCategory?: Prisma.SubCategoryOmit;
    breederProfile?: Prisma.BreederProfileOmit;
    breedingRequest?: Prisma.BreedingRequestOmit;
    breederReview?: Prisma.BreederReviewOmit;
    doctorProfile?: Prisma.DoctorProfileOmit;
    doctorLocation?: Prisma.DoctorLocationOmit;
    doctorVerificationLog?: Prisma.DoctorVerificationLogOmit;
    doctorAppointment?: Prisma.DoctorAppointmentOmit;
    doctorReview?: Prisma.DoctorReviewOmit;
    forumQuestion?: Prisma.ForumQuestionOmit;
    forumAnswer?: Prisma.ForumAnswerOmit;
    questionVote?: Prisma.QuestionVoteOmit;
    answerVote?: Prisma.AnswerVoteOmit;
    forumReport?: Prisma.ForumReportOmit;
    cattleListing?: Prisma.CattleListingOmit;
    listingImage?: Prisma.ListingImageOmit;
    listingLocation?: Prisma.ListingLocationOmit;
    brandProfile?: Prisma.BrandProfileOmit;
    marketplaceProduct?: Prisma.MarketplaceProductOmit;
    productReview?: Prisma.ProductReviewOmit;
    cart?: Prisma.CartOmit;
    cartItem?: Prisma.CartItemOmit;
    marketplaceOrder?: Prisma.MarketplaceOrderOmit;
    marketplaceOrderItem?: Prisma.MarketplaceOrderItemOmit;
    subscriptionPlan?: Prisma.SubscriptionPlanOmit;
    subscription?: Prisma.SubscriptionOmit;
    platformLedger?: Prisma.PlatformLedgerOmit;
    user?: Prisma.UserOmit;
    state?: Prisma.StateOmit;
    city?: Prisma.CityOmit;
    area?: Prisma.AreaOmit;
    otpCode?: Prisma.OtpCodeOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
/**
 * `PrismaClient` proxy available in interactive transactions.
 */
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
//# sourceMappingURL=prismaNamespace.d.ts.map