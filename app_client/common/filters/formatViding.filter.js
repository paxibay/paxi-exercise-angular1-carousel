(function () {
  
  angular
    .module('carouselApp')
    .filter('formaViding', formaViding);
  
  function formaViding() {
    return function (viding) {
      //console.log(viding);
      // TODO:
      return viding;
    };
  }
})();

