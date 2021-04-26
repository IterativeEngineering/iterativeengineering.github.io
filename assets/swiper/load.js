window.addEventListener('DOMContentLoaded', () => {
    initSwiper();
});

function initSwiper() {
  const slideDesc = document.getElementsByClassName('slide-desc');
  let initSlide = 0;
  let prevIndex = 0;
  
  const testimonialSwiper = new Swiper('#testimonial-swiper', {
    direction: 'horizontal',
    loop: true,
    speed: 600,
    autoplay: {
      delay: 6500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
  
  const projectsSwiper = new Swiper('#projects-swiper', {
    init: false,
    direction: 'horizontal',
    loop: true,
    speed: 600,
    autoplay: {
      delay: 30000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  
  
  projectsSwiper.on('init', () => {
    slideDesc[initSlide].className += ' active';
    slideDesc[initSlide].removeAttribute('hidden');
  }) 
  
  projectsSwiper.init();
  
  projectsSwiper.on('realIndexChange', () => {
    slideDesc[projectsSwiper.realIndex].removeAttribute('hidden');

    // Force DOM rerender to allow animations to work on rerendered elements
    slideDesc[projectsSwiper.realIndex].clientWidth;

    slideDesc[projectsSwiper.realIndex].classList.add('active');
    
    slideDesc[prevIndex].classList.remove('active');
    slideDesc[prevIndex].setAttribute('hidden', true);

    prevIndex = projectsSwiper.realIndex;
  });
}

