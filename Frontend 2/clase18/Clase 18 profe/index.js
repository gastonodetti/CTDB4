
//guardo url
const url = "https://ctd-todo-api.herokuapp.com/v1/users"

//objeto con los datos, esto me lo brinda la documentacion de la api
const data = {
  firstName: "Dani",
  lastName: "MArtinez",
  email: "dani@gmail.com",
  password: "1234"
}

//guardo el jwt del usuario dani martinez
const chocloDani = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRhbmlAZ21haWwuY29tIiwiaWQiOjIyMzYsImlhdCI6MTY0OTM3MTA3MH0.cLBIdXtXWAs0hwM-WHqJl-oIzcmw8xXPEnUueb-3z-c"
  
//guardo la info del header
const header = {
  "Content-type": "application/json",
  "Authorization": chocloDani
}

/* metodo fetch para crear un usuario
fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: header,
  })

    .then((response) => response.json())
    .then((json) => {
      // Aqui obtenemos la respuesta de la API.
      console.log("Respuesta", json);
    })
    .catch((err) => {
      console.log("Error:", err);
    })
*/  

//traer un usuario

urlBuscar = "https://ctd-todo-api.herokuapp.com/v1/users/getMe"


fetch(urlBuscar, {
  method: "GET",
  headers: header,
})
  .then((response) => response.json())
  .then((json) => {
    // Aqui obtenemos la respuesta de la API.
    console.log("Usuario", json);
  })
  .catch((err) => {
    console.log("Error:", err);
  })










