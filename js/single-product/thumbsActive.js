export function thumbsActiveFunc(){
    const thumbs = document.querySelectorAll(".gallery-thumbs .img-fluid");
    const singleImage = document.querySelector("#single-image");
    thumbs.forEach((item)=> {
     item.addEventListener("click", function(){
        thumbs.forEach((İmage)=>{
            İmage.classList.remove("active");
            });
       singleImage.src= item.src;      
       item.classList.add("active");
     });
    });
}
