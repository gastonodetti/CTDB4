// https://drive.google.com/file/d/1fRn7OUWyt5-rcxq-V-MQF75DfYELie90/view

let puntosMaquina = 0
let puntosJugador = 0

function jugar(){
        
        let jugada = prompt("Ingrese su jugada: Piedra, Papel o Tijera")  
        let maquina = parseInt(Math.random()*3+1) //piedra: 1 , papel: 2, tijera: 3
        let resultadoJugada = ""

        switch(jugada){
            case "Piedra":
                switch (maquina){
                    case 1: resultadoJugada = "Empate"; break;
                    case 2: resultadoJugada = "Perdiste"; break;
                    default: resultadoJugada = "Ganaste!"; 
                }
                break;
            case "Papel":
                switch (maquina){
                    case 1: resultadoJugada = "Ganaste!"; break;
                    case 2: resultadoJugada = "Empate"; break;
                    default: resultadoJugada = "Perdiste"; 
                }
                break;
            case "Tijera":
                switch (maquina){
                    case 1: resultadoJugada = "Perdiste"; break;
                    case 2: resultadoJugada = "Ganaste!"; break;
                    default: resultadoJugada = "Empate"; 
                }
                break;
            default: alert("ingrese un valor valido");
        }

        sumarPuntos(resultadoJugada)
        alert("Tu jugada: " + jugada)
        alert("Jugada Maquina: (1: piedra, 2: papel, 3: tijera)" + maquina)
        alert("Resultado ronda: " + resultadoJugada)
        alert("Puntajes: Jugador: " + puntosJugador + " Maquina: " + puntosMaquina)
        

    }

    function sumarPuntos(resultadoJugada){
        switch (resultadoJugada){
            case "Ganaste!": puntosJugador++; break;
            case "Perdiste": puntosMaquina++; break;
        }

    }


do{
    jugar()
} while (puntosJugador < 3 && puntosMaquina < 3)

alert("Juego finalizado!")