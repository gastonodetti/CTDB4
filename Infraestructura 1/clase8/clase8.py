#encoding:UTF-8
import random

while True: 
    aleatorio = random.randrange(0, 4)
    elijePc = ""
    print("1)Piedra")
    print("2)Papel")
    print("3)Tijera")
    print("4)Lizzard")
    print("5)Spock")
    print("6)Salir del Programa")
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
    elif eligePc == "piedra" and eligeUsuario == "spock":
        print("Ganaste, spock aplasta piedra")

    elif eligePc == "papel" and eligeUsuario == "tijera":
        print("Ganaste, tijera corta papel")
    elif eligePc == "papel" and eligeUsuario == "lizzard":
        print("Ganaste, lizzard come papel")

    elif eligePc == "tijera" and eligeUsuario == "piedra":
        print("Ganaste, piedra pisa tijera")
    elif eligePc == "tijera" and eligeUsuario == "spock":
        print("Ganaste, spock pisa tijera")

    elif eligePc == "lizzard" and eligeUsuario == "piedra":
        print("Ganaste, piedra pisa lizzard")
    elif eligePc == "lizzard" and eligeUsuario == "tijera":
        print("Ganaste, tijera corta lizzard")
        
    elif eligePc == "spock" and eligeUsuario == "papel":
        print("Ganaste, papel envuelve spock")
    elif eligePc == "spock" and eligeUsuario == "lizzard":
        print("Ganaste, lizzard mata spock")
    
        
    if eligeUsuario == "piedra" and eligePc == "papel":
        print("Perdiste, papel envuelve piedra")
    elif eligeUsuario == "piedra" and eligePc == "spock":
        print("Perdiste, spock mata papel")

    elif eligeUsuario == "papel" and eligePc == "tijera":
        print("Perdiste, tijera corta papel")
    elif eligeUsuario == "papel" and eligePc == "lizzard":
        print("Perdiste, lizzard come papel")

    elif eligeUsuario == "tijera" and eligePc == "piedra":
        print("Perdiste, piedra pisa tijera")
    elif eligeUsuario == "tijera" and eligePc == "spock":
        print("Perdiste, spock pisa tijera")

    elif eligeUsuario == "lizzard" and eligePc == "piedra":
        print("Perdiste, piedra aplasta lizzard")
    elif eligeUsuario == "lizzard" and eligePc == "tijera":
        print("Perdiste, tijera corta lizzard")

    elif eligeUsuario == "spock" and eligePc == "papel":
        print("Perdiste, papel envuelve spock")
    elif eligeUsuario == "spock" and eligePc == "lizzard":
        print("Perdiste, lizzard envenena tijera")

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