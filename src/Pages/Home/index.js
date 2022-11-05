import { useState, useEffect } from "react";
import {Buffer} from 'buffer';
import {getProduct} from "../../Service/productService";
import { Card } from "../../Components/Produtos/ApresentacaoProdutos";
import {Container, ProductRow} from "./styled"
import { BsCart } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export function Home({history}){
const navigate = useNavigate();


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
    
    <Container><button onClick={()=> {navigate('/carrinho')}}>
        <BsCart ></BsCart>
        </button>
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