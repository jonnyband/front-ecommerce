import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { getUserByID } from '../../Service/userService'
import "./styled.css";
import { Navbar } from "../../Components/Navegacao/Navbar";

export const Login = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState('')
  const [clientes, setClientes] = useState([])

  const navigate = useNavigate()


  function handleSubmit(e) {
    e.preventDefault();

    getUserByID(parseInt(email)).then(
      response => {
        localStorage.setItem('logado', true)
        localStorage.setItem('user', response.data)
        navigate('/')
      }

    ).catch((error) => console.log(error))

  }

  return (
    <>
      <Navbar />

      <div className="container">
        <div className="container-login">
          <div className="wrap-login">
            <form onSubmit={handleSubmit} className="login-form">
              <span className="login-form-title"> Faça o seu login </span>

              <div className="wrap-input">
                <input
                  className={email !== "" ? "has-val input" : "input"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span className="focus-input" data-placeholder="ID"></span>
              </div>

              <div className="wrap-input">
                <input
                  className={password !== "" ? "has-val input" : "input"}

                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className="focus-input" data-placeholder="Password"></span>
              </div>

              <div className="container-login-form-btn">
                <button className="login-form-btn"><strong>Login</strong></button>
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
    </>
  )
}