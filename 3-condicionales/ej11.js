let num1 = window.prompt(
    "introduce un numero entero mayor de 25 y menor de 75"
)

let num2 = window.prompt(
    "introduce otro numero entero mayor de 25 y menor de 75"
)

let digi11 = num1.substring(0,1)
let digi12 = num1.substring(1)
let digi21 = num2.substring(0,1)
let dig221 = num2.substring(1)

if( digi11 === digi21 || digi11 === digi22 || digi12 === digi21 || digi12 === digi22){
    console.log("Hay dos digitos en comun")
} else {
    console.log("no hay digitos en comun")
}