let array = [1,1,1,1,1,1,1,1,1,1]

let numero = 0

do{
    numero = parseInt(window.prompt("introduce un numero entre 0 y 9"))
    numero >0 && numero <= 9
    ? console.log(array[numero]), (array[numero = aray[numero] * 2])
    : console.log("no vale")

} while (numero>=0)