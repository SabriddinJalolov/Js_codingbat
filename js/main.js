let elForm = document.querySelector(".site_form");
let elInput = document.querySelector(".site_input");
let elInput2 = document.querySelector(".site_input2");
let elBtn = document.querySelector(".site_btn");
let elOldidan = document.querySelector(".oldidan");
let elOrqadan = document.querySelector(".orqadan");

let texit = document.querySelector(".texit")


let arr = [""]

elBtn.addEventListener("click", function (evt) {
  evt.preventDefault();

  
  let elInputbox = elInput.value
  let elInputBoh = elInput2.value
  
  arr.unshift(elInputbox)
  arr.push(elInputBoh)

  elInput.value=""
  elInput2.value=""
  
  texit.innerHTML = [...arr]
});


elOldidan.addEventListener("click", function (evt) {
  evt.preventDefault();
  arr.shift()
  texit.innerHTML = [...arr]
  
});

elOrqadan.addEventListener("click", function (evt) {
  evt.preventDefault();
  arr.pop()
  texit.innerHTML = [...arr]
  

});





