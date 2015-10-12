var app = angular.module('blog-app', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
  $stateProvider.state("home", {
    url: "",
    templateUrl: "partials/home.html"
  });

  $stateProvider.state("posts", {
    url: "/posts",
    templateUrl: "partials/posts.html",
    controller: "PostsCtrl"
  });
});