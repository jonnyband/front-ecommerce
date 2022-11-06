import React from "react";
import { createContext, children } from "react";
import { useState, useEffect } from "react";

export const Context = createContext()
export const CartContent = ({ children }) => {
    const [fullPrice, setFullPrice] = useState()
    const [cart, setCart] = useState([])

    useEffect(() => {
        let soma = 0
        cart.map(item => {
            soma += Number(item.valorUnitario)
        })
        
        console.log(cart)
        setFullPrice(soma)
        },

        [cart]
    )

    function addProduct(item) {
          
        setCart([...cart, item])
        console.log(cart)
    }

    function removeProduct(id) {
        
        setCart([...cart.filter(c=>c.id!==id)])
        console.log(cart)
    }

    function removeAllProducts () {
        setCart([])
        console.log(cart)
    }

    return (
        <Context.Provider
            value={{cart, addProduct, removeProduct, removeAllProducts, fullPrice}}
        >
            {children}
        </Context.Provider>
    )
}