let fecha = window.prompt("introduce tu edad (DD/MM/AAAA):")

let num = parseInt(fecha.substring(0,2)+parseInt(fecha.substring(3,5)+parseInt(fecha.substring(6))))

let suma = 0
let lucky = 0
let num2 = 0



do{


for (let i = 0; i < num.length; i++) {
    
    suma += parseInt(num.substring(i,i+1))
}
num= suma.toString ()
}while (suma.length > 1)