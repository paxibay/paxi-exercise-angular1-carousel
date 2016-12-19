var ridingsFake = require('./model.ridings');

module.exports = (function (ridingsFake) {
  
  var ridingsList = function () {
    return ridingsFake;
  };

  var ridingsReadOne = function (index) {
    return ridingsFake[index];
  };
  
  return {
    ridingsList: ridingsList,
    ridingsReadOne: ridingsReadOne
  }

})(ridingsFake);



