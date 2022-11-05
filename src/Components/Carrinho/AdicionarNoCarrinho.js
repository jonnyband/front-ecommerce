import React, { useContext } from "react";
import {Context} from '../../Contexts/index'

export const AdicionarNoCarrinho = ({ product }) => {
    const { addProduct } = useContext(Context)

    function add(product) {
        addProduct(product)
    }

    return (
        <>
            <button onClick={() => add(product)}>
                <strong>Adicionar ao carrinho</strong>
            </button>
        </>
    )
}