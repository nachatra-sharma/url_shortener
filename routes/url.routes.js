const express = require("express");
const router = express.Router();
const {
  createShortURL,
  redirectUser,
  getAnalytics,
} = require("../controllers/url.controllers");
const checkID = require("../middlewares/url.middlewares");

router.post("/url", createShortURL);

router.get("/:id", checkID, redirectUser);

router.get("/url/analytics/:id", checkID, getAnalytics);

module.exports = router;
