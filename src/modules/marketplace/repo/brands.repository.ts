import { db } from "../../../db/db.js";
import { Prisma } from "../../../generated/prisma/client.js";

type PrismaClientOrTx = Prisma.TransactionClient | typeof db;

export class BrandsRepository {
  public static async findByUserId(userId: string, tx: PrismaClientOrTx = db) {
    return tx.brandProfile.findUnique({
      where: { userId },
      include: {
        brandLocations: {
          include: {
            state: true,
            city: true,
          },
        },
      },
    });
  }

  public static async findByBrandName(brandName: string, tx: PrismaClientOrTx = db) {
    return tx.brandProfile.findFirst({
      where: { brandName: { equals: brandName, mode: "insensitive" } },
    });
  }

  public static async findBySlug(slug: string, tx: PrismaClientOrTx = db) {
    return tx.brandProfile.findFirst({
      where: { slug: { equals: slug, mode: "insensitive" } },
    });
  }

  public static async createBrandProfile(
    data: Prisma.BrandProfileUncheckedCreateInput,
    tx: PrismaClientOrTx = db
  ) {
    return tx.brandProfile.create({
      data,
      include: {
        brandLocations: {
          include: {
            state: true,
            city: true,
          },
        },
      },
    });
  }

  public static async updateUserRole(
    userId: string,
    role: "BRAND" | "USER" | "DOCTOR" | "BREEDER" | "ADMIN",
    tx: PrismaClientOrTx = db
  ) {
    return tx.user.update({
      where: { id: userId },
      data: { role },
    });
  }

  public static async findStateByName(stateName: string, tx: PrismaClientOrTx = db) {
    return tx.state.findFirst({
      where: { name: { equals: stateName, mode: "insensitive" } },
    });
  }

  public static async createState(
    data: Prisma.StateCreateInput,
    tx: PrismaClientOrTx = db
  ) {
    return tx.state.create({ data });
  }

  public static async findCityByNameAndState(
    cityName: string,
    stateId: string,
    tx: PrismaClientOrTx = db
  ) {
    return tx.city.findFirst({
      where: {
        name: { equals: cityName, mode: "insensitive" },
        stateId,
      },
    });
  }

  public static async createCity(
    data: Prisma.CityUncheckedCreateInput,
    tx: PrismaClientOrTx = db
  ) {
    return tx.city.create({ data });
  }

  public static async findMany(
    where: Prisma.BrandProfileWhereInput,
    tx: PrismaClientOrTx = db
  ) {
    return tx.brandProfile.findMany({
      where,
      include: {
        brandLocations: {
          include: {
            state: true,
            city: true,
          },
        },
        user: {
          select: {
            id: true,
            name: true,
            phone: true,
            avatarUrl: true,
            email: true,
          },
        },
      },
    });
  }

  public static async findById(id: string, tx: PrismaClientOrTx = db) {
    return tx.brandProfile.findUnique({
      where: { id },
      include: {
        brandLocations: {
          include: {
            state: true,
            city: true,
          },
        },
        user: {
          select: {
            id: true,
            name: true,
            phone: true,
            avatarUrl: true,
            email: true,
          },
        },
      },
    });
  }

  public static async updateBrandProfile(
    id: string,
    data: Prisma.BrandProfileUncheckedUpdateInput,
    tx: PrismaClientOrTx = db
  ) {
    return tx.brandProfile.update({
      where: { id },
      data,
      include: {
        brandLocations: {
          include: {
            state: true,
            city: true,
          },
        },
        user: {
          select: {
            id: true,
            name: true,
            phone: true,
            avatarUrl: true,
            email: true,
          },
        },
      },
    });
  }

  public static async findLocationByBrandId(brandId: string, tx: PrismaClientOrTx = db) {
    return tx.brandLocation.findFirst({
      where: { brandId },
    });
  }

  public static async updateBrandLocation(
    id: string,
    data: Prisma.BrandLocationUncheckedUpdateInput,
    tx: PrismaClientOrTx = db
  ) {
    return tx.brandLocation.update({
      where: { id },
      data,
    });
  }

  public static async createBrandLocation(
    data: Prisma.BrandLocationUncheckedCreateInput,
    tx: PrismaClientOrTx = db
  ) {
    return tx.brandLocation.create({
      data,
    });
  }
}
