const desktopMenu = document.querySelector(".desktop-menu");
const menuEmail = document.querySelector(".email");
const mobileMenu = document.querySelector(".mobile-menu");
const iconMenuMobile = document.querySelector(".icon-menu-mobile");
const myOrder = document.querySelector(".my-order");
const shoppingCart = document.querySelector(".shopping-cart");

menuEmail.addEventListener("click", changeMenu);

function changeMenu() {
  // Lo que hace esta funcion es sacar o ponerle(toggle) la clase(classList) que le indiquemos:
  desktopMenu.classList.toggle("inactive");
  myOrder.classList.add("inactive");
}
iconMenuMobile.addEventListener("click", changeMenuMobile);

function changeMenuMobile() {
  // Lo que hace esta funcion es sacar o ponerle(toggle) la clase(classList) que le indiquemos:
  mobileMenu.classList.toggle("inactive");
  myOrder.classList.add("inactive");
}

shoppingCart.addEventListener("click", changeShoppingCart);

function changeShoppingCart() {
  // Lo que hace esta funcion es sacar o ponerle(toggle) la clase(classList) que le indiquemos:
  myOrder.classList.toggle("inactive");
  desktopMenu.classList.add("inactive");
  mobileMenu.classList.add("inactive");
}
