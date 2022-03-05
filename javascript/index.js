const menuToggle = document.querySelector(".header-toggle");
const menu = document.querySelector(".header-menu");
const close = document.querySelector(".toggle-close");
const explandClass = "is-expand";
menuToggle.addEventListener("click", function() {
    menu.classList.add(explandClass);
});
close.addEventListener("click",function(){
    menu.classList.remove(explandClass);
})


const wedoClick = document.querySelectorAll(".wedo-item");
const active = "is-active";
let count = 0;
for(var i = 0; i<wedoClick.length; i++) {
    wedoClick[i].addEventListener("click",function() {

        const currentToggle = document.querySelector(".wedo-item.is-active");
        if(currentToggle && currentToggle!== this) {
            currentToggle.classList.remove(active);
        }
        if(this.classList.contains(active)) {
            this.classList.remove(active);
        } else {
            this.classList.add(active);
        }
    }) 
}
//slick slider
$(document).ready(function(){
    $('.quote-container').slick({
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
    });
  });
