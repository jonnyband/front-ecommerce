import { useState, useEffect } from "react";
import {Buffer} from 'buffer';
import {getProduct} from "../../Service/productService";
import { Card } from "../../Components/Produtos/ApresentacaoProdutos";
import {Container, ProductRow} from "./styled"

export function Home(){

const [product, setProduct] = useState([])



useEffect(()=>{

        getProduct().then(
        response => {
            setProduct(response.data)
        }
    ).catch(error=>{
        console.log(error);
    })


}, [])

console.log(product)


return(
    <Container>
      {product.map((p)=>{
        return(
            <Card
            product={p}
            />
        )
      })}
    </Container>
)












}