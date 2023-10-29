
const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 10,
    grabCursor: true,
    direction: 'horizontal',
    loop: true,
    breakpoints: {
        490:{
            slidesPerView:2,
        },

        768: {
            slidesPerView:3,
            spaceBetween: 3,
        },

        1024: {
            slidesPerView:4,
            spaceBetween: 0,
            
        },

        1200: {
            slidesPerView:5,
            spaceBetween: 10,
        }
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});