var s=document.querySelector(".slider"),y=document.querySelector(".slider__list"),d=document.querySelector(".slider__button-prev"),i=document.querySelector(".slider__button-next"),_=document.querySelector("slider__dot"),l=Array.from(s.querySelectorAll(".slider__item")),t=l.length,e=0;d.addEventListener("click",c);i.addEventListener("click",u);function c(){e=(e-1+t)%t,n()}function u(){e=(e+1)%t,n()}function n(){l.forEach((o,r)=>{r===e?o.style.display="block":o.style.display="none"})}export{n as updateSlider};
