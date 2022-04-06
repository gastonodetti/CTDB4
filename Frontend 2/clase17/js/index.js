 // Aquí realizamos un la consulta de la promesa, esperando su respuesta asíncrona
async function renderizar(){

    try {
        const response = await fetch("https://randomuser.me/api/")
        const data = await response.json()
        return renderizarDatosUsuario(data)
      }
      catch(error) {
              console.log("Ocurrió un error al llamar a la API.", error);
      }


}
function renderizarDatosUsuario(datos) {
    /* -------------------------------- CONSIGNA 1 -------------------------------- */
    // Aquí deben desarrollar una función que muestre en pantalla:
    // la foto, el nombre completo del usuario y su email.
    // Esto debe estar basado en la info que nos llega desde la API e insertarse en el HTML.

    const data = datos.results[0]
    
    let div = document.querySelector(".tarjeta")
    div.innerHTML = ""
    let nombre = document.createElement("p")
    let email = document.createElement("p")
    let imagen = document.createElement("img")

    nombre.innerText = `nombre : ${data.name.title} ${data.name.first} ${data.name.last}`
    email.innerText = `email ${data.email}`
    imagen.src = data.picture.large

    div.appendChild(nombre)
    div.appendChild(email)
    div.appendChild(imagen)

    
}


/* --------------------------- CONSIGNA 2 (extra) --------------------------- */
// Aqui pueden ir por el punto extra de utilizar el boton que se encuentra comentado en el HTML
// Pueden descomentar el código del index.html y usar ese boton para ejecutar un nuevo pedido a la API, sin necesidad de recargar la página.
// Es criterio del equipo QUÉ bloque del código debe contenerse dentro de una función para poder ser ejecutada cada vez que se escuche un click.


let boton = document.getElementById("random")

boton.addEventListener("click" , renderizar)
renderizar()