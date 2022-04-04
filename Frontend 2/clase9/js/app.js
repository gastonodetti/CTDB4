window.addEventListener('load', function () {
   
const botonInicio = document.querySelector("#iniciar")
const valor = document.querySelector("#valor")

let n = 0

let intervalo = {}

let intervaloN = {}

botonInicio.addEventListener("click", function(){
    
    clearInterval(intervaloN)
    intervalo = setInterval(function(){valor.innerText = n++}, 1000)
    
    
})


const pausa = document.querySelector("#pausa")

pausa.addEventListener("click", () => {

    clearInterval(intervaloN)
    clearInterval(intervalo)
    
 } )

const stop = document.querySelector("#stop")

stop.addEventListener("click", () => {
    clearInterval(intervaloN)
    clearInterval(intervalo)
    n = 0
    valor.innerText = n
} )

    // definimos la funcionalidad de acelerar
    // - duplicar la velocidad del cronometro
    // - que se puede seguir multiplicando(duplicando la velocidad)
    // - impacata en el numero del boton
   
    const acelerar = document.querySelector("#acelerar")

    function acelerarN() {
        
        clearInterval(intervalo)
        intervaloN = setInterval(function(){valor.innerText = n++}, 500)
        
    }

    acelerar.addEventListener("click", acelerarN)

});