const nombreUsuario = document.querySelector("#nombre")
const contraUsuario = document.querySelector("#pass")
const telefonoUsuario = document.querySelector("#tel")
const formulario = document.querySelector("form")
const checkboxes = document.querySelectorAll("input[type=checkbox]")
const radio = document.querySelectorAll("input[type=radio]")

let usuario = {
    nombreCompleto: "",
    contrasenia: "",
    tel: "",
    hobbiesSeleccionados: [],
    nacionalidad: ""
}

let mensajeError = document.createElement("span")

let nombreError = document.querySelector("#nombreError")
let telError = document.querySelector("#telError")
let contraError = document.querySelector("#contraError")

function normalizar(nombre) {
    let n = nombre.trim().toLowerCase()
    let dosNombres = n.split(" ", 2)
    console.log(dosNombres)
 if(dosNombres.length > 2 && dosNombres.length < 2) {
        if(dosNombres[0].length <= 10 && dosNombres[1].length <= 10) {
            usuario.nombreCompleto = n
        }
        else {
            nombreUsuario.classList.add("error")
            mensajeError.innerText = "Se excedio de los caracteres"
            nombreError.appendChild(mensajeError)
        }
 }
 else {
        nombreUsuario.classList.add("error")
        mensajeError.innerText = "Por favor, coloque el nombre completo"
        nombreError.appendChild(mensajeError)
    }
    console.log(usuario)
}


function validarTel(tele) {
    if (tele.length === 10) {
        usuario.tel = parseInt(tele)
    }
    else {
        telefonoUsuario.classList.add("error")
        mensajeError.innerText = "Este telefono no es valido."
        telError.appendChild(mensajeError)
    }
}

function validarContra() {
    let strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,16})");

    if (strongRegex.test(contraUsuario.value)) {
        usuario.contrasenia = contraUsuario.value
    }
    else {
        contraUsuario.classList.add("error")
        mensajeError.innerText = "La contraseña no cumple con lo requerido."
        contraError.appendChild(mensajeError)
    }
    console.log(usuario)
}

nombreUsuario.addEventListener("blur", () => {
    normalizar(nombreUsuario.value)
})

telefonoUsuario.addEventListener("blur", () => {
    validarTel(telefonoUsuario.value)
})

contraUsuario.addEventListener("change", () => {
    validarContra()
})

function chequearCantidadHobbies() {
    console.log(usuario.hobbiesSeleccionados.length)
    

    if (usuario.hobbiesSeleccionados.length <=4) {
        alert("ok")
    }
    else {
        usuario.hobbiesSeleccionados.length = 0
        alert("no")
    }

}

formulario.addEventListener("submit", (e) => {
    e.preventDefault()

    checkboxes.forEach(hobbie => {
        // console.log(hobbie.id)
        hobbie.checked ? usuario.hobbiesSeleccionados.push(hobbie.id) : null
    })

    radio.forEach(nac => {
        // console.log(nac.checked)
        nac.checked ? usuario.nacionalidad = nac.id.toUpperCase() : null
    })
    chequearCantidadHobbies()
    console.log(usuario)
})





