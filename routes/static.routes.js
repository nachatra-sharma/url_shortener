const express = require("express");
const router = express.Router();
const Url = require("../models/url.models");
const authCheck = require("../middlewares/auth.middleware");

router.get("/", authCheck, async (req, res) => {
  const all_urls = await Url.find({});
  return res.status(200).render("index", {
    all_urls,
  });
});

router.get("/user/signup", (req, res) => {
  return res.status(200).render("signup");
});

router.get("/user/login", (req, res) => {
  return res.status(200).render("login");
});

module.exports = router;
