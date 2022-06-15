let array = []
let suma = 0

for (let i = 0; i < 10; i++) {
    array.push(Math.floor(Math.random()* 100))
}

for (let i = 0; i < array.length; i++) {
    suma += array[i]
    
}

console.log(suma/array.length)