const desktopMenu = document.querySelector(".desktop-menu");
const menuEmail = document.querySelector(".email");
const mobileMenu = document.querySelector(".mobile-menu");
const iconMenuMobile = document.querySelector(".icon-menu-mobile");
const myOrder = document.querySelector(".my-order");
const shoppingCart = document.querySelector(".shopping-cart");
const productContainer = document.querySelector(".product-container");
const productAside = document.querySelector(".product-aside");
const productAsideIcon = document.querySelector(".product-close");

menuEmail.addEventListener("click", changeMenu);
iconMenuMobile.addEventListener("click", changeMenuMobile);
shoppingCart.addEventListener("click", changeShoppingCart);
productAsideIcon.addEventListener("click", quitAside);

function changeMenu() {
  // Lo que hace esta funcion es sacar o ponerle(toggle) la clase(classList) que le indiquemos:
  desktopMenu.classList.toggle("inactive");
  myOrder.classList.add("inactive");
  // productAside.classList.toggle("inactive");
}

function changeMenuMobile() {
  // Lo que hace esta funcion es sacar o ponerle(toggle) la clase(classList) que le indiquemos:
  mobileMenu.classList.toggle("inactive");
  myOrder.classList.add("inactive");
  productContainer.classList.add("inactive");
  productAside.classList.add("inactive");
}

function changeShoppingCart() {
  // Lo que hace esta funcion es sacar o ponerle(toggle) la clase(classList) que le indiquemos:
  myOrder.classList.toggle("inactive");
  desktopMenu.classList.add("inactive");
  mobileMenu.classList.add("inactive");
  productAside.classList.add("inactive");
}
function showAside() {
  console.log("funcionando");
  productAside.classList.remove("inactive");
}
function quitAside() {
  console.log("funcionando");
  productAside.classList.add("inactive");
}
// en esta parte, vamos a maquetar los objetos desde JS:
// Empezamos creando un array en donde le vamos a dar las caracteristicas de los objetos:
const productList = [];
productList.push({
  name: "CRF",
  price: 2000,
  img: "./assets/imgs/1.jpg",
});
productList.push({
  name: "CBR",
  price: 7600,
  img: "./assets/imgs/2.jpg",
});
productList.push({
  name: "R1",
  price: 5000,
  img: "./assets/imgs/3.jpg",
});
productList.push({
  name: "Otra",
  price: 3000,
  img: "./assets/imgs/4.jpg",
});
// Aca, por cada producto que haya en el array productList, va a crearlos:
for (product of productList) {
  const productCard = document.createElement("div");
  productCard.classList.add("product-card");
  productContainer.appendChild(productCard);

  const productImg = document.createElement("img");
  productImg.classList.add("card-image");
  productImg.setAttribute("src", product.img);
  productImg.addEventListener("click", showAside);
  const productInfo = document.createElement("div");
  productInfo.classList.add("product-info");

  const productInfoDiv = document.createElement("div");
  const productPrice = document.createElement("p");
  productPrice.innerText = "$" + product.price;
  const productName = document.createElement("p");
  productName.innerText = product.name;
  productInfoDiv.append(productPrice, productName);

  const productFigure = document.createElement("figure");
  const productImgCart = document.createElement("img");
  productImgCart.setAttribute(
    "src",
    "./assets/Platzi_YardSale_Icons/bt_add_to_cart.svg"
  );
  productFigure.appendChild(productImgCart);

  productInfo.append(productInfoDiv, productFigure);

  productCard.append(productImg, productInfo);

  productContainer.appendChild(productCard);
}
