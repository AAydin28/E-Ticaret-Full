
import headerFunc from "./header.js";
import productFunc from "./products.js";


//* add product to lacalstorage 

 async function getData(){
   const photos = await fetch("../js/data.json");
   const data = await photos.json();
   data ? localStorage.setItem("products",JSON.stringify(data)) : [];
}

getData();
productFunc();
const products = localStorage.getItem("products");