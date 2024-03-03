// SWIPER

const swiper = new Swiper('.swiper', {
  
    // pagination: {
    //   el: '.swiper-pagination',
    // },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  
    slidesPerView: 1,
    spaceBetween: 20,
    
    breakpoints: {
      1450: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      }
    }
  });