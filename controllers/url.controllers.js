const Url = require("../models/url.models");
const uuid = require("short-unique-id");

async function createShortURL(req, res) {
  const url = req.body.url;
  if (!url) {
    return res.status(400).json({
      message: "URL is required",
    });
  }

  // short id
  const uid = new uuid({ length: 10 });

  id = uid.rnd();

  await Url.create({
    originalURL: url,
    shortID: id,
    visitHistory: [],
  });

  return res.status(200).json({
    message: `your short URL is - http://localhost:8000/${id}`,
  });
}

async function redirectUser(req, res) {
  const id = req.params.id;

  const urlData = await Url.find({
    shortID: id,
  });

  if (urlData.length === 0) {
    return res.status(400).json({
      message: "ID is invalid",
    });
  }

  await Url.updateOne(
    {
      shortID: id,
    },
    {
      $push: {
        visitHistory: {
          timestamps: Date.now(),
        },
      },
    }
  );

  return res.status(200).redirect(urlData[0].originalURL);
}

async function getAnalytics(req, res) {
  const id = req.params.id;

  const urlData = await Url.find({
    shortID: id,
  });

  if (urlData.length === 0) {
    return res.status(400).json({
      message: "ID is invalid",
    });
  }

  return res.status(200).json({
    "number of visit": urlData[0].visitHistory.length,
  });
}

module.exports = {
  createShortURL,
  redirectUser,
  getAnalytics,
};
