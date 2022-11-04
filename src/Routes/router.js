import { Route, Routes } from "react-router-dom";
import { Contato } from "../Pages/Contato";
import { Carrinho } from "../Pages/Carrinho";
import { Sobre } from "../Pages/SobreNos"
import { Home } from "../Pages/Home";


export function Router() {

return(

<Routes>

    <Route path="/carrinho" element={<Carrinho/>}/>
    <Route path="/contato" element={<Contato/>}/> 
    <Route path="/sobre" element={<Sobre/>}/>
    <Route path="/" element={<Home/>}/>

</Routes>



)







}