'use strict'

let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let passwordElement = document.querySelector("#password");

let containerPassoword = document.querySelector("#container-password");

let charset = "1234859670!@#$%^&*?abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
let newPassword = "";

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function(){
    sizePassword.innerHTML = this.value;
}

function generatePassword(){
    let pass = "";
    for(let i = 0, n = charset.length; i < sliderElement.value; i++){
        pass += charset.charAt(Math.floor(Math.random() * n));
    }

    containerPassoword.classList.remove("hide")
    passwordElement.innerHTML = pass
    newPassword = pass;
}


function copyPassword()
{
    alert("Senha copiada");
    navigator.clipboard.writeText(newPassword);
}