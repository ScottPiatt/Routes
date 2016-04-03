(function(){

var mainApp = angular.module('mainApp');

var LookCtrl = function($scope, $http){
  var onUserComplete = function(response){
    $scope.user = response.data;
    $http.get($scope.user.repos_url)
      .then(onRepos, onError);
  };
  var onError = function(reason){
    $scope.error = "Could not fetch the data.";


  };

  var onRepos = function(response){
    $scope.repos = response.data;
  };

  $scope.search = function(username){
    $http.get("https://api.github.com/users/" + username)
      .then(onUserComplete, onError);
  };

  $scope.username = "angular";
  $scope.message = "GitHub Profile Lookup";
  $scope.repoSortOrder = "-stargazers_count";

};


mainApp.controller('LookCtrl', ['$scope', '$http', LookCtrl]);





}());
