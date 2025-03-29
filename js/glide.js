const productsContainer1 = document.getElementById("product-list1");
const productsContainer2 = document.getElementById("product-list2");

export function product1(){
    const config = {
        type: "carousel",
        perView: 4,
        gap: 20,
        autoplay:3000,
        bound: true,
        breakpoints: {
            992:{
                perView: 3,
            },
            768:{
                perView: 2,
            },
            576:{
                perView: 1,
            },
        }
    }
    
    const productsContainer1 = document.getElementById("product-list1")  && new Glide('.product-carousel', config).mount();

}
export function product2() {
    const config2 = {
        type: "carousel",
        perView: 4,
        gap: 20,
        autoplay: 3000,
        breakpoints: {
            992: {
                perView: 3,
            },
            768: {
                perView: 2,
            },
            576: {
                perView: 1,
            },
        }
    }

    // Second carousel initialization

    const productsContainer2 = document.getElementById("product-list2") && new Glide('.product-carousel2', config2).mount();

}