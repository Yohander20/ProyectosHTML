const boton=document.getElementById("boton")
const h1=document.getElementById("h1")
const h2=document.getElementById("h2")

boton.addEventListener("click",addName)

function addName(){
const nombre=prompt("introducir un nombre")
console.log(nombre)
mostrarNombre(nombre)
}

function mostrarNombre(nombre){
h2.textContent="Hola me Llamo:"
h1.textContent=nombre
}