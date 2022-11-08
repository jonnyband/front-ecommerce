import React from "react";
import { createContext, children } from "react";
import { useState, useEffect } from "react";

export const Context = createContext()
export const CartContent = ({ children }) => {
    const [cart, setCart] = useState([])

    // useEffect(() => {
    //     let soma = 0
    //     cart.map(item => {
    //         soma += Number(item.valorUnitario)
    //     })

    //     cart.reduce(a,b=> {
    //         a.valorUnitario + b.valorUnitario
    //     })
        
    //     console.log(cart)
    //     setFullPrice(soma)
    //     },

    //     [cart]
    // )

    function addProduct(product) {
          
        let a = {
            quantidade:1,
            precoVenda:1,
            percentualDesconto:0.0,
            valorBruto:product.valorUnitario,
            valorLiquido:0.0,
            produto:product,
              
        }
        setCart([...cart, a])
        console.log(cart)
    }

    
    function addAmount(e, c) {
          

         setCart(cart.map((i)=> {if(i.produto.id === c.produto.id){
            i.quantidade = parseInt(e.target.value);
        }
        return i;}
        ))
     
    }

    function removeProduct(id) {
        
        setCart([...cart.filter(c=>c.produto.id!==id)])
        console.log(cart)
    }

    function removeAllProducts () {
        setCart([])
        console.log(cart)
    }

    return (
        <Context.Provider
            value={{cart, addProduct, removeProduct, removeAllProducts,addAmount}}
        >
            {children}
        </Context.Provider>
    )
}