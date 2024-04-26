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

// подготовка элементов карты для работы когда JS включен и нет сбоя
onLoadJs(
  '.map',
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

const swiper = new Swiper('.promo__slider', {
  loop: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

const map = L.map('map', {
  center: [59.96831, 30.31748],
  zoomControl: false,
  zoom: 20
});

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: './images/map/map-pin.svg',
  iconSize: [38, 50],
  iconAnchor: [4, 20],
});

const mainPinMarker = L.marker({
  lat: 59.96831,
  lng: 30.31748,
}, {
  icon: mainPinIcon,
},);

mainPinMarker.addTo(map);
