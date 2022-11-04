import {React, useEffect, useState} from "react";
import { getPedidos } from "./Service/pedidoService";


function App() {


  const [pedidos, setPedidos] = useState([]);


  useEffect(()=>{
    getPedidos().then(response => {
      setPedidos(response.data)
    }).catch(error => {
      console.log(error);
    })
  }, [])



  console.log(pedidos)
  return (
    <div>
         {
                pedidos.map(res => {
                    return (
                        <>   
                            <span>{res.id}</span>
                            <span>{res.cliente.nomeCompleto}</span>
                            <span>{res.listaItemPedido[0].produto.nome}</span>
                        </>
                    )
                })
            }
    </div>
  );
}

export default App;
