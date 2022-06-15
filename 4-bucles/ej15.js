let contrasena = window.prompt("introduce una contraseña")

if (contrasena.length >= 8){

        for (let i = 0; i < 10; i++) {
          if(contrasena.includes(i.toString())){
            numero = true
          }
            
        }
if (numero){
    if (contrasena.substring(0,1) === contrasena.substring(0,1).toUpperCase()){

    }else{
        console.log("La contraseña no cumple los requisitos")
    }

}else{
    console.log("La contraseña no cumple el requisito")
}

}else{
    console.log ("La contraseña no cumple los requisitos")

}