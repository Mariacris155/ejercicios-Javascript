let num1 = parseInt(window.prompt("introduce un numero"))
let num2 = parseInt(window.prompt("introduce otro numero"))

console.log(num1+num2)
console.log(num1-num2)
console.log(num1*num2)
console.log((num1num2)/2)

if(num1>num2){
    console.log(`$(num1)es el mayor y $(num2) el mas pequeño`)
}else if(num1<num2){
    console.log(`$(num2)es el mayor y $(num1) es el menor`)
}else {
    console.log ("son iguales")
}
 