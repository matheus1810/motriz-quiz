import { BtnC, Caminhos, Conhece, ContentContainer, FaixaDeAviso, HoraCerta, IconContainer, ImageContainer, PageContainer, ProximoPasso, Recaptulando, Text } from "./styled"
import logoverde from "../../assets/logoverde.png"
import redicon from "../../assets/redicon.png"
import check from "../../assets/check.png"
import computer from "../../assets/computer.png"
import { Footer } from "../../components/Footer/Footer"

export const RedPage = () => {
    return (
        <PageContainer>
            <div className="img-container">
                <img src={logoverde} />
            </div>

            <IconContainer>

                <FaixaDeAviso>
                    <p className="res">Resultado do teste · Preciso trocar de ERP?</p>
                    <p className="alerta">Alerta vermelho</p>
                </FaixaDeAviso>

                <div className="circle">
                    <img src={redicon} />
                </div>

            </IconContainer>

            <HoraCerta>
                <div className="txt-container">
                    <p>Você chegou aqui na hora certa! Suas queixas são muito importantes e revelam o que você lá no fundo já sabia: <strong>trocar de ERP vai mudar a sua gestão, e muito</strong> </p>
                    <br />
                    <p>Imagino que sua equipe provavelmente esteja até colocando apelidos no seu sistema, certo? Quando isso acontece, apesar de ser até engraçado, não é um bom sinal!</p>
                    <br />
                    <p><strong>Vamos lá, recapitulando:</strong> </p>
                </div>
            </HoraCerta>

            <Recaptulando>
                <p>
                    <img src={check} />
                    Se você precisa muito do seu suporte, tem alguma coisa errada aí. ERP bom é ERP que não precisa de atenção técnica o tempo todo.
                </p>


                <p>
                    <img src={check} />
                    Quando o sistema de gestão é focado em processos, os dashboards são mais intuitivos, você precisa de menos telas para fazer suas tarefas e as atividades acontecem com fluidez.
                </p>

                <p>
                    <img src={check} />
                    O B.I nativo é uma das boas soluções para quem sofre com a necessidade de integrar com BI externos, por exemplo. Ele é prático por natureza e fica mais fácil de desenvolver novas análises.
                </p>
                <p className="g" >
                    <img src={check} />
                    O mais importante de tudo: seu ERP precisa proporcionar mais tempo pra você e sua equipe se preocuparem com atividades mais estratégias, que tenham foco direto no resultado.. Gastar tempo se preocupando com problemas operacionais relacionados ao software de gestão  é dinheiro jogado fora. Foque no resultado!
                </p>

                <p >
                    <img src={check} />
                    Um bom sistema de gestão certamente vai te proporcionar dados mais precisos e, consequentemente, transformar as suas análises com boas conclusões e insights.
                </p>

            </Recaptulando>

            <Caminhos>
                <strong> Que bom que você chegou até aqui. </strong> Existem alguns caminhos que você pode seguir agora mesmo.
            </Caminhos>

            <ProximoPasso>

                <Text>
                    <p className="proximo-passo">Proximo passo?</p>
                    <p className="txt">Neste material você vai encontrar um guia completo para iniciar a troca: desde a pesquisa até a implantação.</p>
                    <button>Guia completo da troca de ERP + Checklist</button>
                </Text>

                <ImageContainer>
                    <img src={computer} />
                </ImageContainer>
            </ProximoPasso>

            <Conhece>
                <ContentContainer>
                    <div className="f1">
                        <p className="conhece">Você já conhece a Sankhya?
                        </p>
                        <p>Agora é importante que você encontre um sistema que vai atender plenamente a sua empresa
                        </p>
                        <br />

                        <p>As soluções da Sankhya foram desenvolvidas com estruturas modulares, flexíveis, customizáveis, totalmente web e mobile para facilitar a tomada de decisão e resultar em ganhos de produtividade e rentabilidade para médias e grandes empresas.
                        </p>
                        <br />

                        <p>Você pode conhecer melhor o ERP Sankhya aqui:</p>

                        <br />

                        <BtnC>Conheça o ERP Sankhya</BtnC>
                    </div>
                    <div className="f2">
                        <p>Está se sentindo seguro em relação à troca?</p>
                        <br />  <p>Então fale direto com o nosso consultor pelo Whatsapp e descubra como as nossas soluções podem te ajudar. É só clicar nesse botão aqui embaixo.</p>
                        <br />  <button>Quero falar com um consultor</button>
                    </div>
                </ContentContainer>
            </Conhece>

            <Footer/>


        </PageContainer>
    )
}