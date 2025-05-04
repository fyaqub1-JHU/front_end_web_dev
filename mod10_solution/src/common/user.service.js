(function () {
    'use strict';
    
    UserService.$inject = ['$window'];

    angular.module('common')
    .service('UserService', UserService);
    
    
    function UserService($window) {
        var service = this;
        var user = JSON.parse($window.localStorage.getItem('user')) || null;
        var favoriteItem = JSON.parse($window.localStorage.getItem('favoriteItem')) || null;
        var signedUp = false;
      
        service.saveUser = function(data, item, signed) {
          user = data;
          favoriteItem = item;
          signedUp = signed;
          $window.localStorage.setItem('user', JSON.stringify(user));
          $window.localStorage.setItem('favoriteItem', JSON.stringify(favoriteItem));
          $window.localStorage.setItem('haveData', JSON.stringify(signedUp));

        };
      
        service.getUser = function() {
          return user;
        };
      
        service.getFavoriteItem = function() {
          return favoriteItem;
        };
      
        service.getIsSignedUp = function() {
          return signedUp;
        };
      }
    })();
    