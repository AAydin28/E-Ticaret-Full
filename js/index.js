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

