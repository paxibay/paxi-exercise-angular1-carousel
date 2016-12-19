(function () {
  
  angular
    .module('carouselApp')
    .controller('ridingDetailCtrl', ridingDetailCtrl);
  
  ridingDetailCtrl.$inject = ['$scope', 'carouselData'];
  function ridingDetailCtrl($scope, carouselData) {
    var vm = this;
    vm.data = {};
    
    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var slides = $scope.slides = [];
    
    vm.init = init;
    init();
    function init() {
      getData();
    }
    
    function getData() {
      vm.message = "Searching for ridings ...";
      carouselData.ridingList()
      .success(function (data) {
        vm.message = data.length > 0 ? "" : "No ridings found";
        vm.data = {
          ridings: data,
        };
        console.log(vm.data);
        for (var i = 0; i < 10; i++) {
          $scope.addSlide(i);
        }
      })
      .error(function (e) {
        vm.message = "Sorry, something's gone wrong, please try again later";
      });
    };
    
    $scope.addSlide = function (id) {
      var newWidth = 600 + slides.length + 1;
      slides.push({
        image: 'http://lorempixel.com/' + newWidth + '/300',
        id: id,
        riding: vm.data.ridings[id],
        voteTotal: voteTotal(id)
      });
    };
    
    function voteTotal(id) {
      var riding = vm.data.ridings[id];
      var total = 0;
      angular.forEach(riding.results, function (value, key) {
        total = total + value.votes;
      });
      return total;
    }
  }

})();

