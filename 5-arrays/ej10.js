let array = [0,0,0,0,0,0,0,0,0,0]
let numero = 0


do{
    numero = parseInt(window.prompt("introduce un indice"))
    
    numero> 10 || numero < 0
    ? console.log ("no se puede")
    : array[numero] = array[numeero]+1, console.log(array[numero])

} while (numero>= 0)

for (let i = 0; i < array.length; i++) {
   console.log (`${i} ----${array[i]}`);
    
}