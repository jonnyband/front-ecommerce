import { api } from "./api"




export const getProduct = () => {

return api.get(`produtos`)

}

export const getProductByID = (id) =>{
    return api.get(`produtos/${id}`)
}

