(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService)
    .filter('customCurrency', CustomCurrencyFilter);

    //To buy controller
    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var toBuy = this;
        toBuy.items = ShoppingListCheckOffService.getToBuyItems();

        toBuy.buyItem = function (index) {
            ShoppingListCheckOffService.buyItem(index);
        };
    }

    //Already bought controller
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var bought = this;
        bought.items = ShoppingListCheckOffService.getBoughtItems();
    }

    //Shopping list service
    function ShoppingListCheckOffService() {
        var service = this;

        //Items to buy
        var toBuyItems = [
            { name: "Cookies", quantity: 10, pricePerItem: 2 },
            { name: "Chips", quantity: 5, pricePerItem: 3 },
            { name: "Soda", quantity: 3, pricePerItem: 4 },
            { name: "Bread", quantity: 2, pricePerItem: 5 },
            { name: "Milk", quantity: 1, pricePerItem: 6 }
        ];

        var boughtItems = [];

        service.getToBuyItems = function () {
            return toBuyItems;
        };

        service.getBoughtItems = function () {
            return boughtItems;
        };

        service.buyItem = function (index) {
            var item = toBuyItems.splice(index, 1)[0];
            boughtItems.push(item);
        };
    }

    //Custom currency filter $$$
    function CustomCurrencyFilter() {
        return function (input) {
            return "$$$" + parseFloat(input).toFixed(2);
        };
    }

})();
