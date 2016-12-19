var express = require('express');
var router = express.Router();
var ctrlRidings = require('../controllers/ridings');

router.use(function (req, res, next) {
  console.log(req.method, req.url);
  next();
});

router.get('/ridings', ctrlRidings.ridingsList);
router.get('/ridings/:ridingid', ctrlRidings.ridingsReadOne);

module.exports = router;
