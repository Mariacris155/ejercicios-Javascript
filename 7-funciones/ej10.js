
let opcion = window.prompt(`de que figura quieres calcular el área?:
1-circulo, 
2-cuadrado  
3-triangulo`)

if(opcion === "1"){
    let radio = parseInt(window.prompt("introduce el radio de tu circulo"))
    window.alert(areaCirculo(radio))

}else if(opcion === "2"){
    let lado = parseInt(window.prompt("introduce el lado de tu cuadrado"))
    window.alert(areaCuadrado(lado))

}else if(opcion === "3"){
    let base = parseInt(window.prompt("introduce la base de tu triangulo"))
    let altura = parseInt(window.prompt("introduce la base de tu triangulo"))
    window.alert(areaTriangulo(base,altura))


}else{
    window.alert("No se puede")
}



function areaCirculo(radio) {
    return parseInt ((radio*2)*3.14)
    
}

function areaCuadrado(lado) {
    return parseInt(lado**2)
}

function areaTriangulo(base, altura) {
    return parseInt((base*altura)/2)
    
}