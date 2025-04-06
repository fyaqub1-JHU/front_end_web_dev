(function() {
    angular.module('MenuApp')
    .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
        // Default route
        $urlRouterProvider.otherwise('/');

        // States
        $stateProvider
        .state('home', {
            url: '/',
            template: '<h1>Welcome to our Restaurant</h1><a ui-sref="categories">View Categories</a>'
        })
        .state('categories', {
            url: '/categories',
            template: '<categories categories="$resolve.categories"></categories>',
            controller: CategoriesController,
            controllerAs: '$ctrl',
            resolve: {
                categories: ['MenuDataService', function(MenuDataService) {
                    return MenuDataService.getAllCategories();
                }]
            }
        })
        .state('items', {
            url: '/items/{categoryShortName}',
            template: '<items items="$resolve.items"></items>',
            controller: ItemsController,
            controllerAs: '$ctrl',
            resolve: {
                items: ['MenuDataService', '$stateParams', function(MenuDataService, $stateParams) {
                    return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
                }]
            }
        });
    }

    // Controllers
    function CategoriesController() {
        var $ctrl = this;
    }

    function ItemsController() {
        var $ctrl = this;
    }
})();
