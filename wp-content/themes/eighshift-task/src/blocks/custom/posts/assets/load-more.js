export class LoadMore {

  constructor(options = {
    element: document.querySelector('.js-block-posts'),
    loadMoreElement: '.js-load-more',
    nonce: '#ajax-post-load-nonce',
    url: themeLocalization.ajaxurl,
    action: 'latest_posts',
  }) {
    this.element = options.element;
    this.loadMoreTrigger = this.element.parentNode.querySelector(options.loadMoreElement);
    this.nonce = this.element.parentNode.querySelector(options.nonce);

    this.postNumber = parseInt(this.element.getAttribute('data-post-number'), 10);

    this.query = this.loadMoreTrigger.getAttribute('data-query');
    this.page = parseInt(this.loadMoreTrigger.getAttribute('data-page'), 10);
    this.maxPage = parseInt(this.loadMoreTrigger.getAttribute('data-max-pages'), 10);
    this.parentClass = this.loadMoreTrigger.getAttribute('data-parent-class');

    this.url = options.url;

    this.action = options.action;
  }

  async loadPosts() {

    const data = {
      action: this.action,
      nonce: this.nonce.value,
      query: this.query,
      page: this.page,
      postNumber: this.postNumber,
      parentClass: this.parentClass,
    };

    await fetch(this.url, {
      method: 'POST',
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(data).toString(),
    }).then((response) => response.json())
      .then((response) => {
        if (!response.success) {
          throw Error(response.data);
        }

        this.page++;
        if (this.page === this.maxPage) {
          this.loadMoreTrigger.style.display = 'none';
        }
        this.element.insertAdjacentHTML('beforeend', response.posts);

      }).catch((error) => {
        console.error(error);
      });


  }
}
