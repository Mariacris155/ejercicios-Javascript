let dia =window.prompt("introduce un dia de la semana").toLowerCase()

if (dia === "lunes" || dia === "martes" || dia === "miercoles" || dia === "miércoles" || dia === "jueves" || dia === "viernes"){
    console.log(` es $(dia)`)
} else if ( dia ==="sabado"|| dia ==="sábado" ||dia ==="domingo"){
    console.log(` es fin de semana!`)
}else{
    console.log("eso no es un dia de la semana")
}

 