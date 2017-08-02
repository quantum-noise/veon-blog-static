window.addEventListener('load', function () {

  (function () {
    var posts = document.querySelectorAll('.blog-post');
    [].forEach.call(posts, function (post) {
      var link = post.querySelector('.blog-post__cut-link');
      if (!link) {
        return;
      }
      link.addEventListener('click', (function (post) {
        return function () {
          var span = post.querySelector('.blog-post__cut-content');
          span.classList.remove('blog-post__cut-content_invisible');
          var desc = post.querySelector('.blog-post__cut-description');
          desc.classList.add('blog-post__cut-description_invisible');
        }
      }(post)));
    });
  }());

  (function () {
    var playButtons = document.querySelectorAll('.play-button');

    var video = document.getElementById('video');
    var closeButton = document.getElementById('video__close');
    var videoPlayer = document.getElementById('video__player');

    [].forEach.call(playButtons, function (btn) {
      btn.addEventListener('click', function(event) {
        event.preventDefault();
        video.classList.add('video_visible');
        setTimeout(function() {
          videoPlayer.setAttribute('src', event.target.getAttribute('href'));
          videoPlayer.play();
        }, 1000);
      });
    });

    closeButton.addEventListener('click', function () {
      video.classList.remove('video_visible');
      videoPlayer.pause();
    });
  })();

});
