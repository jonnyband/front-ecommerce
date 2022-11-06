import { api } from "./api"




export const getProduct = () => {

return api.get(`produtos`)

}

export const getProductByID = (id) =>{
    return api.get(`produtos/${id}`)
}


export const putProductByID = (product) =>{
    return api.put(`produtos/${product.id}`, {data:{body:JSON.stringify(product)}})
}


export const getCategoryByID = (id) =>{
    return api.get(`categorias/${id}`)
}

