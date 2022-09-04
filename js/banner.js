let offset = 0;
let width;

const bannerSlider = document.querySelector('.banner__slider');
const arroyLeft = document.querySelector('.arroy_left');
const arroyRight = document.querySelector('.arroy_right');
const banner = document.querySelector('.banner');
const content = document.querySelectorAll('.slider__content');
const slider = document.querySelector('.banner__slider');


function init() {
   width = banner.offsetWidth;
   slider.style.width = width*content.length + 'px';
   content.forEach(i => {
      i.style.width = width + 'px';
      i.style.height = 'auto';
   });
}

window.addEventListener('resize', init);
init()

arroyLeft.addEventListener('click', function () {
   offset--;
   if (offset < 0) {
      offset = content.length - 1;
   }
   slide();
})
arroyRight.addEventListener('click', function () {
   offset++;
   if (offset >= content.length) {
      offset = 0;
   }
   slide();
})

function slide() {
   bannerSlider.style.transform = 'translate(-'+offset*width+'px)'; 
}




