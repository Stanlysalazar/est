export async function consultarCAnciones() {

    //consumir recetas para consumir APIS con js
    //1 Pa donde va
    //url+ ep del servicio
    const IDARTISTA = "5ZNxiPcbKgaNcBrERMpqeu"
    const URI = `https://api.spotify.com/v1/artists/${IDARTISTA}/top-tracks?market=us`
    const TOKEN = "Bearer "
    //que va a hacer
    //configuro la peticion
    let peticion = {
        method: "GET",
        headers:{
            "Authorization":TOKEN
        }
    }

    //utilice la promesa FETCH para ir al back y consumir el api
    let respuesta = await fetch(URI,peticion)
    let canciones=await respuesta.json()

    return canciones

}