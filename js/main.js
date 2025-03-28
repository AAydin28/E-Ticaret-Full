
import headerFunc from "./header.js";
import productFunc from "./produts.js";


//* add product to lacalstorage 

 async function getData(){
   const photos = await fetch("../js/data.json");
   const data = await photos.json();
   data ? localStorage.setItem("products",JSON.stringify(data)) : [];
}

getData();

const products = localStorage.getItem("products");