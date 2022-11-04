import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../Contexts/index";
import { EsvaziarCarrinho } from "../Carrinho/EsvaziarCarrinho";
import { FecharPedido } from "../Carrinho/FecharPedido";

export const EncerrarPedido = () => {
    const {cart} = useContext(Context);
    const [itemsTotal, setItemsTotal] = useState("");
    console.log(cart);

    useEffect(() => {
        ProductsTotal();
    },
    [cart]);

    function ProductsTotal() {
        let soma = 0;
        for (let i=0; i < cart.lenght; i++) {
            soma += parseFloat(cart[i].valorUnitario);
        }
        setItemsTotal(soma);
        console.log(soma);
    }

    return (
        <div>
            <div className="EsvaziarCarrinho">
                <EsvaziarCarrinho />
            </div>
            <div>
                <div className="FecharPedido">
                    <h2>O valor total do seu pedido é R${itemsTotal},00</h2>
                    <FecharPedido />
                </div>
            </div>
        </div>
    )
}
