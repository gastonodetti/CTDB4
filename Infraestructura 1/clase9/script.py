#encoding:UTF-8
import random

puntajeUsuario = 0
puntajePc = 0
puntajeTotal = 0
ganaUsuario = 1
ganaPc = 1

def porcentaje():
        if puntajeTotal > 0: 
            x = (puntajeUsuario / puntajeTotal) * 100
            return x
        elif puntajeTotal == 0:
            x = 0
            return x


while True: 
  
    puntajeTotal = puntajeUsuario + puntajePc

    aleatorio = random.randrange(0, 4)
    elijePc = ""
    print("1)Piedra")
    print("2)Papel")
    print("3)Tijera")
    print("4)Lizzard")
    print("5)Spock")
    print("6)Salir del Programa")
    print("7)Mostrar Puntajes")

    opcion = int(input("Que eliges: "))
    
    if opcion == 1:
        eligeUsuario = "piedra"
    elif opcion == 2:
        eligeUsuario = "papel"
    elif opcion == 3:
        eligeUsuario = "tijera"
    elif opcion == 4:
        eligeUsuario = "lizzard"
    elif opcion == 5:
        eligeUsuario = "spock"
    elif opcion == 6:
        print ("Nos vemos!")
        break
    elif opcion == 7:
        print ("------------------------------------")
        print ("Puntajes: ")
        print ("Usuario: ", puntajeUsuario)
        print ("Pc: ", puntajePc)
        print ("Porcentaje de victorias: ", porcentaje(), "%")
        print ("------------------------------------")
        continue
    else:
        print ("Valor Invalido")
        continue
        
    print("Tu eliges: ", eligeUsuario)   
    if aleatorio == 0:
        eligePc = "piedra"
    elif aleatorio == 1:
        eligePc = "papel"
    elif aleatorio == 2:
        eligePc = "tijera"
    elif aleatorio == 3:
        eligePc = "lizzard"
    elif aleatorio == 4:
        eligePc = "spock"
    print("PC eligio: ", eligePc)
    print("...")

    
    
    
    if eligePc == "piedra" and eligeUsuario == "papel":
        print("Ganaste, papel envuelve piedra")
        puntajeUsuario = puntajeUsuario + ganaUsuario

    elif eligePc == "piedra" and eligeUsuario == "spock":
        print("Ganaste, spock aplasta piedra")
        puntajeUsuario = puntajeUsuario + ganaUsuario

    elif eligePc == "papel" and eligeUsuario == "tijera":
        print("Ganaste, tijera corta papel")
        puntajeUsuario = puntajeUsuario + ganaUsuario

    elif eligePc == "papel" and eligeUsuario == "lizzard":
        print("Ganaste, lizzard come papel")
        puntajeUsuario = puntajeUsuario + ganaUsuario

    elif eligePc == "tijera" and eligeUsuario == "piedra":
        print("Ganaste, piedra pisa tijera")
        puntajeUsuario = puntajeUsuario + ganaUsuario

    elif eligePc == "tijera" and eligeUsuario == "spock":
        print("Ganaste, spock pisa tijera")
        puntajeUsuario = puntajeUsuario + ganaUsuario

    elif eligePc == "lizzard" and eligeUsuario == "piedra":
        print("Ganaste, piedra pisa lizzard")
        puntajeUsuario = puntajeUsuario + ganaUsuario

    elif eligePc == "lizzard" and eligeUsuario == "tijera":
        print("Ganaste, tijera corta lizzard")
        puntajeUsuario = puntajeUsuario + ganaUsuario
        
    elif eligePc == "spock" and eligeUsuario == "papel":
        print("Ganaste, papel envuelve spock")
        puntajeUsuario = puntajeUsuario + ganaUsuario

    elif eligePc == "spock" and eligeUsuario == "lizzard":
        print("Ganaste, lizzard mata spock")
        puntajeUsuario = puntajeUsuario + ganaUsuario

    
        
    if eligeUsuario == "piedra" and eligePc == "papel":
        print("Perdiste, papel envuelve piedra")
        puntajePc = puntajePc + ganaPc
    elif eligeUsuario == "piedra" and eligePc == "spock":
        print("Perdiste, spock mata papel")
        puntajePc = puntajePc + ganaPc

    elif eligeUsuario == "papel" and eligePc == "tijera":
        print("Perdiste, tijera corta papel")
        puntajePc = puntajePc + ganaPc
    elif eligeUsuario == "papel" and eligePc == "lizzard":
        print("Perdiste, lizzard come papel")
        puntajePc = puntajePc + ganaPc

    elif eligeUsuario == "tijera" and eligePc == "piedra":
        print("Perdiste, piedra pisa tijera")
        puntajePc = puntajePc + ganaPc
    elif eligeUsuario == "tijera" and eligePc == "spock":
        print("Perdiste, spock pisa tijera")
        puntajePc = puntajePc + ganaPc

    elif eligeUsuario == "lizzard" and eligePc == "piedra":
        print("Perdiste, piedra aplasta lizzard")
        puntajePc = puntajePc + ganaPc
    elif eligeUsuario == "lizzard" and eligePc == "tijera":
        print("Perdiste, tijera corta lizzard")
        puntajePc = puntajePc + ganaPc

    elif eligeUsuario == "spock" and eligePc == "papel":
        print("Perdiste, papel envuelve spock")
        puntajePc = puntajePc + ganaPc
    elif eligeUsuario == "spock" and eligePc == "lizzard":
        print("Perdiste, lizzard envenena tijera")
        puntajePc = puntajePc + ganaPc


    elif eligePc == eligeUsuario:
        print("Empate")

    
    again = input("Jugamos de nuevo? Si/No: ")
    if 'si' in again:
        continue
    elif 'no' in again:
        print("Nos vemos!")
        break
    else:
        print("Valor Invalido")