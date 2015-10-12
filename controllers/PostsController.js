app.controller("PostsCtrl", function($scope, PostsFactory){
 $scope.posts = PostsFactory.posts;
 $scope.PostsFactory = PostsFactory;
});
