

/* ---------------------------------- texto --------------------------------- */
function validarTexto(texto) {
    if(texto.length > 20) {
        alert("El largo del texto es excesivo")
    }else if (texto.length < 3) {
        alert("El texto debe tener mas de 3 caracteres")
    }
    else {
        console.log("texto validado")    
        return texto
    }
}

function normalizarTexto(texto) {
    console.log(texto.toUpperCase()) 
    return texto.toUpperCase()
}

/* --------------------------------- email --------------------------------- */
function validarEmail(email) {

var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (email.match(validRegex)) {

    return email
  } else {

    alert("Correo electronico inválido");

  }
}

function normalizarEmail(email) {
    console.log(email.toUpperCase()) 
    return email.toUpperCase()
}

/* -------------------------------- password -------------------------------- */
function validarContrasenia(contrasenia) {

    var validRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/    ;

  if (contrasenia.match(validRegex)) {

    return contrasenia

  } else {

    alert("La clave debe contener al menos 8 caracteres, letras y números");

  }
}

function compararContrasenias(contrasenia_1, contrasenia_2) {
    if(contrasenia_1 === contrasenia_2){
        return true;
    }
    else { return false}
}

