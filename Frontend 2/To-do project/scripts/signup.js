window.addEventListener('load', function () {
    /* ---------------------- obtenemos variables globales ---------------------- */
    const form = document.forms[0];
    const nombre = document.querySelector('#inputNombre');
    const apellido = document.querySelector('#inputApellido');
    const email = document.querySelector('#inputEmail');
    const password = document.querySelector('#inputPassword');
    const passwordRepetida = document.getElementById("inputPasswordRepetida")
    const url = 'https://ctd-todo-api.herokuapp.com/v1';

    /* -------------------------------------------------------------------------- */
    /*            FUNCIÓN 1: Escuchamos el submit y preparamos el envío           */
    /* -------------------------------------------------------------------------- */
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        // validamos imputs
        
        let nombreValidado = validarTexto(nombre.value)
        let apellidoValidado = validarTexto(apellido.value)
        let emailValidado = validarEmail(email.value)
        let contraseniaValidada = validarContrasenia(password.value)
        let comparacionContrasenias = compararContrasenias(contraseniaValidada, passwordRepetida.value)        

        // //creamos el cuerpo de la request
        const payload = {
            firstName: normalizarTexto(nombreValidado),
            lastName: normalizarTexto(apellidoValidado), 
            email: normalizarEmail(emailValidado),
            password: comparacionContrasenias ? contraseniaValidada : alert("Las contraseñas no coinciden")
        };
        // //configuramos la request del Fetch
        const settings = {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json'
            }
        };
        // //lanzamos la consulta de login a la API
        realizarRegister(settings);

        // //limpio los campos del formulario
        form.reset();
    });

    /* -------------------------------------------------------------------------- */
    /*                    FUNCIÓN 2: Realizar el signup [POST]                    */
    /* -------------------------------------------------------------------------- */
    
    function realizarRegister(settings) {
        console.log("Lanzando la consulta a la API");
        fetch(`${url}/users`, settings)
            .then(response => {
                console.log(response);

                if (response.ok != true) {
                    alert("Alguno de los datos es incorrecto.")
                }

                return response.json();

            })
            .then(data => {
                console.log("Promesa cumplida:");
                console.log(data);

                if (data.jwt) {
                    //guardo en LocalStorage el objeto con el token
                    localStorage.setItem('jwt', JSON.stringify(data.jwt));

                    //redireccionamos a la página
                    location.replace('mis-tareas.html');
                }
                
            }).catch(err => {
                console.log("Promesa rechazada:");
                console.log(err);
            })
    };


});
