(() => {

  const latestPostsListings = document.querySelectorAll('.js-block-posts');

  if (latestPostsListings.length) {
    import('./load-more')
      .then(({ LoadMore }) => {
        Array.from(latestPostsListings).forEach((postsListing) => {

          const loadMorePosts = new LoadMore(postsListing);

          if (loadMorePosts.loadMoreTrigger) {
            loadMorePosts.loadMoreTrigger.addEventListener('click', () => {
              loadMorePosts.loadPosts();
            });
          }
        });

      });
  }
})();
