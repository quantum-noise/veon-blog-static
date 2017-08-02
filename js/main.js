window.addEventListener('load', function() {
  (function(){
    var posts = document.querySelectorAll('.blog-post');
    [].forEach.call(posts, function(post) {
      var link = post.querySelector('.blog-post__cut-link');
      link.addEventListener('click', (function(post){
        return function() {
          var span = post.querySelector('.blog-post__cut-content');
          span.classList.remove('blog-post__cut-content_invisible');
          var desc = post.querySelector('.blog-post__cut-description');
          desc.classList.add('blog-post__cut-description_invisible');
        }
      }(post)));
    });
  }());
});
