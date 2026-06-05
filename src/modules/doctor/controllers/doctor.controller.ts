import { asyncHandler } from "../../../middlewares/error.middleware.js";
import { ErrorResponse, SuccessResponse } from "../../../utils/response.util.js";
import { registerDoctorSchema, updateDoctorSchema } from "../schemas/doctor.schema.js";
import { DoctorService } from "../services/doctor.service.js";
import { uploadToCloudinary } from "../../../config/cloudinary.js";

export const registerDoctor = asyncHandler(async (req, res, next) => {
  // 1. Ensure user is authenticated
  if (!req.user) {
    return next(new ErrorResponse("Authentication required", 401));
  }

  // 2. Validate request body with Zod
  const validated = registerDoctorSchema.parse(req.body);

  // 3. Upload qualification document to Cloudinary if sent
  let qualificationDocUrl: any = null;
  if (req.file) {
    const uploaded = await uploadToCloudinary(req.file.buffer, "doctor_qualifications");
    qualificationDocUrl = uploaded;
  } else if (req.body.qualificationDocUrl) {
    try {
      qualificationDocUrl = typeof req.body.qualificationDocUrl === "string"
        ? JSON.parse(req.body.qualificationDocUrl)
        : req.body.qualificationDocUrl;
    } catch {
      qualificationDocUrl = { secure_url: req.body.qualificationDocUrl };
    }
  }

  // 4. Register doctor
  const doctor = await DoctorService.registerDoctor(
    req.user.id,
    {
      licenseNumber: validated.licenseNumber ?? null,
      specialization: validated.specialization,
      experienceYears: validated.experienceYears,
      consultationFee: validated.consultationFee,
      qualificationDocUrl,
    },
    {
      stateName: validated.stateName,
      stateCode: validated.stateCode ?? null,
      stateLatitude: validated.stateLatitude ?? null,
      stateLongitude: validated.stateLongitude ?? null,
      cityName: validated.cityName,
      cityLatitude: validated.cityLatitude ?? null,
      cityLongitude: validated.cityLongitude ?? null,
      latitude: validated.latitude,
      longitude: validated.longitude,
    }
  );

  return SuccessResponse(
    res,
    "Doctor registered successfully",
    doctor,
    201
  );
});

export const getDoctorById = asyncHandler(async (req, res, next) => {
  const id = req.params.id as string;

  if (!id) {
    return next(new ErrorResponse("Doctor ID is required", 400));
  }

  const doctor = await DoctorService.getDoctorById(id);

  if (!doctor) {
    return next(new ErrorResponse("Doctor profile not found", 404));
  }

  return SuccessResponse(res, "Doctor profile fetched successfully", doctor, 200);
});

export const updateDoctor = asyncHandler(async (req, res, next) => {
  // 1. Ensure user is authenticated
  if (!req.user) {
    return next(new ErrorResponse("Authentication required", 401));
  }

  const id = req.params.id as string;
  if (!id) {
    return next(new ErrorResponse("Doctor ID is required", 400));
  }

  // 2. Validate request body with Zod
  const validated = updateDoctorSchema.parse(req.body);

  // 3. Upload qualification document to Cloudinary if sent
  let qualificationDocUrl: any = undefined;
  if (req.file) {
    const uploaded = await uploadToCloudinary(req.file.buffer, "doctor_qualifications");
    qualificationDocUrl = uploaded;
  } else if (req.body.qualificationDocUrl) {
    try {
      qualificationDocUrl = typeof req.body.qualificationDocUrl === "string"
        ? JSON.parse(req.body.qualificationDocUrl)
        : req.body.qualificationDocUrl;
    } catch {
      qualificationDocUrl = { secure_url: req.body.qualificationDocUrl };
    }
  }

  // 4. Resolve Location object if location detail is updated
  const hasLocationUpdate =
    validated.stateName !== undefined ||
    validated.cityName !== undefined ||
    validated.latitude !== undefined ||
    validated.longitude !== undefined;

  let locationData = null;
  if (hasLocationUpdate) {
    const existingDoctor = await DoctorService.getDoctorById(id);
    const existingLoc = existingDoctor?.doctorLocations?.[0];

    const stateName = validated.stateName ?? existingLoc?.state?.name;
    const cityName = validated.cityName ?? existingLoc?.city?.name;
    const latitude = validated.latitude ?? (existingLoc?.latitude ? Number(existingLoc.latitude) : 0);
    const longitude = validated.longitude ?? (existingLoc?.longitude ? Number(existingLoc.longitude) : 0);

    if (!stateName || !cityName) {
      return next(new ErrorResponse("State name and City name are required for location updates", 400));
    }

    locationData = {
      stateName: stateName as string,
      stateCode: validated.stateCode ?? existingLoc?.state?.stateCode ?? null,
      stateLatitude: validated.stateLatitude ?? (existingLoc?.state?.latitude ? Number(existingLoc.state.latitude) : null),
      stateLongitude: validated.stateLongitude ?? (existingLoc?.state?.longitude ? Number(existingLoc.state.longitude) : null),
      cityName: cityName as string,
      cityLatitude: validated.cityLatitude ?? (existingLoc?.city?.latitude ? Number(existingLoc.city.latitude) : null),
      cityLongitude: validated.cityLongitude ?? (existingLoc?.city?.longitude ? Number(existingLoc.city.longitude) : null),
      latitude,
      longitude,
    };
  }

  // 5. Construct update details dynamically to satisfy exactOptionalPropertyTypes
  const doctorData: any = {};
  if (validated.licenseNumber !== undefined) {
    doctorData.licenseNumber = validated.licenseNumber;
  }
  if (validated.specialization !== undefined) {
    doctorData.specialization = validated.specialization;
  }
  if (validated.experienceYears !== undefined) {
    doctorData.experienceYears = validated.experienceYears;
  }
  if (validated.consultationFee !== undefined) {
    doctorData.consultationFee = validated.consultationFee;
  }
  if (qualificationDocUrl !== undefined) {
    doctorData.qualificationDocUrl = qualificationDocUrl;
  }

  // 6. Perform update
  const updatedDoctor = await DoctorService.updateDoctor(
    req.user.id,
    id,
    doctorData,
    locationData
  );

  return SuccessResponse(
    res,
    "Doctor profile updated successfully",
    updatedDoctor,
    200
  );
});

export const getDoctorsByLocation = asyncHandler(async (req, res, next) => {
  const { latitude, longitude, radius = "50", page = "1", limit = "10" } = req.query;

  if (!latitude || !longitude) {
    return next(new ErrorResponse("Latitude and longitude are required", 400));
  }

  const lat = parseFloat(latitude as string);
  const lng = parseFloat(longitude as string);
  const rad = parseFloat(radius as string);
  const pageNumber = parseInt(page as string, 10);
  const pageSize = parseInt(limit as string, 10);

  if (isNaN(lat) || isNaN(lng)) {
    return next(new ErrorResponse("Invalid latitude or longitude", 400));
  }

  if (isNaN(rad) || rad <= 0) {
    return next(new ErrorResponse("Invalid radius", 400));
  }

  const result = await DoctorService.getDoctorsByLocation(
    lat,
    lng,
    rad,
    pageNumber,
    pageSize
  );

  return SuccessResponse(
    res,
    "Doctors fetched successfully",
    {
      doctors: result.doctors,
      pagination: {
        total: result.total,
        totalPages: Math.ceil(result.total / pageSize),
        currentPage: pageNumber,
        count: result.doctors.length,
      },
    },
    200
  );
});


