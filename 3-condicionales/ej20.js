let temperatura = ParseFloat (window.prompt ("introduce la temperatura"))
let simbolo = window.prompt (`indica en que quieres convertirlos :
C = centigrados
F = farenheit`). toUpperCase

switch (simbolo){
    case "C":
    window.alert (`$(temperatura)F serian $(temperatura-32)*5/9)C`)
    case "F":
    window.alert (`$(temperatura)F serian $(temperatura*9/5)+32)F`)
}

