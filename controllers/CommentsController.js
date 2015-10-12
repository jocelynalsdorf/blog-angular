app.controller("CommentsCtrl", function($scope, $stateParams, PostsFactory, UtilitiesFactory){
  $scope.post = UtilitiesFactory.findById(PostsFactory.posts, $stateParams.postId);
  $scope.addComment = function() {
    $scope.post.comments.push({ content: $scope.content });
    $scope.content = null;
  }

  $scope.deleteComment = function(comment) {
      var index = $scope.post.comments.indexOf(comment);
      $scope.post.comments.splice(index, 1);
    };
});