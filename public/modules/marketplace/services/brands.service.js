import { db } from "../../../db/db.js";
import { ErrorResponse } from "../../../utils/response.util.js";
import { BrandsRepository } from "../repo/brands.repository.js";
export class BrandsService {
    static async registerBrand(userId, brandData, locationData) {
        return await db.$transaction(async (tx) => {
            // 1. Check if user already has a brand profile
            const existingProfile = await BrandsRepository.findByUserId(userId, tx);
            if (existingProfile) {
                throw new ErrorResponse("User is already registered as a brand", 400);
            }
            // 2. Check if brand name is unique
            const existingName = await BrandsRepository.findByBrandName(brandData.brandName, tx);
            if (existingName) {
                throw new ErrorResponse("Brand name is already taken", 400);
            }
            // 3. Check if slug is unique
            const existingSlug = await BrandsRepository.findBySlug(brandData.slug, tx);
            if (existingSlug) {
                throw new ErrorResponse("Brand slug is already taken", 400);
            }
            // 4. Resolve State (check if exists, create if not)
            let state = await BrandsRepository.findStateByName(locationData.stateName, tx);
            if (!state) {
                state = await BrandsRepository.createState({
                    name: locationData.stateName,
                    stateCode: locationData.stateCode || locationData.stateName.substring(0, 2).toUpperCase(),
                    country: "India",
                    countryCode: "IN",
                    latitude: locationData.stateLatitude ?? null,
                    longitude: locationData.stateLongitude ?? null,
                }, tx);
            }
            // 5. Resolve City (check if exists, create if not)
            let city = await BrandsRepository.findCityByNameAndState(locationData.cityName, state.id, tx);
            if (!city) {
                city = await BrandsRepository.createCity({
                    name: locationData.cityName,
                    stateId: state.id,
                    stateCode: state.stateCode || "JH",
                    country: "India",
                    countryCode: "IN",
                    latitude: locationData.cityLatitude ?? null,
                    longitude: locationData.cityLongitude ?? null,
                }, tx);
            }
            // 6. Create Brand Profile with Location
            const brand = await BrandsRepository.createBrandProfile({
                userId,
                brandName: brandData.brandName,
                slug: brandData.slug,
                description: brandData.description ?? null,
                logoUrl: brandData.logoUrl ?? null,
                bannerUrl: brandData.bannerUrl ?? null,
                contactEmail: brandData.contactEmail ?? null,
                contactPhone: brandData.contactPhone ?? null,
                address: brandData.address ?? null,
                gstNumber: brandData.gstNumber ?? null,
                brandLocations: {
                    create: {
                        latitude: locationData.latitude ?? null,
                        longitude: locationData.longitude ?? null,
                        stateId: state.id,
                        cityId: city.id,
                    },
                },
            }, tx);
            // 7. Update user role to BRAND
            await BrandsRepository.updateUserRole(userId, "BRAND", tx);
            return brand;
        });
    }
    static async getBrandsNearby(lat, lng, radiusKm, page, limit, search) {
        const latDelta = radiusKm / 111.1;
        const lngDelta = radiusKm / (111.1 * Math.cos((lat * Math.PI) / 180));
        const minLat = lat - latDelta;
        const maxLat = lat + latDelta;
        const minLng = lng - lngDelta;
        const maxLng = lng + lngDelta;
        const where = {
            isActive: true,
            brandLocations: {
                some: {
                    latitude: {
                        gte: minLat,
                        lte: maxLat,
                    },
                    longitude: {
                        gte: minLng,
                        lte: maxLng,
                    },
                },
            },
        };
        if (search) {
            where.brandName = {
                contains: search,
                mode: "insensitive",
            };
        }
        const brands = await BrandsRepository.findMany(where);
        const brandsWithDistance = brands
            .map((brand) => {
            const location = brand.brandLocations[0];
            if (!location || location.latitude === null || location.longitude === null) {
                return null;
            }
            const distance = getHaversineDistance(lat, lng, Number(location.latitude), Number(location.longitude));
            return {
                ...brand,
                distance,
            };
        })
            .filter((b) => b !== null && b.distance <= radiusKm);
        brandsWithDistance.sort((a, b) => a.distance - b.distance);
        const total = brandsWithDistance.length;
        const startIndex = (page - 1) * limit;
        const paginatedBrands = brandsWithDistance.slice(startIndex, startIndex + limit);
        return {
            brands: paginatedBrands,
            total,
        };
    }
    static async getBrandById(id) {
        return await BrandsRepository.findById(id);
    }
    static async updateBrand(ownerId, brandId, brandData, locationData) {
        return await db.$transaction(async (tx) => {
            const brand = await BrandsRepository.findById(brandId, tx);
            if (!brand) {
                throw new ErrorResponse("Brand profile not found", 404);
            }
            if (brand.userId !== ownerId) {
                throw new ErrorResponse("You are not authorized to update this brand profile", 403);
            }
            if (brandData.brandName && brandData.brandName !== brand.brandName) {
                const existingName = await BrandsRepository.findByBrandName(brandData.brandName, tx);
                if (existingName) {
                    throw new ErrorResponse("Brand name is already taken", 400);
                }
            }
            if (brandData.slug && brandData.slug !== brand.slug) {
                const existingSlug = await BrandsRepository.findBySlug(brandData.slug, tx);
                if (existingSlug) {
                    throw new ErrorResponse("Brand slug is already taken", 400);
                }
            }
            if (locationData) {
                let state = await BrandsRepository.findStateByName(locationData.stateName, tx);
                if (!state) {
                    state = await BrandsRepository.createState({
                        name: locationData.stateName,
                        stateCode: locationData.stateCode || locationData.stateName.substring(0, 2).toUpperCase(),
                        country: "India",
                        countryCode: "IN",
                        latitude: locationData.stateLatitude ?? null,
                        longitude: locationData.stateLongitude ?? null,
                    }, tx);
                }
                let city = await BrandsRepository.findCityByNameAndState(locationData.cityName, state.id, tx);
                if (!city) {
                    city = await BrandsRepository.createCity({
                        name: locationData.cityName,
                        stateId: state.id,
                        stateCode: state.stateCode || "JH",
                        country: "India",
                        countryCode: "IN",
                        latitude: locationData.cityLatitude ?? null,
                        longitude: locationData.cityLongitude ?? null,
                    }, tx);
                }
                const existingLoc = await BrandsRepository.findLocationByBrandId(brandId, tx);
                if (existingLoc) {
                    await BrandsRepository.updateBrandLocation(existingLoc.id, {
                        latitude: locationData.latitude ?? null,
                        longitude: locationData.longitude ?? null,
                        stateId: state.id,
                        cityId: city.id,
                    }, tx);
                }
                else {
                    await BrandsRepository.createBrandLocation({
                        brandId,
                        latitude: locationData.latitude ?? null,
                        longitude: locationData.longitude ?? null,
                        stateId: state.id,
                        cityId: city.id,
                    }, tx);
                }
            }
            const updateData = {};
            if (brandData.brandName !== undefined)
                updateData.brandName = brandData.brandName;
            if (brandData.slug !== undefined)
                updateData.slug = brandData.slug;
            if (brandData.description !== undefined)
                updateData.description = brandData.description;
            if (brandData.logoUrl !== undefined)
                updateData.logoUrl = brandData.logoUrl;
            if (brandData.bannerUrl !== undefined)
                updateData.bannerUrl = brandData.bannerUrl;
            if (brandData.contactEmail !== undefined)
                updateData.contactEmail = brandData.contactEmail;
            if (brandData.contactPhone !== undefined)
                updateData.contactPhone = brandData.contactPhone;
            if (brandData.address !== undefined)
                updateData.address = brandData.address;
            if (brandData.gstNumber !== undefined)
                updateData.gstNumber = brandData.gstNumber;
            if (brandData.isActive !== undefined)
                updateData.isActive = brandData.isActive;
            const updatedBrand = await BrandsRepository.updateBrandProfile(brandId, updateData, tx);
            return updatedBrand;
        });
    }
}
function getHaversineDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the Earth in km
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos((lat1 * Math.PI) / 180) *
            Math.cos((lat2 * Math.PI) / 180) *
            Math.sin(dLon / 2) *
            Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}
//# sourceMappingURL=brands.service.js.map