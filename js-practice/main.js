const desktopMenu = document.querySelector(".desktop-menu");
const menuEmail = document.querySelector(".email");
const mobileMenu = document.querySelector(".mobile-menu");
const iconMenuMobile = document.querySelector(".icon-menu-mobile");
const myOrder = document.querySelector(".my-order");
const shoppingCart = document.querySelector(".shopping-cart");
const productContainer = document.querySelector(".product-container");
const productAside = document.querySelector(".product-aside");
const productAsideIcon = document.querySelector(".product-close");

menuEmail.addEventListener("click", changeMenuEmail);
iconMenuMobile.addEventListener("click", changeMenuMobile);
shoppingCart.addEventListener("click", changeShoppingCart);
productAsideIcon.addEventListener("click", quitAside);

function changeMenuEmail() {
  const isMyOrderClosed = myOrder.classList.contains("inactive");
  const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");
  const isProductDetailClosed = productAside.classList.contains("inactive");

  if (!isMyOrderClosed || !isProductDetailClosed) {
    myOrder.classList.add("inactive");
    productAside.classList.add("inactive");
    if (isDesktopMenuClosed) {
      desktopMenu.classList.toggle("inactive");
    }
  } else {
    desktopMenu.classList.toggle("inactive");
  }
}

function changeMenuMobile() {
  const isMyOrderClosed = myOrder.classList.contains("inactive");
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
  const isProductDetailClosed = productAside.classList.contains("inactive");

  // desktopMenu.classList.toggle("inactive");
  if (!isMyOrderClosed || !isProductDetailClosed) {
    myOrder.classList.add("inactive");
    productAside.classList.add("inactive");
    if (isMobileMenuClosed) {
      mobileMenu.classList.toggle("inactive");
    }
  } else {
    mobileMenu.classList.toggle("inactive");
  }

  // mobileMenu.classList.toggle("inactive");
  // myOrder.classList.add("inactive");
  // productContainer.classList.add("inactive");
  // productAside.classList.add("inactive");
}

function changeShoppingCart() {
  // Lo que hace esta funcion es sacar o ponerle(toggle) la clase(classList) que le indiquemos:
  const isMyOrderClosed = myOrder.classList.contains("inactive");
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
  const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");
  const isProductDetailClosed = productAside.classList.contains("inactive");
  // desktopMenu.classList.toggle("inactive");
  if (!isMobileMenuClosed || !isDesktopMenuClosed || !isProductDetailClosed) {
    mobileMenu.classList.add("inactive");
    desktopMenu.classList.add("inactive");
    productAside.classList.add("inactive");
    if (isMyOrderClosed) {
      myOrder.classList.toggle("inactive");
      // desktopMenu.classList.add("inactive");
    }
  } else {
    myOrder.classList.toggle("inactive");
  }

  // myOrder.classList.toggle("inactive");
  // desktopMenu.classList.add("inactive");
  // mobileMenu.classList.add("inactive");
  // productAside.classList.add("inactive");
}
function showAside() {
  const isMyOrderClosed = myOrder.classList.contains("inactive");
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
  const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");

  if (!isDesktopMenuClosed || !isMobileMenuClosed || !isMyOrderClosed) {
    myOrder.classList.add("inactive");
    mobileMenu.classList.add("inactive");
    desktopMenu.classList.add("inactive");
    productAside.classList.remove("inactive");
  } else {
    productAside.classList.remove("inactive");
  }
}
function quitAside() {
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
