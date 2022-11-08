import { Route, Routes } from "react-router-dom";
import { Carrinho } from "../Pages/Carrinho";
import { Sobre } from "../Pages/SobreNos"
import { Home } from "../Pages/Home";
import { SignUp } from "../Pages/UserSignUp";
import { Login } from "../Pages/Login/login"
import { UserMenu } from "../Pages/UserMenu";


export function Router() {

return(

<Routes>

    <Route path="/carrinho" element={<Carrinho/>}/> 
    <Route path="/sobre" element={<Sobre/>}/>
    <Route path="/cadastro" element={<SignUp/>}/>
    <Route path="/menu" element={<UserMenu/>}/>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>

</Routes>



)







}