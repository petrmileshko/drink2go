/** Милешко Петр
 * Функция для инициализации мобильной версии меню с кнопкой типа бургер
 */
function menuMobile(container, menu, control, item) {
  const containerElement = document.querySelector(container.element);
  const menuElement = document.querySelector(menu.element);
  const controlElement = document.querySelector(control.element);

  return function () {
    if (containerElement !== null && menuElement !== null && controlElement !== null) {

      controlElement.addEventListener('click', (e) => {
        e.preventDefault();
        containerElement.classList.toggle(container.activation);
        menuElement.classList.toggle(menu.activation);
        controlElement.classList.toggle(control.activation);
      });

      menuElement.addEventListener('click', (e) => {
        if (!e.target.classList.contains(item.activation) && e.target.classList.contains(item.element)) {

          if (controlElement.classList.contains(control.activation)) {
            controlElement.classList.remove(control.activation);
            containerElement.classList.remove(container.activation);
            menuElement.classList.remove(menu.activation);
          }
        }
      });
    }
  };
}

export default menuMobile;
