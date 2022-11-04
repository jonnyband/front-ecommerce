import { api } from "./api"




export const getProduct = () => {

return api.get(`produtos`)

}

