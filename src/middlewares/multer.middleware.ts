import multer from "multer";

const storage = multer.memoryStorage();

const multerUpload = multer({
  storage,
  limits: { fileSize: 2097152 }, // 2MB limit
  fileFilter: (_, file, cb) => {
    const allowedMimeTypes = [
      "image/jpeg",
      "image/png",
      "image/webp",
      "image/jpg",
    ];
    if (allowedMimeTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Only JPEG, PNG, JPG and WEBP images are allowed"));
    }
  },
});

export default multerUpload;
