var app = angular.module('blog-app', ['ui.router']);

app.config(function($stateProvider){
  $stateProvider.state("home", {
    url: "",
    views: {
      'header': {
      templateUrl: "partials/header.html",
      controller: 'HeadersCtrl'
      },

      'body': {
         templateUrl: "partials/home.html"
      },
    }
  });

  $stateProvider.state("posts", {
    url: "/posts",
    views: {
      'header': {
      templateUrl: "partials/header.html",
      controller: 'HeadersCtrl'
      },
      
      'body': {
         templateUrl: "partials/posts.html",
          controller: "PostsCtrl"
      },
    }
   
  });

  $stateProvider.state("posts.comments", {
    url: "/:postId",
    views: {
      'header': {
      templateUrl: "partials/header.html",
      controller: 'HeadersCtrl'
      },
      
      'body': {
         templateUrl: "partials/posts.comments.html",
          controller: "CommentsCtrl"
      },
    }
   
  });

});