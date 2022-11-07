import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'
import { getUserByID } from '../../Service/userService'
import "./styled.css";

export const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [clientes, setClientes] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        getClienteAPI()
    }, [])

    function getClienteAPI() {
        getUserByID()
            .then(res => {
                setClientes(res.data)
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleSubmit = e => {
        e.preventDeFault()
        console.log('submit', {email, password})
        clientes.forEach(element => {
            if (email === element.email) {
                if (password === element.password) {
                    localStorage.setItem('logado', 'sim')
                    navigate('/')
                    document.location.reload()
                }
            }
        })
    }

    return (
            <div className="container">
              <div className="container-login">
                <div className="wrap-login">
                  <form className="login-form">
                    <span className="login-form-title"> Faça o seu login </span>
        
                    <div className="wrap-input">
                      <input
                        className={email !== "" ? "has-val input" : "input"}
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <span className="focus-input" data-placeholder="Email"></span>
                    </div>
        
                    <div className="wrap-input">
                      <input
                        className={password !== "" ? "has-val input" : "input"}
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <span className="focus-input" data-placeholder="Password"></span>
                    </div>
        
                    <div className="container-login-form-btn">
                      <button className="login-form-btn">Login</button>
                    </div>
        
                    <div className="text-center">
                      <span className="txt1">Não possui conta? </span>
                      <a className="txt2" href="/cadastro">
                        Criar conta
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )
}