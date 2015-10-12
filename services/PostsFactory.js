app.factory('PostsFactory', function PostsFactory(){
  //this is where we will make our array of posts & then add comments to it
  var factory = {};
  factory.posts = [];
  factory.addPost = function() {
    factory.posts.push({title: factory.title, text: factory.text, id: factory.posts.length + 1, comments: [] });
    factory.title = null;
    factory.text = null;
  }
  return factory;

});