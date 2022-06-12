let num1 = parseInt(window.prompt("introduce un numero"))
let num2 = parseInt(window.prompt("introduce otro numero"))
let num3 = parseInt(window.prompt("introduce un tercer numero"))

if (Math.abs(num1 - num2) === 20) {
    console.log(` Entre $(num1) y $(num2) hay una diferencia de 20`)
}else if(Math.abs(num1-num3) === 20) {
    console.log(` Entre $(num1) y $(num3) hay una diferencia de 20`)
}else if(Math.abs(num2-num3) === 20){
    console.log(` Entre $(num2) y $(num3) hay una diferencia de 20`)
}else
    console.log("no hay ninguna diferencia de 20 entre los tres umeros")

    