import React, { useContext } from "react";
import { Context } from "../../Contexts/index"

export const RemoverDoCarrinho = ({item}) => {
    const {removeProduct} = useContext(Context)
    console.log(item.produto.id)

    return (
        <>
            <button onClick={() => removeProduct(item.produto.id)}><strong>Remover</strong></button>
        </>
    )
}