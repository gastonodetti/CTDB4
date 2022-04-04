const nombreUsuario = document.querySelector("#nombre")
const contraUsuario = document.querySelector("#pass")
const telefonoUsuario = document.querySelector("#tel")
const formulario = document.querySelector("form")
const checkboxes = document.querySelectorAll("input[type=checkbox]")
const radio = document.querySelectorAll("input[type=radio]")

/*¨consigna 

    https://docs.google.com/document/d/1Q9TwzvAxLCZAaX4VH7SXSqwSVW9lKF8pFf49A024-Kc/edit#

*/

let usuario = {
    nombreCompleto: "",
    contrasenia: "",
    tel: "",
    hobbiesSeleccionados: [],
    nacionalidad: ""
}

function normalizar(nombre) {
    
    let nombreSeparado = nombre.split(" ", 2)
    
    let validadApellido = nombreSeparado.length > 1 ? true : alert("Debe ingresar nombre y apellido")
    let validarLargo = nombreSeparado[0].length + nombreSeparado[1].length < 150 ? true : alert("caracteres excedidos")

    let valoresAceptados = /^[a-zA-Z]+$/;
    let validarNumeros = false

    if (nombreSeparado[0].match(valoresAceptados) && nombreSeparado[1].match(valoresAceptados)){
        validarNumeros = true
     } else {
         alert("EL nombre no puede contener numeros")
     }

    
    usuario.nombreCompleto = nombre.trim().toLowerCase()
    
    
}


function validarTel(tele) {
     !isNaN(tele) ? usuario.tel = parseInt(tele) : null
}

formulario.addEventListener("submit", (e) => {
    e.preventDefault()
    usuario.contrasenia = contraUsuario.value
    normalizar(nombreUsuario.value)
    validarTel(telefonoUsuario.value)

    checkboxes.forEach(hobbie => {

        hobbie.checked ? usuario.hobbiesSeleccionados.push(hobbie.id) : null
       

    })

    radio.forEach(nac => {
        // console.log(nac.checked)
        nac.checked ? usuario.nacionalidad = nac.id.toUpperCase() : null
    })

    console.log(usuario)
})
