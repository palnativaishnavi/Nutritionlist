var month = document.querySelector("#monthly");
var year = document.querySelector("#yearly");
var basic_price = document.querySelector("#basic-price");
var premium_price = document.querySelector("#premium-price");
var ultimate_price = document.querySelector("#ultimate-price");
var month_text = document.querySelector(".month-text");

var plan_text = document.querySelector("#plan-text");
var plan_text2 = document.querySelector("#plan-text2");
var plan_text3 = document.querySelector("#plan-text3");


month.addEventListener('click',function(){
    month.classList.add("togglebtn")
    year.classList.remove("togglebtn")

    basic_price.innerText = "$49"
    premium_price.innerText = "$79"
    ultimate_price.innerText = "$99"
    
     plan_text.innerText = "/month"
     plan_text2.innerText = "/month"
     plan_text3.innerText = "/month"

 
})
year.addEventListener('click',function(){
    month.classList.remove("togglebtn")
    year.classList.add("togglebtn")
  
    basic_price.innerText = "$100"
    premium_price.innerText = "$110"
    ultimate_price.innerText = "$120"

    plan_text.innerText = "/year"
    plan_text2.innerText = "/year"
    plan_text3.innerText = "/year"


})
