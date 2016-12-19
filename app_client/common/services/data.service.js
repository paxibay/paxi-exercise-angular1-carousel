(function () {
  
  angular
    .module('carouselApp')
    .service('carouselData', carouselData);
  
  carouselData.$inject = ['$http'];
  function carouselData($http) {
    
    var ridingList = function () {
      return $http.get('/api/ridings');
    };

    var ridingById = function (ridingid) {
      return $http.get('/api/ridings/' + ridingid);
    };
    
    return {
      ridingList : ridingList,
      ridingById : ridingById
    };
  }

})();