const mongoose = require("mongoose");

// create url schema
const UrlSchema = new mongoose.Schema(
  {
    originalURL: {
      type: String,
      required: true,
    },
    shortID: {
      type: String,
      unique: true,
      required: true,
    },
    visitHistory: [
      {
        timestamp: {
          type: Number,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

// create url model
const Url = mongoose.model("UrlSchema", UrlSchema);

module.exports = Url;
