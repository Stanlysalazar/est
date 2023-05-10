import {useState, useEffect} from "react"

export function Hook() {

    //antes del retorno configuramos nuestras variables de estado

    const [contador,ser]=useState(0)


    //programando el detector de ejucuciones
    useEffect(function(){
        
        ser(contador+1)
    
    },[])

    //funcion para deceir que hacer cuando le de clic al boton

    function incrementar(){
        ser(contador+1)
    }
   
    
    return (

        <>

            <div className="container my-5">
                <div className="row">
                    <div className="col">
                        <button tipe="button" className="btn btn-primary" onClick={incrementar}>clic</button>
                        <h2>La cuenta va: {ser}</h2>
                    </div>
                </div>
            </div>

        </>
    )
}