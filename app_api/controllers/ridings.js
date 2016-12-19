var dbFake = require('../models/model.dbfake');

var sendJSONresponse = function (res, status, content) {
  res.status(status);
  res.json(content);
};

/* GET list of ridings */
module.exports.ridingsList = function (req, res) {
  sendJSONresponse(res, 200, dbFake.ridingsList());
};

/* GET a riding by the id */
module.exports.ridingsReadOne = function (req, res) {
  sendJSONresponse(res, 200, dbFake.ridingsReadOne(req.params.ridingid));
};
