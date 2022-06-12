let nombre = window.prompt ("introduce tu nombre")
let ventas =parseInt(window.prompt("introduce la cantidad de ventas"))

ventas > 500

? window.alert(`$(nombre) has superado el objetivo con tus $(ventas) datos de venta
 y por tanto te llevas una comision de $(ventas*0.05)€ en total te llevas $(ventas) + (entas*0.05)`)
: window.alert(`$(nombre) no has superado el objetivo con tus $(ventas) intenta hacerlo mejor la proxima vez`)