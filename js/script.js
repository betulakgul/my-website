const searchForm=document.querySelector(".search-form");  /*index.html deki search-form classına ulaştık */
const cartItem=document.querySelector(".cart-items-container"); 
const navbar=document.querySelector(".navbar"); 

//!buttons
const searchBtn=document.querySelector("#search-btn");  /*index.html deki search-btn id sine ulaştık */
const cartBtn=document.querySelector("#cart-btn");
const menuBtn=document.querySelector("#menu-btn");

searchBtn.addEventListener("click", function(){
    searchForm.classList.toggle("active"); /*toggle ile arama butonuna basıldığında arama çubuğu açılıp kapanabilecek (toggle yerine add yapsaydık arama çubuğu sadece açılırdı kapanmazdı)*/
    document.addEventListener("click", function(e){
     if(
        !e.composedPath().includes(searchBtn) &&  /*arama butonu ve arama çubuğu harici bir yere basıldığında arama çubuğunu kaldır */
        !e.composedPath().includes(searchForm)
    ){ 
        searchForm.classList.remove("active");
     }
    });

});

cartBtn.addEventListener("click", function(){
    cartItem.classList.toggle("active"); 
    document.addEventListener("click", function(e){
     if(
        !e.composedPath().includes(cartBtn) &&  
        !e.composedPath().includes(cartItem)
    ){ 
        cartItem.classList.remove("active");
     }
    });

});

menuBtn.addEventListener("click", function(){
    navbar.classList.toggle("active"); 
    document.addEventListener("click", function(e){
     if(
        !e.composedPath().includes(menuBtn) &&  
        !e.composedPath().includes(navbar)
    ){ 
        navbar.classList.remove("active");
     }
    });

});