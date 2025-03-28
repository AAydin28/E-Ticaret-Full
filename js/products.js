import { product1, product2 } from "./glide.js";

function productsFunc() {
  const products = localStorage.getItem("products")
    ? JSON.parse(localStorage.getItem("products"))
    : [];
  
  // Her iki carousel için container'ları ayırıyoruz
  const productsContainer1 = document.getElementById("product-list1");
  const productsContainer2 = document.getElementById("product-list2");

  let results = "";
  products.forEach((item) => {
    results += `
      <li class="product-item glide__slide">
        <div class="product-image">
          <a href="#">
            <img src="${item.img.singleImage}" alt="" class="img1">
            <img src="${item.img.thumbs[1]}" alt="" class="img2">
          </a>
        </div>
        <div class="product-info">
          <a href="#" class="product-title">${item.name}</a>
          <ul class="product-star">
            <li><i class="bi bi-star-fill"></i></li>
            <li><i class="bi bi-star-fill"></i></li>
            <li><i class="bi bi-star-fill"></i></li>
            <li><i class="bi bi-star-fill"></i></li>
            <li><i class="bi bi-star-half"></i></li>
          </ul>
          <div class="product-prices">
            <strong class="new-price">$${item.price.newPrice.toFixed(2)}</strong>
            <span class="old-price">$${item.price.oldPrice.toFixed(2)}</span>
          </div>
          <span class="product-discount">-${item.discount}%</span>
          <div class="product-links">
            <button><i class="bi bi-basket-fill"></i></button>
            <button><i class="bi bi-heart-fill"></i></button>
            <a href="#"><i class="bi bi-eye-fill"></i></a>
            <a href="#"><i class="bi bi-share-fill"></i></a>
          </div>
        </div>
      </li>
    `;
  });

  // Ürünleri her iki listeye de ekle
  productsContainer1.innerHTML= results;
  productsContainer2.innerHTML= results;

  // productsContainer1.insertAdjacentHTML('beforeend', results);
  // productsContainer2.insertAdjacentHTML('beforeend', results);


  // Glide.js carousel'larını başlat
  product1();  // İlk carousel
  product2();  // İkinci carousel
}

// productsFunc fonksiyonunu dışa aktar
export default productsFunc;
