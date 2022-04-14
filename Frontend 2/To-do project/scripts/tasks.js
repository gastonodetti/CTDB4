const urlBuscar = "https://ctd-todo-api.herokuapp.com/v1/"
const jwt = JSON.parse(localStorage.getItem('jwt'))
const campoTarea = document.getElementById("nuevaTarea")
const botonCrearTarea = document.querySelector("button[type='submit']")
const ul = document.querySelector(".tareas-pendientes")

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

      obtenerTareasUser(jwt)
  
}
 
//obtener listado de tareas de la api

function obtenerTareasUser(jwt){
  return(
  fetch(`${urlBuscar}tasks` , {
    method: "GET",
    headers: {
      authorization: jwt
  }
  })
  .then(response => response.json())
  .then(data => {
    console.log(data)
    renderizarTareas(data)
  })
  .catch(error => console.log(error))
  )
}

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

  obtenerDatosUser(jwt)

  }  

botonCrearTarea.addEventListener("click" , (event) => {
  event.preventDefault()
  ul.innerHTML = ""
  agregarNuevaTarea()
})

//renderizar tareas

function renderizarTareas(array){
  // obtengo listados y limpio cualquier contenido interno
  const tareasPendientes = document.querySelector('.tareas-pendientes');
  const tareasTerminadas = document.querySelector('.tareas-terminadas');
  tareasPendientes.innerHTML = "";
  tareasTerminadas.innerHTML = "";

  // buscamos el numero de finalizadas
  const numeroFinalizadas = document.querySelector('#cantidad-finalizadas');
  let contador = 0;
  numeroFinalizadas.innerText = contador;

  array.forEach(tarea => {
    //variable intermedia para manipular la fecha
    let fecha = new Date(tarea.createdAt);

    if (tarea.completed) {
      contador++;
      //lo mandamos al listado de tareas completas
      tareasTerminadas.innerHTML += `
        <li class="tarea">
          <div class="hecha">
            <i class="fa-regular fa-circle-check"></i>
          </div>
          <div class="descripcion">
            <p class="nombre">${tarea.description}</p>
            <div class="cambios-estados">
              <button onclick="retornarTarea(${tarea.id})" class="change incompleta" id="${tarea.id}" ><i class="fa-solid fa-rotate-left"></i></button>
              <button onclick="eliminarTarea(${tarea.id})" class="borrar" id="${tarea.id}"><i class="fa-regular fa-trash-can"></i></button>
            </div>
          </div>
        </li>
                      `
    } else {
      //lo mandamos al listado de tareas sin terminar
      tareasPendientes.innerHTML += `
        <li class="tarea">
          <button onclick="finalizarTarea(${tarea.id})" class="change" id="${tarea.id}"><i class="fa-regular fa-circle"></i></button>
          <div class="descripcion">
            <p class="nombre">${tarea.description}</p>
            <p class="timestamp">${fecha.toLocaleDateString()}</p>
          </div>
        </li>
                      `
    }
    // actualizamos el contador en la pantalla
    numeroFinalizadas.innerText = contador;
  })
}

// cambiar tarea a finalizada

function finalizarTarea(id) {

  let data = {
    completed: true
  }

  fetch(`${urlBuscar}tasks/${id}`, {

    method: "PUT",
    headers: {
        "authorization": jwt,
        "Content-type": "application/json",
    },
    body: JSON.stringify(data)
  })

    .then(response =>  response.json())
    .then((json) => {
     
       console.log(json)
       obtenerDatosUser(jwt)
         
    })
    .catch((err) => {
      console.log("Error:", err);
    })

}

//borrar tarea definitivamente

function eliminarTarea(id) {

  fetch(`${urlBuscar}tasks/${id}`, {

    method: "DELETE",
    headers: {
        "authorization": jwt,
    }
  })

    .then(response =>  response.json())
    .then((json) => {
     
       console.log(json)
       obtenerDatosUser(jwt)
         
    })
    .catch((err) => {
      console.log("Error:", err);
    })

}

//volver tarea a pendiente

function retornarTarea(id){
  
  let data = {
    completed: false
  }

  fetch(`${urlBuscar}tasks/${id}`, {

    method: "PUT",
    headers: {
        "authorization": jwt,
        "Content-type": "application/json",
    },
    body: JSON.stringify(data)
  })

    .then(response =>  response.json())
    .then((json) => {
     
       console.log(json)
       obtenerDatosUser(jwt)
         
    })
    .catch((err) => {
      console.log("Error:", err);
    })

}

// al iniciar la app se ejecuta esta funcion que anida a todas las demas

obtenerDatosUser(jwt)