(() => {

  const carousel = document.querySelectorAll('.js-block-carousel');

  if (carousel.length) {
    import('./swiper-carousel')
      .then(({ SwiperCarousel }) => {
        const swiperCarousel = new SwiperCarousel(carousel);

        swiperCarousel.init();
      });
  }
})();
