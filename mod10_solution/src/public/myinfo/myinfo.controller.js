(function () {
    'use strict';
    
    MyInfoController.$inject = ['UserService', 'userInfo'];
    angular.module('public')
    .controller('MyInfoController', MyInfoController);
    
    
    function MyInfoController(UserService, userInfo) {
      var myInfoCtrl = this;
    
      myInfoCtrl.user = userInfo;
      myInfoCtrl.favoriteItem = UserService.getFavoriteItem();
      myInfoCtrl.signedUp = UserService.getIsSignedUp();
    
      // Extracts the directory name from short name
      myInfoCtrl.favoriteItem.image_url = 'images/menu/' + UserService.getFavoriteItem().short_name.split(/[0-9]/)[0] + '/' + UserService.getFavoriteItem().short_name + '.jpg';

    }
})();
    