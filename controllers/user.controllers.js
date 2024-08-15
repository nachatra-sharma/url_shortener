const User = require("../models/user.models");
const { setUser } = require("../service/auth");

async function handleUserSignup(req, res) {
  // data validation later
  const { name, email, password } = req.body;

  const isUserExist = await User.find({ email });

  if (isUserExist.length !== 0) {
    return res.status(400).redirect("signup");
  }

  const token = setUser(name, email);
  res.cookie("sessionID", token);

  await User.create({
    name,
    email,
    password,
  });

  return res.status(200).redirect("/");
}

async function handleUserLogin(req, res) {
  // data validation
  const { email, password } = req.body;

  const isUserExist = await User.find({
    email,
    password,
  });

  if (isUserExist.length === 0) {
    return res.status(400).render("login", {
      error: "Invalid user credentials",
    });
  }

  const name = isUserExist[0].name;
  const token = setUser(name, email);
  res.cookie("sessionID", token);

  return res.status(200).redirect("/");
}

module.exports = { handleUserSignup, handleUserLogin };
