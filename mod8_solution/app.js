(function () {
    'use strict';

    angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService);

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var narrowCtrl = this;

        narrowCtrl.searchTerm = "";
        narrowCtrl.nothingFound = false;
        narrowCtrl.loading = false;

        narrowCtrl.narrowItDown = function () {
            narrowCtrl.found = []; 
            narrowCtrl.nothingFound = false; 

            if (narrowCtrl.searchTerm.trim() === "") {
                narrowCtrl.nothingFound = true;
                return;
            }

            narrowCtrl.loading = true; 

            MenuSearchService.getMatchedMenuItems(narrowCtrl.searchTerm)
            .then(function (response) {
                narrowCtrl.found = response;
                narrowCtrl.nothingFound = (narrowCtrl.found.length === 0);
            })
            .finally(function () {
                narrowCtrl.loading = false;
            });
        };

        narrowCtrl.removeItem = function (index) {
            narrowCtrl.found.splice(index, 1);
        };
    }
})();
