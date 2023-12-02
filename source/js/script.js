const navToggle = document.querySelector('.nav__toggle');
const navMenuDropdown = document.querySelector('.nav__menu-dropdown');
const img = navToggle.querySelector('img');
const closeImgSrc = "../img/svg/navigation-frame-2.svg";
const openImgSrc = "../img/svg/icon-menu.svg";

navToggle.addEventListener('click', () => {
  navMenuDropdown.classList.toggle('nav__menu-dropdown--opened');
  if (navMenuDropdown.classList.contains('nav__menu-dropdown--opened')) {
    img.src = closeImgSrc;
  } else {
    img.src = openImgSrc;
  }
});




