let array = []

for (let i = 0; i < 3; i++) {
    array.push(parseInt(window.prompt("introduce un numero")))
    
}

console.log(Math.min(array[0],array[1],array[2]))