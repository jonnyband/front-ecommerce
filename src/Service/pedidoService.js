import { api } from "./api"




export const getPedidos = () => {

return api.get(`pedido`)

}