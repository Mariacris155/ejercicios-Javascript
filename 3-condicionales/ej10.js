let num1 = parseInt(Window.prompt("introduce un numero"))
let num2 = parseInt(Window.prompt("introduce otro numero"))

if (num1 === num2){
    console.log.apply("0")

}else if(num1%6 === num2%6){
    num1<num2
    ? console.log(`$(num1) es el menor`)
    : console.log(`$(num2) es el menor`)
}else{
    num1<num2
    ? console.log(`$(num1) es el mayor`)
    : console.log(`$(num2) es el mayor`)
}