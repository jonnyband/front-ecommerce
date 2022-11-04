import React, { useContext } from "react";
import { Context } from "../../Contexts/index";

export const EsvaziarCarrinho = () => {
    const {cart, removeAllProducts} = useContext(Context);
    console.log(cart);

    return (
        <>
            <button onClick={() => removeAllProducts()}>Esvaziar carrinho</button>
        </>
    )
}