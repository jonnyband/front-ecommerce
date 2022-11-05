import React, { useContext } from "react";
import { Context } from "../../Contexts/index"

export const RemoverDoCarrinho = ({product}) => {
    const {removeProduct} = useContext(Context)
    console.log(product.id)

    return (
        <>
            <button onClick={() => removeProduct(product)}>Remover</button>
        </>
    )
}