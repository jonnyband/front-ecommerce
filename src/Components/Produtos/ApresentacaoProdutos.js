import React from "react";
import { AdicionarNoCarrinho } from "../Carrinho/AdicionarNoCarrinho"

export const Card = ({ product }) => {
    
    return (
        <>
        
        <img src={`data:image/png;base64,${product.imagem}`} />
        
        <div>
            <span>{product.nome}</span>
            <span>R${product.valorUnitario}</span>
            {/* <AdicionarNoCarrinho
            product={product}
            ></AdicionarNoCarrinho> */}
        </div>
        
        </>
    )
}