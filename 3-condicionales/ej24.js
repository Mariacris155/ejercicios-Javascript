let num = window.prompt("introduce un numero de tres cifras")

let num1 = parseInt(num.substring(0,1))
let num2 = parseInt(num.substring(1,2))
let num3 = parseInt(num.substring(2,3))

if (num1%2===0 && num2%2===0 && num3%2===0){
 window.alert ("todas las cifras son pares")
}else if (num1%2≠≠≠0 && num2%2≠≠≠0 && num3%2≠≠≠0){
    window.alert("todas las cifras son impares")
}else{
    window.alert("hat cifras pares e impares mezcladas")
}
