import 'animate.css'
import WOW from 'wow.js'
import { useEffect } from 'react'
export function History(){

    useEffect(function(){
        const wow = new WOW()
        wow.init()
    },[])

    return(
        <>
            <div className="container  wow animate__animated animate__backInDown">
                <div className="row">
                    <div className="col-12">
                        <h4 className="text-center fw-bold" id='zor'>Historia de la banda</h4>
                        <br />
                        <br />
                        <img src="https://firebasestorage.googleapis.com/v0/b/music-4fd4a.appspot.com/o/img2.jpg?alt=media&token=77888988-62d0-4a63-ab75-6378cc0bc305" alt="foto" className="img-fluid w-100"/>
                        <br />
                        <br />
                        <p>Bon Jovi es una banda estadounidense de rock formada en 1983 en Nueva Jersey por su líder y vocalista, Jon Bon Jovi. La formación actual la completan el teclista David Bryan, el batería Tico Torres, el bajista Hugh McDonald y el guitarrista Phil X. Este último sustituyó a Richie Sambora, quien abandonó la formación en 2013 debido a diferencias con sus compañeros, tras haber permanecido treinta años en ella. Es uno de los grupos de rock más exitosos de todos los tiempos, ha vendido más de 130 millones de discos y ofrecido más de 2800 conciertos en cincuenta países.2​3​ Además está considerado como un icono global de la música y forma parte del Salón de la Fama del Rock and Roll.4​5​

                        Debutaron en 1984 con su álbum homónimo, cuyo sencillo «Runaway» fue el primero en entrar al Billboard Hot 100. En 1986 se dieron a conocer internacionalmente con la salida de Slippery When Wet, que se convirtió en el álbum más vendido de 1987 en los Estados Unidos y supuso un gran triunfo a nivel mundial con veintiocho millones de copias vendidas calculadas hasta 2008. La crítica musical considera que este lanzamiento impulsó al glam metal a entrar en la corriente principal y consagrarse en las listas de ventas. En 1988 publicaron New Jersey, con el que obtuvieron un impacto similar. Durante esos años lograron colocar cuatro sencillos en la cima del Hot 100: «You Give Love a Bad Name», «Livin' on a Prayer» —designada la mejor canción de los ochenta por la cadena VH1—,6​ «Bad Medicine» y «I'll Be There for You».

                        En los años noventa se desmarcaron del sonido glam que les había caracterizado —género que decayó debido al auge del rock alternativo— y renovaron tanto su música como su vestuario. La salida de Keep The Faith en 1992 supuso una ruptura con el Bon Jovi de los ochenta, pero a pesar de recibir críticas por su cambio de estilo tuvo una buena acogida comercial y logró vender doce millones de ejemplares hasta 2002. En 1994 el recopilatorio Cross Road se convirtió en su segundo álbum más vendido con veintidós millones de copias, además obtuvieron cuatro discos de platino con su sencillo «Always». Con These Days (1995) orientaron su música hacia el pop rock contemporáneo, este álbum tuvo un buen recibimiento en Europa, Japón y Latinoamérica, pero no así en los Estados Unidos. En el año 2000 alcanzaron gran éxito y repercusión gracias al sencillo «It's My Life» del álbum Crush, que fue número uno en las listas de nueve países y consiguió diez discos de platino.</p>
                    </div>
                </div>
            </div>
        </>
    )

}