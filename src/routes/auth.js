const { Router } = require("express");
const { validateLoginToken } = require("../utils/JWT");

const router = new Router();

const {
  postLogin,
  postRegister,
  getProfile,
  confirmAccount,
  forgotPassword,
  resetPassword,
  resetPassPost,
  logout
} = require("../controllers/auth");

router.route("/login").get(validateLoginToken, getProfile).post(postLogin);
router.post('/logout', logout)
router.post("/register", postRegister);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:id", resetPassPost);
router.get("/reset-password/:id/:token", resetPassword);
router.get("/confirm", confirmAccount);

module.exports = router;
