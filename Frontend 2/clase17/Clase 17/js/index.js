const apiUrl = 'https://dog.ceo/api/breeds/image/random';

async function callApi() {

  try {
    const respuesta = await fetch(apiUrl)
    const datos = await respuesta.json()
    return loadImageAndShowAlert(datos.message)
  }
  catch(error) {
          console.log("Ocurrió un error al llamar a la API.", error);
  }
  
}


// function callApi() {

//     fetch(apiUrl)
//         .then(respuesta => {
//             return respuesta.json();
//         })
//         .then(datos => {
//             loadImageAndShowAlert(datos.message);
//         })
//         .catch(error => {
//             console.log("Ocurrió un error al llamar a la API.", error);
//         });
// }

let button = document.querySelector('button');
button.addEventListener('click', callApi);

function loadImageAndShowAlert(src) {
     document.querySelector('img').setAttribute('src', src);
     alert("Img cargada")
}