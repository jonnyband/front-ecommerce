import { useState, useEffect } from "react";
import {Buffer} from 'buffer';
import {getProduct} from "../../Service/productService";
import { Card } from "../../Components/Produtos/ApresentacaoProdutos";
import {Container, ProductRow,Div} from "./styled"
import { BsCart } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../../Components/Navegacao/Navbar";
import { Content } from "../SobreNos/styled";

export function Home(){
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


return(
    <>
    <Div>
    <Navbar/>
    <Container>
      {product.map((p)=>{
        return(
            <Card
            product={p}
            />
        )
      })}
    </Container>
    </Div>
    </>
)












}