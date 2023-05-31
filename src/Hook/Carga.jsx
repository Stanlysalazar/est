import './carga.css'
import { useState, useEffect } from "react"
export function Carga() {


    const [estacargando, setEstacargardo] = useState(true)
    const [tiempo, setTiempo] = useState(0)



    useEffect(function () {
        if(tiempo>0){

            setEstacargardo(false)
        }else{
            setEstacargardo(true)
        }

    }, [tiempo])


    setTimeout(function(){
        setTiempo(1)
    },4000)

    if(estacargando){
        return(
            <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3 className="text-center fw-bold" id="an">Estamos cargando</h3>
                        <img src="../../src/assets/img/giphy.gif"  className="img-fluid mx-auto d-block" />
                    </div>
                </div>
            </div>
            </>
        )
    }else{
        return(
            <>
            <h4 className="text-center fw-bold" id="an">Carga completa</h4>
            </>
        )
    }


}