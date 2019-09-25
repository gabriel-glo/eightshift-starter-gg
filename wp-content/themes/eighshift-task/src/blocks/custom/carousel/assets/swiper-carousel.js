import Swiper from 'swiper';

export class SwiperCarousel {
  constructor(
    defaultElements = '.js-block-carousel',
    arrowPrev = '.js-block-carousel-prev',
    arrowNext = '.js-block-carousel-next',
    paginationElement = '.js-block-carousel-pagination',
  ) {
    this.defaultElements = defaultElements;
    this.defaultElements = defaultElements;
    this.arrowPrev = arrowPrev;
    this.arrowNext = arrowNext;
    this.paginationElement = paginationElement;
    this.swiperElement = {};
  }

  init() {
    this.defaultElements.forEach((carouselElement) => {
      this.swiperElement = new Swiper(
        carouselElement,
        {
          slidesPerView: 1,
          spaceBetween: 30,

          navigation: {
            nextEl: this.arrowNext,
            prevEl: this.arrowPrev,
          },
          pagination: {
            el: this.paginationElement,
            type: 'fraction',
          },
        }
      );
    });
  }
}
