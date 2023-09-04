let signUp=document.getElementById("signUp");
let signIn=document.getElementById("signIn");
var nameInput=document.getElementById("nameInput");
let title=document.getElementById("title");

function activar(){
    nameInput.style.maxHeight="0";
    title.innerHTML="Login";
    signUp.classList.add("disable");
    signIn.classList.remove("disable");
}

function desactivar(){
    nameInput.style.maxHeight="60px";
    title.innerHTML="Registro";
    signUp.classList.remove("disable");
    signIn.classList.add("disable");
}

console.log("holaa")