import React from "react";
import { AdicionarNoCarrinho } from "../Carrinho/AdicionarNoCarrinho"
import { Container, Div } from "./styled";
import { Navbar } from "../Navegacao/Navbar";

export const Card = ({ product }) => {
    
    return (
        <>
        <Container key={product.id}>
        <img src={`data:image/png;base64,${product.imagem}`} />
        
        <div>
            <h1>{product.nome}</h1><br></br>
            <span>{product.descricao}</span><br></br>
            
        </div>
        <Div>
        <span>R${product.valorUnitario}</span>
            <AdicionarNoCarrinho
            product={product}
            ></AdicionarNoCarrinho>
        </Div>
        
        </Container>
        </>
    )
}