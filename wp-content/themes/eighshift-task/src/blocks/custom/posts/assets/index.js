(() => {

  const latestPostsListings = document.querySelectorAll('.js-block-posts');

  if (latestPostsListings.length) {
    import('./load-more')
      .then(({ LoadMore }) => {
        Array.from(latestPostsListings).forEach((postsListing) => {

          const loadMorePosts = new LoadMore({
            element: postsListing,
            loadMoreElement: '.js-load-more',
            nonce: '#ajax-post-load-nonce',
            url: themeLocalization.ajaxurl,
            action: 'latest_posts',
          });

          if (loadMorePosts.loadMoreTrigger) {
            loadMorePosts.loadMoreTrigger.addEventListener('click', () => {
              loadMorePosts.loadPosts();
            });
          }
        });

      });
  }
})();
