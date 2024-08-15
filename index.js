const express = require("express");
const dotenv = require("dotenv").config();
const PORT = dotenv.parsed.PORT;
const app = express();
const connectDB = require("./db/url.db");
const DB_URL = dotenv.parsed.DATABASE_URL;
const UrlRoutes = require("./routes/url.routes");
const staticRoute = require("./routes/static.routes");
const userRoute = require("./routes/user.routes");
const path = require("path");
const cookieParser = require("cookie-parser");

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// define view engine
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

// Database Connection
connectDB(DB_URL);

// URL Routes middleware
app.use("/url", UrlRoutes);
app.use("/", staticRoute);
app.use("/user", userRoute);

// sever listener
app.listen(PORT, () => {
  console.log("Server is up and running on PORT", PORT);
});
