//creando los nodos
const div = document.createElement("div")
const img = document.createElement("img")

//agregamos las clases
div.classList.add("tarjeta")
img.classList.add("imagen")

//nodo padre => nodo hijo
div.appendChild(img)

const contenedor = document.querySelector(".contenedor")
contenedor.appendChild(div)
console.log(contenedor)

//atributos dinamicos

const imagenes = document.querySelectorAll("img")


imagenes.forEach( (i, index) => {
    if(!i.hasAttribute("alt")) {
        i.setAttribute("alt", `imagen-${index + 1}`)
    }
    const url = prompt("inserte una imagen")
    i.setAttribute("src", url)

    console.log(url)

    if(url === null) {
        i.addEventListener("mouseover", () => {
            alert("Falta cargar una imagen")
        })
    }
    
})

