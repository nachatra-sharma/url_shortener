const express = require("express");
const dotenv = require("dotenv").config();
const PORT = dotenv.parsed.PORT;
const app = express();
const connectDB = require("./db/url.db");
const DB_URL = dotenv.parsed.DATABASE_URL;
const UrlRoutes = require("./routes/url.routes");

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database Connection
connectDB(DB_URL);

// URL Routes middleware
app.use("/", UrlRoutes);

// sever listener
app.listen(PORT, () => {
  console.log("Server is up and running on PORT", PORT);
});
