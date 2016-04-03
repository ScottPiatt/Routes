(function(){

var mainApp = angular.module('mainApp', ['ngRoute','ngMaterial','ngMessages']);

    mainApp.config(function($routeProvider){
      $routeProvider
        .when('/',{templateUrl:'partials/home.html'})
        .when('/card',{templateUrl:'partials/mdcard.html',controller:'cardController'})
        .when('/tabs',{templateUrl:'partials/tabs.html'})
        .when('/lookup',{templateUrl:'partials/lookup.html',controller:'LookCtrl'})
        .otherwise({redirectTo:'/'});
    });

}());
