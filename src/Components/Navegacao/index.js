import React from "react";
import {useNavigate} from 'react-router-dom';

export const Navegacao = () => {
    const navigate = useNavigate()

    return (
        <>
        <button>Home</button>
        <button>jogos</button>
        <button>Sobre Nós</button>
        <button>Contato</button>
        </>
    )
}