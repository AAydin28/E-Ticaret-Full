import headerFunc from "./header.js";
import productFunc from "./products.js";
import searchFunc from "./search.js";


//* add product to lacalstorage  start

 (async function(){
   const photos = await fetch("../js/data.json");
   const data = await photos.json();
   data ? localStorage.setItem("products",JSON.stringify(data)) : [];
   productFunc();
   searchFunc(data);
})();

//* add product to lacalstorage  end


 //* add cartItems to lacalstorage  start
const cartItems = document.querySelector(".header-cart-count");
cartItems.innerHTML = localStorage.getItem("cart")
   ? JSON.parse(localStorage.getItem("cart")).length
   : "0";
//* add cartItems to lacalstorage  end