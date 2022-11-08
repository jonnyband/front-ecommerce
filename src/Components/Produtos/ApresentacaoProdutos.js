import React, {useContext} from "react";
import {Context} from '../../Contexts/';
import { Container, Div } from "./styled";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Card = ({ product }) => {

    const { cart, addProduct } = useContext(Context)

    function add(product) {
       let d = cart.filter(e => e.produto.id !== product.id
       
        );

        console.log(d)
        addProduct(product)
        toast.success('Adicionado ao Carrinho!')

    }
    
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
        <button onClick={() => add(product)}>
                <strong>Adicionar ao carrinho</strong>
            </button>
            
        </Div>
        <ToastContainer/>
        </Container>
        </>
    )
}