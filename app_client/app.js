(function () {
  
  angular.module('carouselApp', ['ngRoute', 'ngAnimate', 'ui.bootstrap']);
  
  function config($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/modules/home/home.view.html',
        controller: 'homeCtrl',
        controllerAs: 'vm'
      })
      .when('/ridings', {
        templateUrl: '/modules/ridingDetail/ridingDetail.view.html',
        controller: 'ridingDetailCtrl',
        controllerAs: 'vm'
      })
      .otherwise({ redirectTo: '/' });
    
    //$locationProvider.html5Mode(true);
  }
  
  angular
    .module('carouselApp')
    .config(['$routeProvider', config]);

})();


