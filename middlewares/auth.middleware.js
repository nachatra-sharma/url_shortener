const { getUser } = require("../service/auth");

function authCheck(req, res, next) {
  try {
    const token = req.cookies.sessionID;
    if (!token) {
      return res.status(400).redirect("/user/login");
    }

    const isUserValid = getUser(token);

    if (!isUserValid.email || !isUserValid.name) {
      return res.status(400).redirect("/user/login");
    }

    next();
  } catch (error) {
    console.error("Authentication error:", error);
    res.status(500).send("Internal Server Error");
  }
}

module.exports = authCheck;
