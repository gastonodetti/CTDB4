const buttonSignUp = document.querySelector("button")
const emailInput = document.getElementById("inputEmail")
const passwordInput = document.getElementById("inputPassword")
const urlBuscar = "https://ctd-todo-api.herokuapp.com/v1/"

buttonSignUp.addEventListener("click" , (event) => {

    event.preventDefault()

    const data = {
      email: emailInput.value,
      password: passwordInput.value
  }    
    
    fetchear(data)
    
})

const header = {
    "Content-type": "application/json",
}



function fetchear(data){
fetch(`${urlBuscar}users/login`, {

    method: "POST",
    headers: header,
    body: JSON.stringify(data)

  })

     .then(response => {
                console.log(response);

                if (response.ok != true) {
                    alert("Alguno de los datos es incorrecto.")
                }

                return response.json();

            })
    .then((json) => {
      
      if(json.jwt){
        //guardo en LocalStorage el objeto con el token
        localStorage.setItem('jwt', JSON.stringify(json.jwt));

        //redireccionamos a la página
        location.replace('mis-tareas.html');
      }

    })
    .catch((err) => {
      console.log("Error:", err);
      swal({
        title: "Ups!",
        text: "Ocurrió algún error",
        icon: "error",
      });
    })

}


  