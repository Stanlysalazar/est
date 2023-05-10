import { Route, Routes } from "react-router-dom"
import { Carga } from "../Hook/Carga"
import {Home} from "../Home/Home"
import {Members} from "../Members/Members"
import{Menu} from "../shared/Menu/Menu"
import { Shop } from "../Shop/Shop"
import { Fans } from "../Fans/Fans"

export function Rutas(){
    return(
        <>
        <Menu/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/integrantes" element={<Members />} />
            <Route path="/tienda" element={<Shop />} />
            <Route path="/Fans" element={<Fans />} />
            <Route path="/Hook" element={<Carga />} />
        </Routes>
        
        </>
       
        
        
    )
}