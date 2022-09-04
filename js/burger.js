const iconMenu = document.querySelector('.header__burger');
const menuNav = document.querySelector('.header__nav');

if(iconMenu) {
   iconMenu.addEventListener('click', function() {
      document.body.classList.toggle('_lock');
      iconMenu.classList.toggle('active');
      menuNav.classList.toggle('active');
   });
}