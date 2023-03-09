const { Router } = require("express");

const router = new Router();
const upload = require("../utils/multer");

const {
  getUser,
  changePassword,
  editProfile,
  uploadPDF,
} = require("../controllers/user");

router.get("/:id", getUser);
router.post("/change-password", changePassword);
router.post("/edit-profile/:id", editProfile);
router.post("/upload/pdf/:id", uploadPDF);

module.exports = router;
