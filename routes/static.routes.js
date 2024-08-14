const express = require("express");
const router = express.Router();
const Url = require("../models/url.models");

router.get("/url", async (req, res) => {
  const all_urls = await Url.find({});
  return res.status(200).render("index", {
    all_urls,
  });
});

module.exports = router;
