/* Realizar un script que permita sumar un array de números consecutivamente, 
de forma que se sume el primer número con el segundo y lo imprima por consola. 
Luego, tenemos que  tomar este resultado y sumarle el tercer numero, y asi hasta 
terminar de recorrer el array:
*/

const array = [1,2,3,4,5]

function sumarArray(){
    let resultado = 0
    array.forEach(element => {
        resultado += element
        console.log(resultado)
    });
    console.log("El resultado final es: " + resultado)
}

sumarArray()