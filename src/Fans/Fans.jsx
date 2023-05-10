import './Fans.css'
import {Footer} from '../Footer/Footer'
import 'animate.css'
import WOW from 'wow.js'
import { useEffect } from 'react'
export function Fans() {
    useEffect(function(){
        const wow = new WOW()
        wow.init()
    },[])

    function  fan(){
        alert ("Eres un fan de BON JOVI")
    }

    return (
        <>
            <section>
                <div className="container wow animate__animated animate__backInDown">


                    <form>

                        <legend className="text-center fw-bold">Registro de fans</legend>
                        <div class="my-3">
                            <label for="disabledTextInput" class="form-label">Nombre</label>
                            <input type="text" class="form-control" placeholder="Ingrese su nombre completo"  />
                        </div>
                        <div class="mb-3">
                            <label for="disabledSelect" class="form-label">Email</label>
                            <input type="text" class="form-control" placeholder="Ingrese su correo" />
                        </div>
                        <div class="mb-3">
                            <label for="disabledSelect" className="form-label">Cotraseña</label>
                            <input type="text" class="form-control" placeholder="Digite una contraseña" />
                        </div>
                        <div class="my-3">
                            <label for="disabledSelect" className="form-label">Email</label>
                            <input type="text" class="form-control" placeholder="Ingrese su fecha de nacimiento" />
                        </div>

                        <div className="my-3">
                            <label For="disableSelect" className='form-label'>1 pregunta</label>
                            <input type="text " class="form-control" placeholder="¿Cuál es el nombre del vocalista del Bon Jovi?"/>
                        </div>
                        <div className="my-3">
                            <label For="disableSelect" className='form-label'>2 pregunta</label>
                            <input type="text " class="form-control" placeholder="¿Cuál es el nombre del guitarrista de Bon Jovi?"/>
                        </div>
                        <div className="my-3">
                            <label For="disableSelect" className='form-label'>3 pregunta</label>
                            <input type="text " class="form-control" placeholder="¿De que ciudad es originaria la banda?"/>
                        </div>
                        <div className="my-3">
                            <label For="disableSelect" className='form-label'>4 pregunta</label>
                            <input type="text " class="form-control" placeholder="¿Cuál fue el primer disco de Jon como solista?"/>
                        </div>
                        <div className="my-3">
                            <label For="disableSelect" className='form-label'>5 pregunta</label>
                            <input type="text " class="form-control" placeholder="¿Cómo se llama el segundo albúm de Bon Jovi?"/>
                        </div>
                        <div class="mb-3">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="disabledFieldsetCheck" disabled />
                                <label class="form-check-label" for="disabledFieldsetCheck">
                                    No eres un Robbot
                                </label>
                            </div>
                        </div>
                        
                        <button type='submit' onClick={fan} id='but'>SUBMIT</button>

                    </form>
                </div>
            </section>
                    <br />
            <section>
                <Footer/>
            </section>
        </>
    )
}