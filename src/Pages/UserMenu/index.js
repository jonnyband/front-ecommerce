import { useState, useEffect } from "react";
import { getUserByID, deleteUser } from "../../Service/userService";
import { Container } from "./styled";


export function UserMenu(){
    const [user,setUser] = useState({

    })

useEffect(()=>{

    getUserByID(localStorage.getItem('id')).then(
    response => {
        setUser(response.data)
        console.log(response.data)
    }
).catch(error=>{
    console.log(error);
})


}, [])


function formatDate(date){

    let datia = new Date(date)
    return `${datia.getDate()}/${datia.getMonth()}/${datia.getFullYear()}`

}


function deleteU(id){
    deleteUser(id).then(
        response => {
            navigator('/')
        }
    ).catch(error => console.log(error))

}

  


    return(
        <Container>
            <h1>{user?.nomeCompleto}</h1>
            <h4>nome de Usuario: {user?.nomeUsuario ?? "Carregando"}</h4>
            <h4>cpf: {user?.cpf ?? "Carregando"}</h4>
            <h4>telefone: {user?.telefone ?? "Carregando"}</h4>
            <h4>data de nascimento: {formatDate(user?.dataNascimento) ?? "Carregando"}</h4>
            {/* <h4>cep: {user?.endereco.cep ?? "Carregando"}</h4>
            <h4>rua: {user?.endereco.rua ?? "Carregando"}</h4>
            <h4>bairro: {user?.endereco.bairro ?? "Carregando"}</h4>
            <h4>cidade: {user?.endereco.cidade ?? "Carregando"}</h4>
            <h4>numero: {user?.endereco.numero ?? "Carregando"}</h4>
            <h4>complemento: {user?.endereco.complemento ?? "Carregando"}</h4>
            <h4>uf: {user?.endereco.uf ?? "Carregando"}</h4> */}
         <button onClick={()=>deleteU(user?.id)}>Apagar conta</button>
        </Container>
        
    )
}