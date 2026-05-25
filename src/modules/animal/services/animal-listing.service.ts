import { db } from "../../../db/db.js";
import type { CreateAnimalListingDto } from "../schemas/animal-listing.schema.js";

export class AnimalListingService {
  /**
   * Count the total number of listings created by the user
   */
  public static async countUserListings(ownerId: string): Promise<number> {
    return await db.cattleListing.count({
      where: { ownerId },
    });
  }

  /**
   * Create animal and listing in a transaction
   */
  public static async createListing(
    ownerId: string,
    dto: CreateAnimalListingDto,
    images: { public_id: string; secure_url: string }[]
  ) {
    return await db.$transaction(async (tx) => {
      // 1. Resolve State
      let state = await tx.state.findFirst({
        where: { name: { equals: dto.stateName, mode: "insensitive" } },
      });

      if (!state) {
        state = await tx.state.create({
          data: {
            name: dto.stateName,
            stateCode: dto.stateCode || dto.stateName.substring(0, 2).toUpperCase(),
            country: "India",
            countryCode: "IN",
            latitude: dto.stateLatitude ?? null,
            longitude: dto.stateLongitude ?? null,
          },
        });
      }

      // 2. Resolve City
      let city = await tx.city.findFirst({
        where: {
          name: { equals: dto.cityName, mode: "insensitive" },
          stateId: state.id,
        },
      });

      if (!city) {
        city = await tx.city.create({
          data: {
            name: dto.cityName,
            stateId: state.id,
            stateCode: state.stateCode || "JH",
            country: "India",
            countryCode: "IN",
            latitude: dto.cityLatitude ?? null,
            longitude: dto.cityLongitude ?? null,
          },
        });
      }

      // 3. Resolve Area if provided
      let area = null;
      if (dto.areaName) {
        area = await tx.area.findFirst({
          where: {
            name: { equals: dto.areaName, mode: "insensitive" },
            cityId: city.id,
          },
        });

        if (!area) {
          area = await tx.area.create({
            data: {
              cityId: city.id,
              name: dto.areaName,
              latitude: dto.areaLatitude ?? dto.latitude ?? 0.0,
              longitude: dto.areaLongitude ?? dto.longitude ?? 0.0,
            },
          });
        }
      }

      // 4. Create the Animal record
      const animal = await tx.animal.create({
        data: {
          ownerId,
          mainCategoryId: dto.mainCategoryId,
          subCategoryId: dto.subCategoryId,
          name: dto.name ?? null,
          category: dto.category,
          breed: dto.breed ?? null,
          ageMonths: dto.ageMonths ?? null,
          gender: dto.gender ?? null,
          weightKg: dto.weightKg ?? null,
          description: dto.description ?? null,
          doesGiveMilk: dto.doesGiveMilk,
          dailyMilkProdLtr: dto.dailyMilkProdLtr ?? null,
          status: "LISTED_FOR_SALE",
        },
      });

      // 5. Calculate listingExpiresAt (30 days from now)
      const listingExpiresAt = new Date();
      listingExpiresAt.setDate(listingExpiresAt.getDate() + 30);

      // 6. Create CattleListing
      const listing = await tx.cattleListing.create({
        data: {
          ownerId,
          animalId: animal.id,
          title: dto.title,
          description: dto.listingDescription,
          price: dto.price,
          latitude: dto.latitude ?? null,
          longitude: dto.longitude ?? null,
          listingExpiresAt,
          status: "ACTIVE",
          location: {
            create: {
              stateId: state.id,
              cityId: city.id,
              ...(area && { areaId: area.id }),
            },
          },
          images: {
            create: images.map((img, index) => ({
              url: img,
              sortOrder: index,
            })),
          },
        },
        include: {
          animal: true,
          location: {
            include: {
              state: true,
              city: true,
              area: true,
            },
          },
          images: true,
        },
      });

      return listing;
    });
  }
}
