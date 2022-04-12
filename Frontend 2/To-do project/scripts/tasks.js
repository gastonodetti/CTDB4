/*

const form = document.querySelector(".nueva-tarea")
const listadoTareas = document.querySelector(".tareas-pendientes")
let tareasUsuario = []
*/

const urlBuscar = "https://ctd-todo-api.herokuapp.com/v1/"
const jwt = JSON.parse(localStorage.getItem('jwt'))
const campoTarea = document.getElementById("nuevaTarea")
const botonCrearTarea = document.querySelector("button[type='submit']")
let arrayTareas = []

//boton cerrar sesion

const closeButton = document.getElementById("closeApp")

closeButton.addEventListener("click", () => {
  location.replace('index.html')
})

//mostrar nombre de usuario en pantalla

function obtenerDatosUser(jwt){
  fetch(`${urlBuscar}users/getMe`, {

      method: "GET",
      headers: {
          authorization: jwt
      }
  
    })
  
      .then(response =>  response.json())

      .then((json) => {
       
          document.querySelector("p").innerHTML = `${json.firstName} ${json.lastName}` 
           
      })
      .catch((err) => {
        console.log("Error:", err);
      })

      
  
}
obtenerDatosUser(jwt)
 
//obtener listado de tareas de la api

function obtenerTareasUser(jwt){
  
  fetch(`${urlBuscar}tasks` , {
    method: "GET",
    headers: {
      authorization: jwt
  }
  })
  .then(response => response.json())
  .then(data => {
      arrayTareas = data
  })
  .catch(error => console.log(error))

}


obtenerTareasUser(jwt)

//boton nueva tarea

function agregarNuevaTarea(){
  
  let bodyTarea = {
    description: campoTarea.value,
    completed: false
  }

  fetch(`${urlBuscar}tasks`, {

    method: "POST",
    headers: {
      "Content-type": "application/json",
      "authorization": jwt
    },
    body: JSON.stringify(bodyTarea)

  })

    .then(response => response.json())
    .catch((err) => {
      console.log("Error:", err);
    })


  }  

botonCrearTarea.addEventListener("click" , (event) => {
  event.preventDefault()
  agregarNuevaTarea()
})

//renderizar tareas

function renderizarTareas(){
  console.log(arrayTareas)
}
renderizarTareas()










/*






function agregarNuevaTarea(){
//creo objeto de la tarea y la sumo al array de tareas
  let tareaPorAgregar = campoTarea.value 

  let bodyTarea = {
    description: tareaPorAgregar,
    completed: false
  }

 

//inserto tarea en la BD de la api


//renderizo tareas en ul

  tareasUsuario.unshift(bodyTarea)

  let li = document.createElement("li")
  li.className = "tarea"
  li.innerText = bodyTarea.description

  listadoTareas.appendChild(li)
  
}

form.addEventListener("submit" , (event) => {
  event.preventDefault()
  agregarNuevaTarea()
})

obtenerDatosUser(jwt)
*/