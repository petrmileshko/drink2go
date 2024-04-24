/* в этот файл добавляет скрипты*/
import {
  onLoadJs
} from './utils/utils.js';
import menuMobile from './menu/menu.js';

// подготовка элементов шапки сайта для работы когда JS включен и нет сбоя
onLoadJs(
  '.page__header',
  '--nojs'
)();

// Инициализация меню для мобильной версии
menuMobile({
  element: '.page__header',
  activation: 'page__header--opened'
}, {
  element: '.menu',
  activation: 'menu--opened'
}, {
  element: '.burger__icon',
  activation: 'burger__icon--opened'
}, {
  element: 'menu__link',
  activation: 'menu__link--current'
})();

const swiper = new Swiper(".promo__slider", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
