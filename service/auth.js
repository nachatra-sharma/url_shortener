const jwt = require("jsonwebtoken");
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

console.log(JWT_SECRET_KEY);

function setUser(name, email) {
  return jwt.sign({ name, email }, JWT_SECRET_KEY);
}

function getUser(token) {
  try {
    const decode = jwt.verify(token, JWT_SECRET_KEY);
    return decode;
  } catch (error) {
    console.error("Token verification failed:", error);
  }
}

module.exports = {
  setUser,
  getUser,
};
