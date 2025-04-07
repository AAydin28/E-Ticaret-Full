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

//! modal dialog start
const modalDialogDOM = document.querySelector(".modal-dialog");
const modalContentDOM = document.querySelector(".modal-dialog .modal-content");
const btnCloseDialog = document.querySelector(".modal-dialog .modal-close");

btnCloseDialog.addEventListener("click", function () {
  modalDialogDOM.classList.remove("show");
});

document.addEventListener("click", (e) => {
  if (!e.composedPath().includes(modalContentDOM)) {
    modalDialogDOM.classList.remove("show");
  }
});

setTimeout(() => {
  modalDialogDOM.classList.add("show");
}, 3000);
//! modal dialog end