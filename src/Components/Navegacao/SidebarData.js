import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai"
import { BsFillPeopleFill } from "react-icons/bs";

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Login',
        path: '/login',
        icon: <BsFillPeopleFill />,
        cName: 'nav-text'
    },
    {
        title: 'Carrinho',
        path: '/carrinho',
        icon: <AiOutlineShoppingCart />,
        cName: 'nav-text'
    },
    {
        title: 'Sobre',
        path: '/sobre',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    },
    {
        title:'Informações do Usuário',
        path:'/menu',
        icon:<IoIcons.IoIosDocument/>,
        cName:'nav-text'
    }
]