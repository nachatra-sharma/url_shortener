const express = require("express");
const router = express.Router();
const {
  createShortURL,
  redirectUser,
  getAnalytics,
} = require("../controllers/url.controllers");
const checkID = require("../middlewares/url.middlewares");

router.post("/", createShortURL);

router.get("/:id", checkID, redirectUser);

router.get("/analytics/:id", checkID, getAnalytics);

module.exports = router;
