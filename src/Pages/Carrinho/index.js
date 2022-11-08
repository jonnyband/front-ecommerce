import { React, useContext } from "react";
import { BarraDePesquisa } from "../../Components/BarraDePesquisa/index"
import { Context } from "../../Contexts/index"
import { ApresentacaoCarrinho } from "../../Components/Carrinho/ApresentacaoCarrinho"
import { FecharPedido } from "../../Components/Carrinho/FecharPedido"
import { Navbar } from "../../Components/Navegacao/Navbar";
import { Container } from "./styled";

export const Carrinho = () => {
    const { cart } = useContext(Context);

    return (
        <>
            <Container>
                <Navbar />
                <div>
                    <BarraDePesquisa />
                    <ApresentacaoCarrinho />
                    <FecharPedido />
                </div>
            </Container>
        </>
    )
}