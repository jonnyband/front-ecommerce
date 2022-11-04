// import React, { useState } from "react";

// export const Contato = () => {
//     const [nome, setNome] = useState('')
//     const [emailPessoal, setEmailPessoal] = useState('')
//     const [text, setText] = useState('')

//     const handleContato = e => {
//         e.preventDefault()
//         console.log('submit', {nome, emailPessoal, text})
//     }

//     return (
//           <section class="section-toda">
//             <div class="container">
//               <div class="text">
//                 <p>Entre em contato conosco</p>
//               </div>
//               <div class="container-form-e-contato">
//                 <div class="info">
//                   <div class="container-infos">
//                     <div class="telefone">
//                       <img style={{ height: 20, width: 25 }} src={tel} alt="" />
//                       <p>(24) 988258897</p>
//                     </div>
//                     <div class="contato">
//                       <img style={{ height: 20, width: 25 }} src={email} alt="" />
//                       <p>react.grupo07@gmail.com</p>
//                     </div>
//                     <div class="trabalhe-conosco">
//                       <img
//                         style={{ height: 20, width: 25 }}
//                         src={portfolio}
//                         alt=""
//                       />
//                       <p>trabalhe conosco</p>
//                     </div>
//                   </div>
//                 </div>
//                 <div id="contatoform">
//                   <form className="form" onSubmit={handleSubmitContato}>
//                     <div className="field">
//                       <h1>Escreva abaixo sua mensagem.</h1>
//                       <br />
//                       <label htmlFor="nome">Nome</label>
//                         className="username"
//                         id="username"
//                         value={nome}
//                         onChange={e => setNome(e.target.value)}
//                     </div>
//                     <div className="field">
//                       <label htmlFor="email">Email</label>
//                         type="email"
//                         className="email"
//                         id="email"
//                         value={emailPessoa}
//                         onChange={e => setEmailPessoa(e.target.value)}
//                         required
//                     </div>
//                     <div className="field">
//                       <label htmlFor="text">Digite sua mensagem</label>
//                         className="inputext"
//                         value={texto}
//                         onChange={e => setTexto(e.target.value)}
//                         // rows={5}
//                         // cols={30}
//                         autoResize
//                     </div>
    
//                     <div className="actions">
//                         style={{ backgroundColor: ' #5A198D' }}
//                         onClick={e => handleSubmitContato(e)}
//                         label="Enviar"
//                         className="p-button-rounded p-button-help"
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </section>
//       )
// }