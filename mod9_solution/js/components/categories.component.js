(function() {
    angular.module('MenuApp')
    .component('categories', {
        templateUrl: 'js/components/categories.component.html',
        bindings: {
            categories: '<'
        }
    });
})();
