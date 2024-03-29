import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "/uploadMemes/");
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString() + "=" + file.originalname);
  },
});
const fileFilter = (req: any, file: any, cb: any) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg"
  ) {
    cb(null, true);
  } else
    cb(
      { error: "Unsupported file format. Upload only JPEG/JPG or PNG" },
      false
    );
};
const upload = multer({
  storage,
  limits: { fieldSize: 1024 * 1024 },
  fileFilter,
});

export default upload;
