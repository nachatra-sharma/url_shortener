const express = require("express");
const router = express.Router();
const authCheck = require("../middlewares/auth.middleware");

const {
  createShortURL,
  redirectUser,
  getAnalytics,
} = require("../controllers/url.controllers");
const checkID = require("../middlewares/url.middlewares");

router.post("/", authCheck, createShortURL);

router.get("/:id", authCheck, checkID, redirectUser);

router.get("/analytics/:id", authCheck, checkID, getAnalytics);

module.exports = router;
