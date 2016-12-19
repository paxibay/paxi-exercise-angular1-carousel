(function () {
  angular
    .module('carouselApp')
    .controller('homeCtrl', homeCtrl);
  
  homeCtrl.$inject = ['carouselData'];
  function homeCtrl(carouselData) {
    var vm = this;
    vm.message = "Checking ridings";
    vm.pageHeader = {
      title: 'Ridings',
      strapline: 'This page only shows the list of ridings!'
    };

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
        vm.data = { ridings: data };
      })
        .error(function (e) {
        vm.message = "Sorry, something's gone wrong, please try again later";
      });
    };
  }
})();

