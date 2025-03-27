//*  home sidebar start 
 const btnOpenSidebar = document.getElementById("btn-menu");
 const sidebar = document.getElementById("sidebar");
 const btnCloseSidebar = document.getElementById("close-sidebar")
 
 btnOpenSidebar.addEventListener("click", function() {
    sidebar.style.left="0"
 })

 btnCloseSidebar.addEventListener("click", function(){
     sidebar.style.left="-100%"
 });

 //! click outside start
  document.addEventListener("click", (event) =>{
    if(!event.composedPath().includes(sidebar) && !event.composedPath().includes(btnOpenSidebar)){
     sidebar.style.left="-100%"
    }  
  });

 //! click outside end
//*  home sidebar end


//? search modal start

const btnOpenSearch = document.getElementById("search-button");
const btnCloseSearch = document.getElementById("close-search")
const modalSearch = document.getElementById("modal-search");
const modalSearchWrapper = document.getElementsByClassName("modal-wrapper");
btnOpenSearch.addEventListener("click", ()=> {
   modalSearch.style.visibility = "visible";
   modalSearch.style.opacity = "1";
});

btnCloseSearch.addEventListener("click", ()=> {
    modalSearch.style.visibility = "hidden";
    modalSearch.style.opacity = "0";
 });


 //? click outside start 
 document.addEventListener("click", (e) => {
    if (
       !e.composedPath().includes(modalSearchWrapper[0]) &&
       e.composedPath().includes(modalSearch) // Burada composedPath() çağırılıyor!
    ) {
       modalSearch.style.visibility = "hidden";
       modalSearch.style.opacity = "0";
    }
 });
 //? click outside end 
//? search modal end


//! slider start 

let slideIndex = 1;
showSlides(slideIndex);

setInterval(()=>{
    showSlides(slideIndex += 1)
}, 4000);

function plusSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n){
    showSlides((slideIndex = n));
}

function showSlides(n) {
    const slides = document.getElementsByClassName("slider-item");
    const dots = document.getElementsByClassName("slider-dot");

    // Eğer slideIndex, sınırların dışına çıkarsa döngüyle başa/sona sar
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    // Tüm slaytları gizle
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Geçerli slaytı göster
    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex -1].className += " active";
}

//! slider end
