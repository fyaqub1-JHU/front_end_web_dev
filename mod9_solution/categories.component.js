(function() {
    angular.module('MenuApp')
    .component('categories', {
        templateUrl: 'categories.component.html',
        bindings: {
            categories: '<'
        }
    });
})();
