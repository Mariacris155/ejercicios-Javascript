let num1 = parseInt(window.prompt("introduce un numero"))
let num2 = parseInt(window.prompt("introduce otro numero"))


esMayor(num1,num2)
? console.log("El primer numero es mayor")
: console.log("El primer numero no es mayor")

function esMayor(arg1, arg2) {
    return arg1 > arg2 ? true : false
}