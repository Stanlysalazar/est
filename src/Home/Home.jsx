import './Home.css'
import { Footer } from '../Footer/Footer'
import { History } from '../History/History'
import 'animate.css'
import WOW from 'wow.js'
import { useEffect } from 'react'
export function Home(){

    useEffect(function(){
        const wow = new WOW()
        wow.init()
    },[])
    return(
        <>
            <section className="banner">

            </section>
            <section>
                <div className="container my-5 wow animate__animated animate__backInDown">
                    <div className="row">
                        <div className="col-12 col-md-6 animate__animated animate__flash">
                            <h4 className="text-center fw-bold" id='zor'>Historias</h4>
                            <p>
                            John Bongiovi y David Raschbaum se conocieron en el instituto de Sayreville (Nueva Jersey). Los dos solían ensayar juntos después de clase y en 1978 formaron el conjunto escolar de rythm & blues Atlantic City Expressway, en el que versionaban a otros artistas.7​ Comenzaron actuando en bailes escolares y algunos bares locales, pero pronto se ganaron cierta reputación en los clubes de South Jersey. A finales de 1979 Raschbaum ingresó al conservatorio Juilliard de Nueva York para estudiar música, mientras que Bongiovi se unió a The Rest, que le dio la oportunidad de escribir y tocar sus propias canciones, en este caso más orientadas al hard rock. Uno de esos temas, «Shot Through The Heart» —coescrito junto con su compañero y líder del grupo Jack Ponti— formaría parte del primer álbum de Bon Jovi. El mayor logro de The Rest fue hacer de teloneros para Hall & Oates en Nueva Jersey, ante un aforo de 20 000 espectadores. Sin embargo, frustrado por la falta de interés de las discográficas, Jack Ponti decidió disolverlo
                            </p>


                            <img src="https://firebasestorage.googleapis.com/v0/b/music-4fd4a.appspot.com/o/banda1.jpg?alt=media&token=6be8b326-ff75-4fcc-bd03-4158fbb1f219" alt="foto" className='img-fluid w-100'/>
                            <br />
                        </div>
                        <div className="col-12 col-md-6">
                            <img src="https://firebasestorage.googleapis.com/v0/b/music-4fd4a.appspot.com/o/banda4.jpg?alt=media&token=b50358f2-04b2-43d1-b278-9a9104c62010" alt="foto" className='img-fluid w-100' />
                            <p>Quien sí se interesó en él fue Chip Hobart, director de un programa de radio en la emisora neoyorquina WAPP, que incluyó el tema «Runaway» en su álbum de promoción de artistas locales Home Grown de 1982. La canción resultó ser un éxito y pronto comenzó a reproducirse en emisoras de todo el país.8​3​11​ Esto llamó la atención de las grandes discográficas como Atlantic o PolyGram, y finalmente firmó su primer contrato con esta última. El único problema era que el nombre Bongiovi sonaba demasiado italiano, por lo que la compañía le sugirió que buscase algo más comercial, así que escogió Jon Bon Jovi como su nombre artístico.8​10​ Para formar la banda, primero reclutó al teclista David Raschbaum —que más adelante adquirió el nombre artístico de David Bryan—,12​ después llegó Alec John Such, bajista de The Message, quien a su vez recomendó contratar al batería cubano Tico Torres, que ya tenía una larga trayectoria profesional.13​ Dave Sabo ocupó inicialmente el puesto de guitarrista, pero pronto lo sustituyó Richie Sambora,1​ antiguo compañero de Such en The Message..</p>
                            <br />
                        </div>
                        <div className="col-12 col-md-6">
                            <p>En los años noventa se desmarcaron del sonido glam que les había caracterizado —género que decayó debido al auge del rock alternativo— y renovaron tanto su música como su vestuario. La salida de Keep The Faith en 1992 supuso una ruptura con el Bon Jovi de los ochenta, pero a pesar de recibir críticas por su cambio de estilo tuvo una buena acogida comercial y logró vender doce millones de ejemplares hasta 2002. En 1994 el recopilatorio Cross Road se convirtió en su segundo álbum más vendido con veintidós millones de copias, además obtuvieron cuatro discos de platino con su sencillo «Always». Con These Days (1995) orientaron su música hacia el pop rock contemporáneo, este álbum tuvo un buen recibimiento en Europa, Japón y Latinoamérica, pero no así en los Estados Unidos.En el año 2000 alcanzaron gran éxito y repercusión gracias al sencillo «It's My Life» del álbum Crush, que fue número uno en las listas de nueve países y consiguió diez discos de platino.</p>
                            <img src="https://firebasestorage.googleapis.com/v0/b/music-4fd4a.appspot.com/o/banda3.png?alt=media&token=ec630017-514d-4978-90bb-9ac969c03d57" alt="foto" className='img-fluid w-100' />
                            <br />
                        </div>
                        <div className="col-12 col-md-6">
                            <img src="https://firebasestorage.googleapis.com/v0/b/music-4fd4a.appspot.com/o/banda2.jpg?alt=media&token=4136c436-5419-4105-b3a3-e5982b2c527b" alt="foto" className='img-fluid w-100' />
                            <p>Durante la década de los dos mil publicaron varios álbumes de menor calado comercial que sus predecesores, algunos de corte positivo y festivo como Lost Highway (2007) y otros de una temática más seria como Bounce (2002) —en el que hablan de la tragedia del 11-S—, Have A Nice Day (2005) o The Circle (2009) —en los que reflexionan sobre temas de carácter social como la Gran Recesión de 2008 o los problemas de la clase trabajadora—. En los años dos mil diez continuaron por la senda de los temas sombríos y la reflexión social e incluso política, especialmente con What About Now (2013) y 2020 (2020), mientras que con This House Is Not For Sale (2016) se centraron más en hablar de sí mismos. Por otra parte, en 2007 obtuvieron su primer y único premio Grammy a la mejor colaboración vocal country por el sencillo «Who Says You Can't Go Home?», interpretado junto con Jennifer Nettles.</p>
                            <br />
                        </div>
                        
                    </div>
                </div>
            </section>
            <section className="banner2"></section>
            <section className='my-5'>
                <History/>
                
            </section>
            
            <section className='my-5'>
                <Footer/>
            </section>
        </>
    )
}