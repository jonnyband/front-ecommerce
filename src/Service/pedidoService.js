import { api } from "./api"




export const getPedidos = () => {

return api.get(`pedido`)

}


export const postOrder = (order) => {
    return api.post(`pedido`, order)
}


export const deleteOrder = (id) => {
    return api.delete(`pedido/${id}`)
}