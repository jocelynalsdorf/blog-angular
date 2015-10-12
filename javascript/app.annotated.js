var app = angular.module('blog-app', ['ui.router']);

app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider){
  $stateProvider.state("home", {
    url: "",
    templateUrl: "partials/home.html"
  });
}]);