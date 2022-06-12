let edad = window.prompt("introduce tu edad")

if (edad >= 18){
    let carnet = window.prompt("¿Tienes carnet de conducir?").toLowerCase ()
    if (carnet = "si"){
        let persona = window.prompt("introduce tu nombre y apellidos")
        let ciudad = window.prompt("¿donde quieres recoger el coche?")
        let duracion = window.prompt("¿cuantos dias quieres el coche?")
        let semanas = parseInt(duracion/7)

        window.alert(`correcto: $(persona). Puedes recoger tu coche en $(ciudad) para los proximos $(duracion) dias
        El coste del alquiler sera de $(semanas>1? semanas *150 + (duracion - semanas*7)*25) : duracion*25)`)
    }else {
        window.prompt("No puedes alquilar sin carnet de conducir")
    }
} else {
  window.alert("No puedes alquilar siendo menor de edad")
 }

