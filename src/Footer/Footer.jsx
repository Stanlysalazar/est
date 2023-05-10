
import './Footer.css'
import 'animate.css'
import WOW from 'wow.js'
import { useEffect } from 'react'

export function Footer() {

  useEffect(function(){
    const wow = new WOW()
    wow.init()
},[])
  return (
    <>
      <body>
        <div class="footer-content wow animate__animated animate__backInDown">
            <h3>BON JOVI</h3>
            <p> Crearon Bon Jovi, un nombre fácil de memorizar. fue incluido en el Salón de la Fama de la Música del Reino Unido en 2006 y en el Salón de la Fama del Rock and Roll de EE. UU. en 2018.</p>
            <img src="https://firebasestorage.googleapis.com/v0/b/music-4fd4a.appspot.com/o/logo.jpg?alt=media&token=fe18df38-3c86-4cf7-9a7e-07e45504f3c4" alt="" />
            <ul id="social_btns">
            <li id="btn_facebook"><a href="https://www.facebook.com/BonJovi/" target="_blank">Facebook</a></li>
            <li id="btn_instagram"><a href="https://www.instagram.com/bonjovi/" target="_blank">Instagram</a></li>
            <li id="btn_twitter"><a href="https://twitter.com/bonjovi" target="_blank">Twitter</a></li>
            <li id="btn_youtube"><a href="https://www.youtube.com/user/bonjovi" target="_blank">YouTube</a></li>
        </ul>
        </div>
        <div class="footer-bottom">
            <p>copyright &copy;2020 codeOpacity. designed by <span>nethunt</span></p>
        </div>

      </body>
   
   


            
    </>
  )
}
