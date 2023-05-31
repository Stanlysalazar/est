import './Music.css'
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

const renderTrackImage = (track) => {
    let imgs = track?.album?.images;
    return (
      imgs?.length !== 0 && (
        <img
          key={imgs[1]?.url}
          src={imgs[1]?.url}
          width={imgs[1]?.width}
          height={imgs[1]?.height}
        />
      )
    );
  };

if(estacargando){
    return(
    <>
    <h1>estot cargando</h1>
    
    </>
        
    )
}else{
return(
<>

<br />
              <br />

              <div className="container" id='put'>
                <div className="row row-cols-1 row-cols-md-3 g-3 " >
                    {
                        
                        canciones.map(function(cancion){
                            return(
                                <>
                                <div className="col music-card">
                                    <div className="card h-100 shadow text-align-center  ">
                                    <h5 className="text-center fw-bold" id="an">Cancion: {cancion.name}</h5>
                                    <p id='aaa'>

                                    {renderTrackImage(cancion) }
                                    </p>
                                    <audio controls src={cancion.preview_url}></audio>
                                    <p className="text-center fw-bold" id='perr'>albun: {cancion.album.name} </p>
                                    <p  className="text-center fw-bold" id='perr'>duracion: {cancion.duration_ms}</p>
                                    <p  className="text-center fw-bold" id='perr'>popularidad: {cancion.popularity}</p>
                                    </div>
                                </div>
                                </>
                            )
                        })
                    }
                    
                </div>
              </div>

</>
)
}
}



    
        