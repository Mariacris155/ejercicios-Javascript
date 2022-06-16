

do{

    let numero = parseInt(window.prompt("introduce un año"))
    window.alert(esBisiesto(numero) ?'el año es bisiesto' :'el año no es bisiesto')

}while(numero != 0)


function esBisiesto(ano) {
  return ((ano % 4 === 0 && ano % 100 != 0)|| % 400 === 0)
}