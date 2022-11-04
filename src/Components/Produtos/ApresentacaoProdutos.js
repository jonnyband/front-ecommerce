import React from "react";
import { AdicionarNoCarrinho } from "../Carrinho/AdicionarNoCarrinho"

export const Card = ({ product }) => {
    
    return (
        <>
        
        <img className="topCardImage" src={product.nomeImagemProduto} />
        
        <div className="card">
            <span>{product.nomeProduto}</span>
            <span>R${product.valorUnitario}</span>
            <AdicionarNoCarrinho
            product={product}
            ></AdicionarNoCarrinho>
        </div>
        
        </>
    )
}