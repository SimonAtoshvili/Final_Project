
let mobileMenu = document.querySelector("nav");
let burger = document.querySelector(".fa-bars");
let mark = document.querySelector(".fa-less-than");
let shopping = document.querySelector(".fa-cart-shopping");


burger.addEventListener("click", function() {
    mobileMenu.classList.add("show1");
    shopping.classList.add("show2");
    mark.classList.add("show3")
    burger.style.display = "none";
}) 

mark.addEventListener("click", function(){
    mobileMenu.classList.remove("show1");
    shopping.classList.remove("show2");
    mark.classList.remove("show3");
    burger.style.display = "block"
})