import { consultarCAnciones } from "../services/serviciosCanciones"
import { useEffect, useState } from "react"


export function Music(){
    const [canciones,setcancions]=useState(null)
const [estacargando, setEstacargando]= useState(true)

useEffect(function(){

    consultarCAnciones().then(function(respuesta){

        setcancions(respuesta.tracks)
        setEstacargando(false)
        console.log(respuesta)
    })
    

},[])

if(estacargando){
    return(
    <>
    <h1>estot cargando</h1>
    
    </>
        
    )
}else{
return(
<>
{
    canciones.map(function(cancion){
        return(
            <audio controls src={cancion.preview_url}></audio>
        )
    })
}

</>
)
}
}



    
        