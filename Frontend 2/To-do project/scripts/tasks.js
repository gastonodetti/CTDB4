const jwt = JSON.parse(localStorage.getItem('jwt'))
urlBuscar = "https://ctd-todo-api.herokuapp.com/v1/"
let tareasUsuario = []

function obtenerDatosUser(jwt){
    fetch(`${urlBuscar}users/getMe`, {

        method: "GET",
        headers: {
            authorization: jwt
        }
    
      })
    
        .then(response =>  response.json())

        .then((json) => {
         
            console.log(json)
            document.querySelector("p").innerHTML = `${json.firstName} ${json.lastName}` 
             
        })
        .catch((err) => {
          console.log("Error:", err);
        })
    
}

function obtenerTareasUser(jwt){
  fetch(`${urlBuscar}tasks` , {
    method: "GET",
    headers: {
      authorization: jwt
  }
  })

  .then(response => response.json())
  .then(result => {

    console.log(result)
    tareasUsuario = result
  
  })
  .catch(error => console.log(error))

  //usar array tareasUsuario para renderizarlo en pantalla y agregarle tareas

}
obtenerDatosUser(jwt)
obtenerTareasUser(jwt)
