import {React,  useContext } from "react";
import { BarraDePesquisa } from "../../Components/BarraDePesquisa/index"
import { Context } from "../../Contexts/index"
import { ApresentacaoCarrinho } from "../../Components/Carrinho/ApresentacaoCarrinho"
import { FecharPedido } from "../../Components/Carrinho/FecharPedido"

export const Carrinho = () => {
    const {cart} = useContext(Context);

    return (
        <div>
            <BarraDePesquisa/>
            <ApresentacaoCarrinho lista={cart}/>
            <FecharPedido/>
        </div>
    )
}