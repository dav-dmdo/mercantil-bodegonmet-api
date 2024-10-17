function logUrl(req, res, next) {
  console.log(req.originalUrl);
  next();
}

module.exports = logUrl;
