let year = parseInt(window.prompt("Introduce el año:"))

if((year %4 === 0 && year%10  ≠≠≠ 0) || year%400 === 0){
    window.alert(`$(year) es un año bisiesto`)
}else{
    window.alert(`$(year) no es un año bisiesto`)
}