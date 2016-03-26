var mainApp = angular.module('mainApp', ['ngRoute','ngMaterial','ngMessages']).
    config(['$routeProvider', function($routeProvider){
      $routeProvider
      .when('/',{templateUrl:'partials/home.html'})
      .when('/card',{templateUrl:'partials/mdcard.html',controller:'cardController'})
      .when('/tabs',{templateUrl:'partials/tabs.html'})
      .otherwise({redirectTo:'/'})

    }]);

    mainApp.controller('cardController', function($scope, $mdDialog) {
      $scope.dialog = function(){
        $mdDialog.show(
          $mdDialog.alert({
            ok: 'Close'
          })
        );
      }
      $scope.contacts = [
        {
          name: 'Tim',
          phone: '123-456-7889',
          country: 'USA'
        },
        {
          name: 'Sam',
          phone: '123-456-9876',
          country: 'USA'
        },
        {
          name: 'Scott',
          phone: '187-530-9211',
          country: 'USA'
        },
        {
          name: 'Robin',
          phone: '187-756-9211',
          country: 'USA'
        },
        {
          name: 'Bill',
          phone: '432-530-9211',
          country: 'USA'
        },
      ];
    });
