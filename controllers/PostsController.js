app.controller("PostsCtrl", function($scope, PostsFactory){
 $scope.posts = PostsFactory.posts;
 $scope.PostsFactory = PostsFactory;

 $scope.deletePost = function(post) {
      var index = $scope.posts.indexOf(post);
      $scope.posts.splice(index, 1);
    };
});
