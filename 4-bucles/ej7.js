
let suma = 0

do{

    let num = parseInt(window.prompt("introduce un numero"))

    num > 0
    ? suma += num
    : num === 0
     ? window.alert(suma)
     : window.alert("no se aceptan numeros negativos")

}while (num ≠ 0)