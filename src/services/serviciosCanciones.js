export async function consultarCAnciones() {

    //consumir recetas para consumir APIS con js
    //1 Pa donde va
    //url+ ep del servicio
    const IDARTISTA = "58lV9VcRSjABbAbfWS6skp"
    const URI = `https://api.spotify.com/v1/artists/${IDARTISTA}/top-tracks?market=us`
    const TOKEN = "Bearer BQBG214HNqQcbniYVVM2ZfeWz86fxQPiVtuue0Vt4sthqo1Mg98e-UEAdyJs2POnm-lYF4eTugHQqBnc1rPMY9XiUSmSt9x3Uy7EQAzmQZpZyLcQ9H4"

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