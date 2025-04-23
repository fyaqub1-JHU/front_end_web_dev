(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', '$q', 'ApiPath'];
function MenuService($http, $q, ApiPath) {
  var service = this;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };

  
  service.getItem = function (shortName) {
    var category = shortName.charAt(0).toUpperCase();
    var itemIndex = parseInt(shortName.substring(1)) - 1;
  
    return $http.get(ApiPath + '/menu_items/' + category + '/menu_items/' + itemIndex + '.json')
      .then(function (response) {
        if (response.data) {
          return response.data;
        } else {
          return $q.reject("Not found");
        }
      });
  };

}

})();
