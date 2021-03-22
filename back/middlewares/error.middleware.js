exports.logger = function (err, req, res, next) {
  console.log(`error`, err)
  next(err);
}

exports.handler = function (err, req, res, next) {
  res.status(500).send({ error: err });
}