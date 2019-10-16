(() => {

  const latestPostsListings = document.querySelectorAll('.js-block-posts');

  if (latestPostsListings.length) {
    import('./ajax-load')
      .then(({ AjaxLoad }) => {
        Array.from(latestPostsListings).forEach((postsListing) => {

          const latestPostsAjax = new AjaxLoad(postsListing);

          if (latestPostsAjax.loadMore) {
            latestPostsAjax.loadMore.addEventListener('click', () => {
              latestPostsAjax.loadPosts();
            });
          }
        });

      });
  }
})();
