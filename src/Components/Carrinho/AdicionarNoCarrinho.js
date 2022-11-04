import React, { useContext } from "react";
import {Context} from '../../Contexts/index'

export const AdicionarNoCarrinho = ({ product }) => {
    const { addProduct } = useContext(Context)

    function add() {
        addProduct(product)
    }

    return (
        <>
            <button onClick={() => add()}>
                <strong>Adicionar ao carrinho</strong>
            </button>
        </>
    )
}