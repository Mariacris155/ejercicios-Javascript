let manzana = 0
let pescado = 0
let leche = 0
let carne = 0

function modificar(direccion, producto){
    if (producto === "carne"){
        direccion === "+"
        ?carne++
        :carne--

    }else if(producto === "manzana"){
        direccion === "+"
        ?manzana++
        :manzana--
    }else if(producto === "pescado"){
        direccion === "+"
        ?pescado++
        :pescado--
    }else {
        direccion === "+"
        ?leche++
        :leche--
    }

}

function cesta(){
    let impresion = ""
        if(manzana>0){
            let manzanaPic =""
            for (let i = 0; i < manzana; i++) {
                manzanaPic += `<img src="iconos/manzana.png" width="50px" />`   
            }
            impresion +=`<h5>Manzana</h5><p>$(manzana)$(manzanaPic)</p>`}
        if(carne>0){
            let carnePic =""
            for (let i = 0; i < carne; i++) {
                carnePic += `<img src="iconos/carne.png" width="50px" />`
            }
            impresion+=`<h5>carne</h5><p>$(carne)$(carnePic)</p>`}
        if(pescado>0){
            let pescadoPic =""
            for (let i = 0; i < pescado; i++) {
                pescadoPic += `<img src="iconos/pescado.png" width="50px" />`
            }
            impresion+=`<h5>pescado</h5><p>$(pescado)$(pescadoPic)</p>`}

        if(leche>0){
            
            let lechePic =""
            for (let i = 0; i < leche; i++) {
                lechePic += `<img src="iconos/leche.png" width="50px" />`
                
            }
            impresion+=`<h5>leche</h5><p>$(leche)$(lechePic)</p>`
}
document.getElementById('cesta').innerHTML =`<h5>Carne</h5><p>$(carne)</p>
<h5>Pescado</h5><p>$(pescado)</p>
<h5>Leche</h5><p>$(leche)</p>
<h5>Manzana</h5><p>$(manzana)</p>`
}