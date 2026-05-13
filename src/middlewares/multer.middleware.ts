import multer from "multer";

const storage = multer.memoryStorage();

const multerUpload = multer({
  storage,
  limits: { fileSize: 2 * 1024 * 1024 }, // max size 2 mb
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