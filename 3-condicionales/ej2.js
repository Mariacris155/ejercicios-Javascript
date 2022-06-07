let num1 = parseInt(Window.prompt("introduce un numero"))
let num2 = parseInt(Window.prompt("introduce otro numero"))

console.log(num1+num2)
console.log(num1-num2)
console.log(num1*num2)
console.log((num1+num2)/2)

if (num1>num2) {
    console.log(`$(num1) es el mayor y $(num2) es el menor`)
} else if (num2>num1) {
    console.log(`$(num2)es el mayor y $(num1) es el menor`)
} else 