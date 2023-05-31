import { Carousel } from "../carrucel/carrucel"
import { Footer } from "../Footer/Footer"
import './Shop.css'
import 'animate.css'
import WOW from 'wow.js'
import { useEffect } from 'react'

export function Shop(){


    useEffect(function(){
        const wow = new WOW()
        wow.init()
    },[])
        let productos = [
            {
                nombre: "El mejor bon jovi 79 Mochila saco ",
                foto: "https://firebasestorage.googleapis.com/v0/b/music-4fd4a.appspot.com/o/pro.jpg?alt=media&token=f4913609-535f-427e-81d1-4e7aea4b1f98",
                precio: "40,59",
                id: 1
    
            },
    
            {
                nombre: "Bon Jovi Wanted Dead or Alive Gift Fan Camiseta esencial",
                
                foto: "https://firebasestorage.googleapis.com/v0/b/music-4fd4a.appspot.com/o/pro1.jpg?alt=media&token=73ca26ab-938b-4bd5-b8a1-155d5afb3204",
                precio: "21,36",
                id: 2
            },
            {
                nombre: "viviendo en una oración - Bon Jovi Camiseta clásica",
                
                foto: "https://firebasestorage.googleapis.com/v0/b/music-4fd4a.appspot.com/o/pro2.jpg?alt=media&token=9e55ad58-a6ff-4cf3-81c0-7c96a50d242d",
                precio: "18,31 ",
                id: 3
            },
            {
                nombre: "Nueva Jersey VS Todos Jon Bon Jovi Camiseta clásica",
                
                foto: "https://firebasestorage.googleapis.com/v0/b/music-4fd4a.appspot.com/o/pro3.jpg?alt=media&token=0a033dff-f7d7-49dd-a184-a508e8b540c7",
                precio: "20,60",
                id: 4
            },
            {
                nombre: "Bon Jovi - Canciones Camiseta clásica",
                
                foto: "https://firebasestorage.googleapis.com/v0/b/music-4fd4a.appspot.com/o/pro4.jpg?alt=media&token=ac0e8a18-9bd8-43df-8f53-f70ace6db133",
                precio: "20,75",
                id: 5
            },
            {
                nombre: "La Leyenda - Bon Jovi Camiseta clásica",
                
                foto: "https://firebasestorage.googleapis.com/v0/b/music-4fd4a.appspot.com/o/pro5.jpg?alt=media&token=975ecebb-a7ce-44ca-a803-58adc27e7e0c",
                precio: "21,36",
                id: 6
            }

        ]
    return(
        <>
        <section>
            <Carousel/>
        </section>
        <br />

            <h3 className="text-center fw-bold" id="an">Productos</h3>
         <div className="slider    ">

            <img src="https://firebasestorage.googleapis.com/v0/b/music-4fd4a.appspot.com/o/pro.jpg?alt=media&token=f4913609-535f-427e-81d1-4e7aea4b1f98"/>
            <img src="https://firebasestorage.googleapis.com/v0/b/music-4fd4a.appspot.com/o/pro1.jpg?alt=media&token=73ca26ab-938b-4bd5-b8a1-155d5afb3204"/>
            <img src="https://firebasestorage.googleapis.com/v0/b/music-4fd4a.appspot.com/o/pro2.jpg?alt=media&token=9e55ad58-a6ff-4cf3-81c0-7c96a50d242d"/>
            <img src="https://firebasestorage.googleapis.com/v0/b/music-4fd4a.appspot.com/o/pro3.jpg?alt=media&token=0a033dff-f7d7-49dd-a184-a508e8b540c7"/>
            <img src="https://firebasestorage.googleapis.com/v0/b/music-4fd4a.appspot.com/o/pro4.jpg?alt=media&token=ac0e8a18-9bd8-43df-8f53-f70ace6db133" />
            <img src="https://firebasestorage.googleapis.com/v0/b/music-4fd4a.appspot.com/o/pro5.jpg?alt=media&token=975ecebb-a7ce-44ca-a803-58adc27e7e0c" />
            
            
           
        </div> 
        <br />
            <div className="row  row-cols-1 row-cols-md-3 g-3  wow animate__animated animate__backInDown">{
                productos.map(function(producto){
                    return(
                        <div key={producto.id}>
                                <div className="col">
                                    <div className="card h-100 shadow">
                                        <h3 className="text-center fw-bold" id="an">{producto.nombre}</h3>
                                        <br />
                                        <img src={producto.foto} alt="foto" className="img-fluid w-100 " />
                                        <br />
                                        <h5 className="text-center fw-bold">USD {producto.precio}</h5>
                                        
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