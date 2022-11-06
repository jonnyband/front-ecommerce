import { api } from "./api"

export const getUserByID = (id)=>{

    return api.get(`clientes/${id}`)
}

export const postUser = (client) =>{
    return api.post(`clientes`, client)
}

export const postAddress = (address) =>{
    return api.post(`enderecos`, address)
}
