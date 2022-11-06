import React, { useContext, useState } from "react";
import { RemoverDoCarrinho } from '../Carrinho/RemoverDoCarrinho';
import {Context} from '../../Contexts/';
import { Container } from "./styled";

export const ApresentacaoCarrinho = () => {

const {cart} = useContext(Context)



    return (
        <>
       
        
        {cart.map((res) => (

<Container key={res.id}>
        
<img src={`data:image/png;base64,${res.imagem}`} />

<div>
   
    <h3>{res.nome}</h3><br></br>
    
    
</div>
<h3>R${res.valorUnitario}</h3>
<h3>Quantidade</h3>
<form>
  <select>
       {Array.from({length: res.quantidadeEstoque},(_,i)=><option value={i+1}>{i+1}</option>)}
  </select>
</form>
<RemoverDoCarrinho product={res}></RemoverDoCarrinho>

</Container>
        
        ))}
        </>
    )
}