import '@babel/polyfill';

export class LoadMore {

  constructor(element) {
    this.element = element;
    this.loadMoreTrigger = this.element.parentNode.querySelector('.js-load-more');
    this.nonce = this.element.parentNode.querySelector('#ajax-post-load-nonce');

    this.postNumber = parseInt(this.element.getAttribute('data-post-number'), 10);

    this.query = this.loadMoreTrigger.getAttribute('data-query');
    this.page = parseInt(this.loadMoreTrigger.getAttribute('data-page'), 10);
    this.maxPage = parseInt(this.loadMoreTrigger.getAttribute('data-max-pages'), 10);
    this.parentClass = this.loadMoreTrigger.getAttribute('data-parent-class');

    this.adminAjaxUrl = themeLocalization.ajaxurl; // eslint-disable-line no-undef

    this.action = 'latest_posts';
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

    await fetch(
      this.adminAjaxUrl,
      {
        method: 'POST',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data).toString(),
      }
    ).then((response) => {

      if (!response.ok) {
        throw Error('There was an error with the request');
      }

      this.page++;
      if (this.page === this.maxPage) {
        this.loadMoreTrigger.style.display = 'none';
      }

      return response.json();
    }).then((postList) => {
      this.element.insertAdjacentHTML('beforeend', postList.posts);
    }).catch((error) => {
      console.error(error);
    });


  }
}
