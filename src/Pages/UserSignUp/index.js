import React, { useState } from "react";
import { api } from "../../Service/api";
import { Container, Div } from "./styled";
import { postAddress, postUser} from "../../Service/userService";
import { Navbar } from "../../Components/Navegacao/Navbar";

export function SignUp(){



const [user, setUser] = useState(
  
  {
    email:'',
    nomeUsuario:'',
    nomeCompleto:'',
    cpf:'',
    telefone:'',
    dataNascimento:'',
    endereco:{
        id:''
    }
  });


const [address, setAddress] = useState( {
    id:'',
    cep:'',
    rua:'',
    bairro:'',
    cidade:'',
    numero:'',
    complemento:'',
    uf:''
});


const submitAddress = (e) =>{
e.preventDefault();
    postAddress(address).then(
        response => {
            setUser({...user, endereco:{id: response.data.id}})
        }
    ).catch(error=>{
        console.log(error);
    })
}

const submitUser = (e) =>{
  e.preventDefault();
    postUser(user).then(
     console.log("Usuario cadastrado com sucesso!") 
    ).catch(error=>{
      console.log(error);
  })

}

return(
  <>
  <Div>
  <Navbar/>
  </Div>
<Container>

<form onSubmit={submitUser}>
  <label >Nome de Usuário:</label><br></br>
  <input type="text" value={user.nomeUsuario} 
         onChange={(e)=>setUser({...user, nomeUsuario:e.target.value})}></input><br></br>
    <label >Email:</label><br></br>
  <input type="text" value={user.email} 
         onChange={(e)=>setUser({...user, email:e.target.value})}></input><br></br>
  <label for="lname">Nome Completo:</label><br></br>
  <input type="text" value={user.nomeCompleto}
  onChange={(e)=>setUser({...user, nomeCompleto:e.target.value})}></input><br></br>
  <label >CPF:</label><br></br>
  <input type="text" value={user.cpf} onChange={(e)=>setUser({...user, cpf:e.target.value})}></input><br></br>
  <label for="lname">Telefone:</label><br></br>
  <input type="text"  value={user.telefone} onChange={(e)=>setUser({...user, telefone:e.target.value})}></input><br></br>
  <label for="lname">Data de Nascimento:</label><br></br>
  <input type="text"  value={user.dataNascimento} onChange={(e)=>setUser({...user, dataNascimento:e.target.value})}></input><br></br>
  <input type="submit" value="Enviar"></input>
</form> 

<form onSubmit={submitAddress}>
  <label >CEP:</label><br></br>
  <input type="text" value={address.cep} onChange={(e)=>setAddress({...address, cep:e.target.value})}></input><br></br>
  <label for="lname">Número:</label><br></br>
  <input type="text" value={address.numero} onChange={(e)=>setAddress({...address, numero:e.target.value})}></input><br></br>
  <label >Complemento:</label><br></br>
  <input type="text" value={address.complemento} onChange={(e)=>setAddress({...address, complemento:e.target.value})}></input><br></br>
  <input type="submit" value="Enviar"></input>
</form> 

</Container>

</>

)
}