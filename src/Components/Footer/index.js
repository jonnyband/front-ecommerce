import React from "react";

export const Footer = () => {

    return (
        <>
            <footer>
                <div className="integrantesEmpresa">
                    <h3>CEOs da empresa</h3>

                    <div class="socios-grid">

                        <div class="socio__perfil">
                            <a href="https://github.com/jonnyband" target="_blank">
                                <img src="https://avatars.githubusercontent.com/u/22997655?v=4"/>
                                João Mario
                            </a>
                        </div>

                        <div class="socio__perfil">
                            <a href="https://github.com/PCTSP" target="_blank">
                                <img src="https://avatars.githubusercontent.com/u/107277351?v=4"/>
                                Pedro Cunha
                            </a>
                        </div>

                        <div class="socio__perfil">
                            <a href="https://github.com/Martins2812" target="_blank">
                                <img src="https://avatars.githubusercontent.com/u/111091390?v=4"/>
                             Lucas Martins
                            </a>
                        </div>

                        <div class="socio__perfil">
                            <a href="" target="_blank">
                                <img src=""/>
                                Mateus Tavares
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}