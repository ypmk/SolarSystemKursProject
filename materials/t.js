const start__btn=document.querySelector(".start__btn button");
const info__box=document.querySelector(".info__box");
const exit__btn=info__box.querySelector(".buttons .quit");
const continue__btn=info__box.querySelector(".buttons .restart");

start__btn.onclick=()=>{
    info__box.classList.add("activeInfo");
}