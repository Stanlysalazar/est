import axios from "axios"


export async function consultarConAxios(){


//URI = URL + EPoint dle servicio
const IDARTISTA = "5ZNxiPcbKgaNcBrERMpqeu"
const URI = `https://api.spotify.com/v1/artists/${IDARTISTA}/top-tracks?market=us`
const TOKEN = "Bearer BQCR-VCp0kb8nm5kVEGsP5LCRYW9OUkLEr8KuzzDqPV6-m7wjM6K253bRJWb27EbvKjZnQk7KMaUPocKkmWnlbPheK6XkFuNs9vd-QWp643jQHnl1OU"

//construyo la peticion
const peticion={
    headers:{
        "Authorization":TOKEN
    }
}



//ordenar mi respuesta
try{
    //utilizamos la promesa encargada de consumir el API
    let respuesta = await axios.get(URI,peticion)
    let canciones = respuesta.data

    return canciones
}catch(e){

    throw new E("Ups fallamos" + e)

}

}
 //post para el token