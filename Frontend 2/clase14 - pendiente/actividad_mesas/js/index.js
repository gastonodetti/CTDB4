/*
REQUERIMIENTOS
- utilizar el formulario para captar el texto ingresado

- implmentar el evento "submit", utilizarlo para guardar el comentario en un array

- cada vez que se agrega un nuevo comentario renderizarlo en una etiqueta "p"(sacar del html los hardcodeados y hacerlo dinamico)

- constantemente guardar la informacion en localStorage, si se recarga la pagina deberian mantenerse los comentarios
*/

const comentarios = document.querySelector(".comentarios")
const submitButton = document.querySelector("button")
const inputComentario = document.getElementById("comentario")
const botonBorrar = document.getElementById("borrar")
let almacenamiento = []
let storage = JSON.parse(localStorage.getItem('key'))

if (storage != null){ 
    almacenamiento = storage
} 

console.log(almacenamiento)

function ObtenerStorage(listado){
    
    comentarios.innerHTML = '<h4>Mis comentarios: </h4>'

    listado.forEach(element => {
        let p = document.createElement("p")
        p.innerText = element
        comentarios.appendChild(p)
    });
}

submitButton.addEventListener("click" , (event) =>{
    
    event.preventDefault()

    let valor = inputComentario.value
    almacenamiento.push(valor)
    localStorage.setItem('key', JSON.stringify(almacenamiento));

    ObtenerStorage(almacenamiento)
   
})

botonBorrar.addEventListener("click" , ()=> {
    localStorage.removeItem('key')
    
})

ObtenerStorage(almacenamiento)