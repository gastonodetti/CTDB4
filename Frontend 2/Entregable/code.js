/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  
  let nombre = prompt("Ingresa tu nombre: ")
  let nacimiento = prompt("Ingresa el año en que naciste: ")

  function checkNacimiento(){
      while(isNaN(nacimiento)){
        nacimiento = prompt("Eso no es un numero! Por favor, ingresa el año en que naciste: ")
    }
    return nacimiento
  }

  checkNacimiento()

  let ciudad = prompt("Ciudad de nacimiento: ")
  let interesPorJavascript = confirm("¿Te interesa Javascript?")
  
  let currentYear = new Date().getFullYear()
  let edad = currentYear - parseInt(nacimiento)
  
  datosPersona.edad = edad
  datosPersona.ciudad = ciudad
  datosPersona.nombre = nombre

  if (interesPorJavascript){
    datosPersona.interesPorJs = "Si"
  }else {
    datosPersona.interesPorJs = "No"
  }


}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */

  let nombre = document.getElementById("nombre")
  let edad = document.getElementById("edad")
  let ciudad = document.getElementById("ciudad")
  let interesPorJavascript = document.getElementById("javascript") 

  nombre.innerText = datosPersona.nombre
  edad.innerText = datosPersona.edad
  ciudad.innerText = datosPersona.ciudad
  interesPorJavascript.innerText = datosPersona.interesPorJs

}


function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  

  let card = document.getElementById("fila")

  card.innerHTML = ""

  listado.forEach(materia => {

  let caja = document.createElement("div")
  caja.className = "caja"

  let imagen = document.createElement("img")
  imagen.src = materia.imgUrl
  imagen.alt = materia.lenguajes

  let lenguajes = document.createElement("p")
  lenguajes.className = "lenguajes"
  lenguajes.innerText = `Lenguajes: ${materia.lenguajes}`

  let bimestre = document.createElement("p")
  bimestre.className = "bimestre"
  bimestre.innerText = `Bimestre: ${materia.bimestre}`

  caja.appendChild(imagen)
  caja.appendChild(lenguajes)
  caja.appendChild(bimestre)

  card.appendChild(caja)

  })

}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
 
  let sitio = document.getElementById("sitio")

  sitio.classList.toggle("dark")


}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */

let textToshow = document.getElementById("sobre-mi")


window.addEventListener("keypress", event =>{
  if(event.key === "f"){
    textToshow.classList.remove("oculto")
  }
})