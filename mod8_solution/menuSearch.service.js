(function () {
    'use strict';

    angular.module('NarrowItDownApp')
    .service('MenuSearchService', MenuSearchService);

    MenuSearchService.$inject = ['$http'];
    function MenuSearchService($http) {
        var service = this;

        service.getMatchedMenuItems = function (searchTerm) {
            return $http({
                method: "GET",
                url: "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json"
            }).then(function (response) {
                var allItems = [];
                for (var category in response.data) {
                    allItems = allItems.concat(response.data[category].menu_items);
                }

                var foundItems = allItems.filter(function (item) {
                    return item.description.toLowerCase().includes(searchTerm.toLowerCase());
                });

                return foundItems;
            });
        };
    }
})();
