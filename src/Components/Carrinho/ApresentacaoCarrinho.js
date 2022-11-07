import React, { useContext, useState } from "react";
import { RemoverDoCarrinho } from '../Carrinho/RemoverDoCarrinho';
import {Context} from '../../Contexts/';
import { Container } from "./styled";



export const ApresentacaoCarrinho = () => {

const {cart,addAmount} = useContext(Context)

const [order, setOrder] = useState(
    {
        status:'',
        cliente:{id:''},
        listaItemPedido:[
            cart
        ]
    }
)

function setAmount(e,c){

    addAmount(e, c)
    console.log(cart)
}


    return (
        <>

        {cart.map((c) => (

<Container key={c.produto.id}>
        
<img src={`data:image/png;base64,${c.produto.imagem}`} />

<div>
   
    <h3>{c.produto.nome}</h3><br></br>
    
    
</div>
<h3>R${c.produto.valorUnitario}</h3>
<h3>Quantidade</h3>
<form>
  <select value={c.quantidade} onChange={(e)=>setAmount(e,c)}>
       {Array.from({length: c.produto.quantidadeEstoque},(_,i)=><option  
       >{i+1}</option>)}
  </select>
</form>
<RemoverDoCarrinho item={c}></RemoverDoCarrinho>

</Container>
        
        ))}
        </>
    )
}