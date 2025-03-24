(function () {
    'use strict';

    angular.module('NarrowItDownApp')
    .directive('foundItems', FoundItemsDirective);

    function FoundItemsDirective() {
        return {
            restrict: 'E',
            templateUrl: 'foundItems.html', 
            scope: {
                foundItems: '<',
                onRemove: '&'
            }
        };
    }
})();