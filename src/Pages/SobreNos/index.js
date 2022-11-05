import { Container, Content, Card, Buttons, Div, Header } from './styled.js'
import { useState } from 'react';

export function Sobre() {
    const [selected, setSelected] = useState("")

    function selectedContent() {
        switch (selected) {
            case "Sobre":
                return (
                    <Header>
                        <h1>Fala galera do mundo dos Games!
                            Somos uma empresa E-commerce de vendas online. A nossa loja é focada em jogos de console, sejam eles, da Microsoft, Sony, entre outras grandes empresas.
                            Temos jogos dos consoles mais novos até os mais antigos, com uma enorme variedade e um ótimo preço.
                            Nosso site foi criado especialmente para todos os amantes de jogos, desenvolvido por alunos do curso
                            de programação FullStack do SERRATEC. O Grupo é composto por 7  integrantes, sendo eles, Lucas Martins, João Mario, Pedro Cunha e Mateus Tavares.
                            Sejam Bem-Vindos e divirtam-se!</h1>
                    </Header>
                );

            case "Equipe":
                return (
                    <div>
                        <Card>
                            <Div>
                                <img src="https://avatars.githubusercontent.com/u/111091390?v=4" />
                                <h1>Lucas M</h1>
                            </Div>
                            <Buttons>
                                <a href="https://github.com/Martins2812" target="_blank">
                                    <button>GitHub</button>
                                </a>
                                <a href="https://www.linkedin.com/in/lucas-martins-487ba91b9/" target="_blank">
                                    <button>Linkedin</button>
                                </a>
                            </Buttons>
                        </Card>

                        <Card>
                            <Div>
                                <img src="https://avatars.githubusercontent.com/u/111091390?v=4" />
                                <h1>João M</h1>
                            </Div>
                            <Buttons>
                                <a target="_blank">
                                    <button>GitHub</button>
                                </a>
                                <a target="_blank">
                                    <button>Linkedin</button>
                                </a>
                            </Buttons>
                        </Card>

                        <Card>
                            <Div>
                                <img src="https://avatars.githubusercontent.com/u/80181197?v=4" />
                                <h1>Mateus T</h1>
                            </Div>
                            <Buttons>
                                <a href="https://github.com/tavaresmateus" target="_blank">
                                    <button>GitHub</button>
                                </a>
                                <a href="" target="_blank">
                                    <button>Linkedin</button>
                                </a>
                            </Buttons>
                        </Card>

                        <Card>
                            <Div>
                                <img src="https://avatars.githubusercontent.com/u/107277351?v=4" />
                                <h1>Pedro C</h1>
                            </Div>
                            <Buttons>
                                <a href="https://github.com/PCTSP" target="_blank">
                                    <button>GitHub</button>
                                </a>
                                <a target="_blank">
                                    <button>Linkedin</button>
                                </a>
                            </Buttons>
                        </Card>
                    </div>
                );
        }
    }
    return (
        <Container>
            <h2>"Menu"</h2>
            <Content>
                <header>
                    <span onClick={() => setSelected("Sobre")}>Sobre</span>
                    <span onClick={() => setSelected("Equipe")}>Integrantes</span>
                </header>
                {selectedContent()}
            </Content>
        </Container>
    );
}
