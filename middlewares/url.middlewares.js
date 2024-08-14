function checkID(req, res, next) {
  const id = req.params.id;
  if (!id) {
    return res.status(400).json({
      message: "ID is invalid",
    });
  }

  next();
}

module.exports = checkID;
