app.controller("CommentsCtrl", function($scope, $stateParams, PostsFactory, UtilitiesFactory){
  $scope.post = UtilitiesFactory.findById(PostsFactory.posts, $stateParams.id);
  $scope.addComment = function() {
    $scope.post.comments.push({ content: $scope.content });
    $scope.content = null;
  }
});