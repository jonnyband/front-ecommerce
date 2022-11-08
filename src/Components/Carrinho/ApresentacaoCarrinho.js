import React, { useContext, useState, useEffect } from "react";
import { Context } from '../../Contexts/';
import { Container, Div } from "./styled";
import { postOrder } from "../../Service/pedidoService";
import { putProduct } from "../../Service/productService";
import { wait } from "@testing-library/user-event/dist/utils";



export const ApresentacaoCarrinho = () => {


    const { cart, removeProduct, removeAllProducts, addAmount } = useContext(Context)


    useEffect(() => {
        setFullPrice(orderTotal())
    }, [cart])



    const [order, setOrder] = useState(
        {
            status: 'PROCESSANDO',
            cliente: { id: localStorage.getItem('id') },
            listaItemPedido:
                cart

        }
    )

    const [fullPrice, setFullPrice] = useState(
        orderTotal()
    )


    function setAmount(e, c) {

        addAmount(e, c)
        setOrder({ ...order, listaItemPedido: cart }
        )
        console.log(order)
    }

    function removeItem(id) {
        removeProduct(id)
    }



    function orderTotal() {
        return cart.length > 0 ?
            cart.length > 1 ?
                cart.reduce((a, b) => { return (a.quantidade * a.valorBruto) + (b.quantidade * b.valorBruto) })
                : cart[0].quantidade * cart[0].valorBruto
            : 0
    }



    function buyOrder(order) {

        postOrder(order).catch((error) => {
            console.log(error)
        }).then(

            order.listaItemPedido.map((c) => {
                c.produto.quantidadeEstoque -= c.quantidade
                console.log(c.produto)
                console.log(c.produto.id)
                putProduct(c.produto)
            }
                ,

                removeAllProducts()))
    }


    return (
        <>

            {cart.map((c) => (

                <Container key={c.produto.id}>

                    <img src={`data:image/png;base64,${c.produto.imagem}`} />

                    <div>

                        <h3>{c.produto.nome}</h3><br></br>


                    </div>
                    <h3>R${c.produto.valorUnitario}</h3>
                    <h3>Quantidade</h3>
                    <form>
                        <select value={c.quantidade} onChange={(e) => setAmount(e, c)}>
                            {Array.from({ length: c.produto.quantidadeEstoque }, (_, i) => <option
                            >{i + 1}</option>)}
                        </select>
                    </form>
                    <button onClick={() => { removeItem(c.produto.id) }}><strong>Remover</strong></button>

                </Container>




            )


            )}
            <Div>
                <button onClick={() => buyOrder(order)} ><strong>Finalizar Pedido</strong></button>
                <h1>R${isNaN(fullPrice) ? 0 : fullPrice}.00</h1>
            </Div>
        </>
    )
}