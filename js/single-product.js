import {thumbsActiveFunc} from "./single-product/thumbsActive.js"
import {singleThums} from "./glide.js"
import zoomFunc from "./single-product/zoom.js"
import colorsFunc from "./single-product/colors.js"
import valuesFunc from "./single-product/values.js"


const productId = localStorage.getItem("productId") 
    ? JSON.parse(localStorage.getItem("productId")) 
    : localStorage.setItem("productId", JSON.stringify(1));

    const products = localStorage.getItem("products") 
    ? JSON.parse(localStorage.getItem("products")) 
    : localStorage.setItem("products", JSON.stringify([]));

    const findProduct = products.find((item) => item.id === 
Number(productId));


const productTitle = document.querySelector(".product-title");

productTitle.innerHTML = findProduct.name;


const newPriceDOM = document.querySelector(".new-price");
const oldPriceDOM = document.querySelector(".old-price");

newPriceDOM.innerHTML = findProduct.price.newPrice.toFixed(2);
oldPriceDOM.innerHTML = findProduct.price.oldPrice.toFixed(2);


//! product galery 

const singleImageDOM = document.getElementById("single-image");

singleImageDOM.src = findProduct.img.singleImage;


const galleryThumbs = document.querySelector(".gallery-thumbs");
let result = "";
findProduct.img.thumbs.forEach((item) => {
     result += `
  <li class="glide__slide">
    <img
        src="${item}"
        alt=""
        class="img-fluid"
    />
    </li>
     `;
});
galleryThumbs.innerHTML = result;
singleThums();
thumbsActiveFunc();


const productThumbs = document.querySelectorAll(".product-thumb .glide__slide img");

productThumbs[0].classList.add("active");

