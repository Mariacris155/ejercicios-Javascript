let frase = window.prompt ("introduce una frase")

frase.length%2 === 0

?console.log(frase.substring(frase.length/2,frase.length/2+1)) 
:console.log(frase.substring(parseIn(frase.length/2), parseIn(frase.length/2+1)))