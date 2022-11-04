import React from "react";
import { createContext, Children } from "react";
import { useState, useEffect } from "react";

export const Context = createContext()
export const CartContent = ({ Children }) => {
    const [fullPrice, setFullPrice] = useState()
    const [cart, setCart] = useState([])

    useEffect(() => {
        let soma = 0
        cart.map(item => {
            soma = soma + Number(item.valorUnitario)
        })
        
        console.log(cart)
        setFullPrice(soma)
        },

        [cart]
    )

    function addProduct(item) {
        const add = cart
        add.push(item)
        setCart(add)
        console.log(cart)
    }

    function removeProduct(id) {
        
        for (var i=0; i < cart.length; i++) {
            if (cart[i] === id) {
                cart.splice(i, 1)
            }
        }
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
            {Children}
        </Context.Provider>
    )
}