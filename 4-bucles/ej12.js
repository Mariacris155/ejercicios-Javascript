let num = parseInt(window.prompt("introduce un numero de tres cifras"))

let num1 = parseInt(num.substring(0,1))
let num2 = parseInt(num.substring(1,2))
let num3 = parseInt(num.substring(2,3))

console.log (num1+num2+num3)



//con bucle//
let cifra = parseInt(window.prompt("introduce un numero de tres cifras"))
let suma = 0

for (let i = 0; i < cifra.length; i++){
    suma+= parseInt(cifra.substring(i, i+1))
}
console.log(suma)