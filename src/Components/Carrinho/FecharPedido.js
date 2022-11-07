import React, { useContext } from "react";
import { Context } from '../../Contexts/index';
import axios from "axios";

export const FecharPedido = () => {
    const { cart, item, removeAllProducts } = useContext(Context);
    
    // console.log(cart);

    function jsonProduto() {
        let client = [];

        for (let index = 0; index <= 1; index++) {
            client[index] = {
                // ?????????????
            }
        }

        console.log(client);
        test(client);
    }

    function executeOrder() {
        let pedido = {
            // ???????????
        }
    }

    return (
        <>
            <button onClick={() => FecharPedido()}>Fechar seu pedido </button>
        </>
    )
}