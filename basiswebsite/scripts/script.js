// JavaScript Document
var hamburgerMenuKnop = document.querySelector ("header div:nth-of-type(2) > button");
var hamburgerMenuZichtbaar = document.querySelector ("header div:nth-of-type(2) nav");
var winkelwagen = document.querySelector("header div:nth-of-type(2) > ul li:nth-of-type(2)");
var element = document.querySelector("header p");
var zoeken = document.querySelector("header div:nth-of-type(2) ul li button:first-of-type");
var zoekbalk = document.querySelector("header div:nth-of-type(2) ul li form input");
var imgElement = document.querySelector(".afbeeldingveranderen");

hamburgerMenuKnop.addEventListener("click", function(){
    hamburgerMenuZichtbaar.classList.toggle("hamburgermenuzichtbaar");
})

winkelwagen.addEventListener("mouseover", function(){
  element.classList.add("anders");
})

winkelwagen.addEventListener("mouseout", function(){
  element.classList.remove("anders");
})


zoeken.addEventListener("click", function(){
  zoekbalk.classList.toggle("zichtbaar");
})


imgElement.addEventListener("mouseover", function(){
    imgElement.src = "images/13.0218.03blakeskuster5.jpg";
})

imgElement.addEventListener("mouseout", function(){
    imgElement.src = "images/13.0216.03blakeskuster_1.jpg";
})

