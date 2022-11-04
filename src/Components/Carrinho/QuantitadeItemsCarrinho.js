import React, { useContext, useEffect } from "react";
import { Context } from "../../Contexts/index"

export const QuantidadeCarrinho = () => {
    const {cart, addProduct} = useContext(Context)

    useEffect(() => {
        addProduct()
    })

    return (
        <div>
            <h1>{cart.lenght}</h1>
        </div>
    )
}