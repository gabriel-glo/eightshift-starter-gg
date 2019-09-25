import Swiper from 'swiper';

export class SwiperCarousel {
  constructor(defaultElements) {
    this.defaultElements = defaultElements;
    this.swiperElement = {};
  }

  init() {
    this.defaultElements.forEach((carouselElement) => {
      this.swiperElement = new Swiper(
        carouselElement,
        {
          slidesPerView: 1,
          spaceBetween: 30,
        }
      );
    });
  }
}
