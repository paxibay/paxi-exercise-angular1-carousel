(function () {

  angular
    .module('carouselApp')
    .directive('ridingResult', ridingResult);

  function ridingResult() {
    return {
      restrict: 'EA',
      scope: {
        local: "=riding"
      },
      link: function (scope, element, attrs) {
        var data = scope.local.riding.results;
        var voteTotal = scope.local.voteTotal;

        if (angular.isArray(data)) {
          
          var listElem = angular.element("<tr>").addClass("thText");
          element.append(listElem);

          var itemElement = angular.element("<th>").text("Name").addClass("tdWidth");
          listElem.append(itemElement);
          itemElement = angular.element("<th>").text("PartyId").addClass("tdWidth");
          listElem.append(itemElement);
          itemElement = angular.element("<th>").text("Votes").addClass("tdWidth");
          listElem.append(itemElement);
          itemElement = angular.element("<th>").text("Elected").addClass("tdWidth");
          listElem.append(itemElement);
          itemElement = angular.element("<th>").text("Party Code").addClass("tdWidth");
          listElem.append(itemElement);
          itemElement = angular.element("<th>").text("Percentage").addClass("tdWidth");
          listElem.append(itemElement);
          
          function compare(a, b) {
            if (a.partyId < b.partyId)
              return -1;
            else if (a.partyId > b.partyId)
              return 1;
            else
              return 0;
          }
          data.sort(compare);

          for (var i = 0; i < data.length; i++) {
            var propertyExpression = data[i].votes / voteTotal * 100 + "| number:2 | number";
            
            var listElem = null;
            if (data[i].isElected) {
              listElem = angular.element("<tr>").addClass("highlightedText");
            }
            else {
              listElem = angular.element("<tr>");
            }
            
            switch (data[i].partyCode) {
              case "LIB":
                listElem.addClass("bgLIB");
                break;
              case "PC":
                listElem.addClass("bgPC");
                break;
              case "NDP":
                listElem.addClass("bgNDP");
                break;
              case "GRN":
                listElem.addClass("bgGRN");
                break;
              default:
                listElem.addClass("bgOTHER");
                break;
            }
            
            element.append(listElem);

            var itemElement = angular.element("<td>").text(data[i].name);
            listElem.append(itemElement);
            itemElement = angular.element("<td>").text(data[i].partyId);
            listElem.append(itemElement);
            itemElement = angular.element("<td>").text(data[i].votes);
            listElem.append(itemElement);
            itemElement = angular.element("<td>").text(data[i].isElected);
            listElem.append(itemElement);
            itemElement = angular.element("<td>").text(data[i].partyCode);
            listElem.append(itemElement);
            itemElement = angular.element("<td>").text(scope.$eval(propertyExpression, data[i]));
            listElem.append(itemElement);
          }
        }
      }
      //templateUrl: '/common/directives/ridingResult/ridingResult.template.html'
    };
  }

})();