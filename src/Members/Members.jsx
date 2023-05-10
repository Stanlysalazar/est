import './Menber.css'
import { Footer } from "../Footer/Footer"
import 'animate.css'
import WOW from 'wow.js'
import { useEffect } from 'react'
export function Members() {

     useEffect(function(){
        const wow = new WOW()
        wow.init()
    },[])
    
    

    let integrantes = [
        {
            nombre: "Jon Bon Jovi ( Jon Francis Bongiovi Jr.) ",
            rol: "Líder, vocalista, guitarrista",
            foto: "https://firebasestorage.googleapis.com/v0/b/music-4fd4a.appspot.com/o/Men1.jpg?alt=media&token=b02d6833-d970-4418-89be-09879ae992bf",
            nacimineto: "2 de marzo de 1962(50 años)",
            id: 1

        },

        {
            nombre: "Richie Sambora",
            rol: "Teclista, pianista",
            foto: "https://firebasestorage.googleapis.com/v0/b/music-4fd4a.appspot.com/o/Men2.jpg?alt=media&token=21cefc50-bc7e-408c-82f0-fab3df183263",
            nacimineto: "11 de julio de 1959 (53 años)",
            id: 2
        },
        {
            nombre: "David Bryan ( David Bryan Rashbaum)",
            rol: "Batería, percusionista",
            foto: "https://firebasestorage.googleapis.com/v0/b/music-4fd4a.appspot.com/o/Men3.jpg?alt=media&token=ffc8f89c-a46b-40d0-98f5-ae5729ea79b4",
            nacimineto: "7 de febrero de 1962(50 años)",
            id: 3
        },
        {
            nombre: "Tico Torres (Héctor Samuel Juan Torres)",
            rol: "Bajista",
            foto: "https://firebasestorage.googleapis.com/v0/b/music-4fd4a.appspot.com/o/Men4.jpg?alt=media&token=f885be31-ae9a-4e0e-a5b4-4b75c5f14842",
            nacimineto: "7 de octubre de 1953(58 años)",
            id: 4
        },
        {
            nombre: "Hugh McDonald (Hugh John McDonald)",
            rol: "Guitarrista",
            foto: "https://firebasestorage.googleapis.com/v0/b/music-4fd4a.appspot.com/o/Men5.jpg?alt=media&token=512bcf23-c4a4-46d6-a744-f3f1e3f97a64",
            nacimineto: "28 de diciembre de 1950 (60 años)",
            id: 5
        }
    ]
    function quehagocuandosedeelevento(evento){
       (evento.target.classList.add("black"))
    }
    function cambio(evento){
       (evento.target.classList.remove("black"))
    }
   

    return (
        <>
        <br />
            <div className="row row-cols-1 row-cols-md-5 g-3 wow animate__animated animate__backInLeft">
                {
                    integrantes.map(function (integrante) {
                        return (
                            <div key={integrante.id}>
                                <div className="col">
                                    <div className="card h-100 shadow">
                                        <h3 className="text-center fw-bold">{integrante.nombre}</h3>
                                        <br />
                                        <img src={integrante.foto} alt="foto" className="img-fluid w-100 " onMouseOver={quehagocuandosedeelevento} onMouseLeave={cambio} />
                                        <br />
                                        <h5 className="text-center fw-bold">ROL: {integrante.rol}</h5>
                                        <br />
                                        <h5 className="text-center fw-bold">Nacimiento: {integrante.nacimineto}</h5>
                                    </div>
                                </div>
                            </div>

                        )
                    })
                }
            </div>
                    <br />
                <section>
                    <Footer/>
                </section>

        </>
    )
}