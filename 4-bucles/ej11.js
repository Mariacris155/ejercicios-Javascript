do {
 let numero = window.prompt("introduce un numero")
 let inverso = ""

 for (let i = 0; i< numero.length; i++){

        inverso+= numero.substring(numero.length - 1, (numero.length - i) + 1)
 }

 console.log(inverso)

}while (numero != "0")