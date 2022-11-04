import React from "react";
import { RemoverDoCarrinho } from '../Carrinho/RemoverDoCarrinho';

export const ApresentacaoCarrinho = (props) => {

    return (
        <>
        
        {props.lista.map((res) => (
            <RemoverDoCarrinho product={res}></RemoverDoCarrinho>
        ))}
        </>
    )
}