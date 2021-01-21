var testimonialSwiper = new Swiper('#testimonial-swiper', {
  direction: 'horizontal',
  loop: true,
  speed: 600,
  autoplay: {
    delay: 6500,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

var projectsSwiper = new Swiper('#projects-swiper', {
  direction: 'horizontal',
  loop: true,
  speed: 600,
  autoplay: {
    delay: 30000,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});