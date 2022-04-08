let formulario = document.querySelector("form")
let botonInscripcion = document.querySelector("button")
let usuario = {
    nombreCompleto:"",
    contraseña:"",
    telefono:"",
    hobbies: [],
    pais: "",
}
let nombre = document.querySelector("#nombre")
let contrasenia = document.querySelector("#pass")
let tel = document.querySelector("#tel")
let arrayErrores = []
let labels = document.querySelectorAll("label")


function stringContainsNumber(string) {
    return /\d/.test(string);
}

let errorNombre = document.createElement("span")
errorNombre.style.color = "red"

function normalizarNombre(){

if (nombre.value.length < 150 && nombre.value.length >0 && stringContainsNumber(nombre.value) == false){
    let n = nombre.value.trim().toLowerCase()
    let dosNombres = n.split(" ", 2)
    console.log(dosNombres)
 if(dosNombres.length == 2) {
        if(dosNombres[0].length >1 && dosNombres[1].length >1) {
            usuario.nombreCompleto = n
        }
        else {
            errorNombre.innerHTML = ("Por favor fijate que el nombre y el apellido tengan mas de un caracter")
            labels[0].appendChild(errorNombre)
        }
 }
 else {
    
    errorNombre.innerHTML = ("Ingrese nombre Y apellido")
    labels[0].appendChild(errorNombre)
    }
    console.log(usuario)
} else {
    
    
    errorNombre.innerHTML = ("Ponga menos de 150 caracteres y sin numeros")
    labels[0].appendChild(errorNombre)
}
}

botonInscripcion.addEventListener("click", function(e){

    e.preventDefault()
    errorNombre.innerHTML = ""
    normalizarNombre()
})
