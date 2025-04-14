(function() {
    angular.module('MenuApp')
    .component('items', {
        templateUrl: 'js/components/items.component.html',
        bindings: {
            items: '<'
        }
    });
})();
