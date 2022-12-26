// ***************** ПЛАВНЫЙ СКРОЛЛ ДО БЛОКА ***************** //

const headerLinks = document.querySelectorAll('.content-header__link[data-goto]');
if (headerLinks.length > 0) {
   headerLinks.forEach(headerLink => {
      headerLink.addEventListener("click", onHeaderLinkCkick);
   });

   function onHeaderLinkCkick(e) {
      const headerLink = e.target;
      if (headerLink.dataset.goto && document.querySelector(headerLink.dataset.goto)) {
         const gotoBlock = document.querySelector(headerLink.dataset.goto);
         const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;

         if (iconMenu.classList.contains('_active')) {
            document.body.classList.remove('_lock');
            iconMenu.classList.remove('_active');
            menuBody.classList.remove('_active');
         }

         window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth"
         });
         e.preventDefault();
      }
   }
};

// ***************** МЕНЮ БУРГЕР***************** //
const iconMenu = document.querySelector('.content-header__menu-icon');
const menuBody = document.querySelector('.content-header__list');
if (iconMenu) {
   iconMenu.addEventListener("click", function (e) {
      document.body.classList.toggle('_lock');
      iconMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
   });
}


// ***************** SWIPER ***************** //
// иницилизируется swiper
const swiper = new Swiper('.content-work__swiper', {
   // Optional parameters
   direction: 'horizontal',
   loop: true,

   // Navigation arrows
   navigation: {
      prevEl: '.content-work__swiper-button-prev',
      nextEl: '.content-work__swiper-button-next',
   },

   autoplay: {
      delay: 4000,
      stopOnLastSlide: false,
      disableOnInteraction: false
   },

   spaceBetween: 30,
   slidesPerView: 2,

   breakpoints: {
      1024: {
         slidesPerView: 2,
      },
      768: {
         slidesPerView: 1.5,
      },
      540: {
         slidesPerView: 1.2,
      },
      200: {
         slidesPerView: 1,
      }
   },
});
