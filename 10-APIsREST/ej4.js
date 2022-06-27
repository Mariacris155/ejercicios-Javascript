//https://rickandmortyapi.com/api/location

fetch("https://rickandmortyapi.com/api/location")
.then((respuesta)=>respuesta.json())
.then((datos)=>{
    let opciones = `<option selected="selected">
    selecciona una opcion
    </option>`
    for (let i = 0; i < datos.results.length; i++) {
        
        if (datos.results[i].type === "planet"){
            opciones+=`<option value"${datos.results[i].id}>${datos.results[i].name}</option>`
        }
        
    }
    document.getElementById("selector").innerHTML = opciones
})

fetch("https://rickandmortyapi.com/api/location").then((respuesta)=>respuesta.json()).then((datos)=>{})

function avisar(event){
  window.alert(event.target.value)
    

}
function pedir(event){
    fetch(`https://rickandmortyapi.com/api/location/${event.target.value}`)
    .then((respuesta)=>respuesta.json())
    .then((datos)=>{
        let arrayRespuesta = datos.residents
    })
 Promise.all(arrayRespuesta.map(url=> fetch(url))).then(jsonrecibidos => Promise.all(jsonrecibido => jsonrecibido.json()))

 .then(datos=> {
    let lista = ""
    datos.forEach(
        (objeto) => {
            lista+= `<li>${objeto.name}</li>`
        }
    )
    document.getElementById("respuesta").innerHTML = `<ul>${lista}</ul>`
 })
 
}