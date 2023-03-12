const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../utils/cloudinary");

const cloudinaryStorage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "pdfs",
  },
});

const upload = multer({ storage: cloudinaryStorage });

module.exports = upload;
