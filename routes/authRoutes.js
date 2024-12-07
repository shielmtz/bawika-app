const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer();

const { register, login, cekemail } = require("../controllers/authController");

router.post("/register", upload.none(), register);
router.post("/login", upload.none(), login);
router.post("/check-email", upload.none(), cekemail);

module.exports = router;
