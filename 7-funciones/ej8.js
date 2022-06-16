let num1 = parseInt(window.prompt("introduce un numero"))

function numfactorial(num1){
    let resultado = 1
    for (let i = 1; i <= num1; i++) {
        
        resultado*=i
        
    }
    return resultado
}

window.alert(numfactorial(5))