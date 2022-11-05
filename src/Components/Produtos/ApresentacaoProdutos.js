import React from "react";
import { AdicionarNoCarrinho } from "../Carrinho/AdicionarNoCarrinho"
import { Container } from "./styled";

export const Card = ({ product }) => {
    
    return (
        <Container>
        
        <img src={`data:image/png;base64,${product.imagem}`} />
        
        <div>
            <h1>{product.nome}</h1><br></br>
            <span>{product.descricao}</span><br></br>
            <h2>R${product.valorUnitario}</h2>
            <button>Comprar</button>
            {/* <AdicionarNoCarrinho
            product={product}
            ></AdicionarNoCarrinho> */}
        </div>
        
        </Container>
    )
}