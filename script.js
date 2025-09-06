let slideIndex=1;
showSlides(slideIndex);

//next control
const plusSlides=(n)=>{
    showSlides(slideIndex=n);
}
//dots image control
const currentSlide=(n)=>{
    showSlides(slideIndex=n);
}

const showSlides=(n)=>{
    let i;
    let slides=document.getElementsByClassName("mySlide");
    let dots=document.getElementsByClassName("dot");
    if(n>slides.length){slideIndex=1}
for(i=0;i<slides.length;i++){
    slides[i].style.display="none";
}
}