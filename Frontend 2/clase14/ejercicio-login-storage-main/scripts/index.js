// Esta es la base de datos de nuestros usuarios
const baseDeDatos = {
  usuarios: [
    {
      id: 1,
      name: "Steve Jobs",
      email: "steve@jobs.com",
      password: "Steve123",
    },
    {
      id: 2,
      name: "Ervin Howell",
      email: "shanna@melissa.tv",
      password: "Ervin345",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      email: "nathan@yesenia.net",
      password: "Floppy39876",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      email: "julianne.oconner@kory.org",
      password: "MysuperPassword345",
    },
  ],
};

// ACTIVIDAD

// Paso a paso:

// 1) Al momento de que la persona inicia sesión, si las validaciones que ya tenemos implementadas
// han sido exitosas, deberemos almacenar la información del usuario en el LocalStorage.

// 2) Al mensaje de bienvenida que ya teníamos implementado, deberemos agregarle el nombre de la
// persona y un botón de "Cerrar Sesión".

// 3) Una vez iniciada la sesión, la misma se deberá mantener en ese estado para el caso de que la persona
// recargue la página. Para ello, deberás validar si existe información del usuario al momento en
// que se produce la carga de la página, y en base a dicha condción decidir que elementos mostrar.

// 3) Para el caso de que la persona haga click en el botón "Cerrar Sesión", se deberá eliminar
// la información del usuario, mostrar un mensaje indicando que se ha cerrado la sesión, y recargar
// la página para mostrar nuevamente el formulario de login.

/* 
TIPS:
  - Para lograr los objetivos de este ejercicio, deberás valerte de algunos eventos y métodos que vimos en
    las clases anteriores. Te invitamos a que revises los recursos en caso de que tengas dudas, ya que allí
    encontrarás todas las respuestas que necesitas para completar la actividad.

  - Recuerda que puedes seleccionar y manipular los elementos del archivo index.html, usando los
    recursos que Javascript te ofrece para ello. Además, en el archivo styles.css tiene algunas clases y 
    estilos predefinidos para ayudarte a completar la actividad.

  - Al momento de guardar información del usuario en el navegador, recuerda que debemos almacenar solo la 
    información necesaria, y EN NINGUN CASO DEBEMOS GUARDAR LA CONTRASEÑA. Por ello, deberás seleccionar y
    separar la información que tienes que almacenar, a partir del objeto que contiene la información del 
    usuario.

   ¡Manos a la obra!
 */

   
const button = document.querySelector(".login-btn")
const loader = document.getElementById("loader")
const form = document.querySelector("form")

button.addEventListener("click", () => { 
  
  

  loader.classList.remove("hidden")

  
  cargarApp() 

  

})

function cargarApp(){ 

  const displayError = document.getElementById("error-container")
  

  setTimeout(function(){ 
    
    loader.classList.add("hidden") 

    if(validarDatos()){

      document.body.innerHTML = '<h1> Bienvenido al sitio 😀 </h1>'
      

    } else { 
      displayError.classList.remove("hidden")
      displayError.innerHTML = "<small>Alguno de los datos ingresados son incorrectos</small>"
    }
    
  }, 3000);

  

}

function validarUser(){

  const inputEmail = document.getElementById("email-input").value
  const arrayUsuarios = baseDeDatos.usuarios
  let validacion = false

  arrayUsuarios.forEach(item => {
    item.email === inputEmail ? validacion = true : ""
  })

  return validacion

}

function validarPass(){

  let password = document.getElementById("password-input").value 

   return (password.length < 5 ? false : true)

}

function validarDatos(){
  if(validarPass() && validarUser()){
    return true
  } else { return false }
}
