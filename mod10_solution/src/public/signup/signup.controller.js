(function () {
    'use strict';
    
    angular.module('public')
    .controller('SignupController', SignupController);
    
    SignupController.$inject = ['MenuService', 'UserService'];
    function SignupController(MenuService, UserService) {
      var signupCtrl = this;
      signupCtrl.user = {};
      signupCtrl.message = "";
      signupCtrl.menuItemValid = null;
    
      signupCtrl.validateFavorite = function () {
        if (!signupCtrl.user.favorite) return;
    
        MenuService.getItem(signupCtrl.user.favorite)
          .then(function (item) {
            signupCtrl.menuItemValid = true;
            signupCtrl.favoriteItem = item;
          })
          .catch(function () {
            signupCtrl.menuItemValid = false;
          });
      };
    
      signupCtrl.submit = function () {
        if (signupCtrl.menuItemValid) {
          UserService.saveUser(signupCtrl.user, signupCtrl.favoriteItem, true);
          signupCtrl.message = "Your information has been saved.";
        }
      };
    }
    })();
    