let posicion = parseInt(Window.prompt("introduce tu posicion"))

posicion === 1
? console.log("ganaste")
: console.log("Lo importante es participar")

if(posicion === 1) {
    console.log ("medalla de oro")
}else if(posicion === 2) {
    console.log("medalla de plata")
}else if(posicion === 2) {
    console.log("medalla de plata")
}else{
    console.log ("lo importante es participar")
}

switch (posicion){ 
    case 1:
        console.log ("medalla de oro")
        break
    case 2:
        console.log("medalla de plata")
        break
    case 3:
        console.log("medalla de plata")
        break
    case 4:
        console.log ("lo importante es participar")
}

if (posicion > 0 && posicion <= 3){
    console.log("sube al podio")
}else {
    console.log("lo importante es participar")
}