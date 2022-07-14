import { Aparentemente, Box, CheckList, Conhecer, Content, Duvida, DuvidaT, FaixaDeAviso, IconContainer, ImageContainer, Interessante, Items, PageContainer, PerdendoEspaco, SectionWhite, Text, Txt } from "./styled"
import logoverde from "../../assets/logoverde.png"
import yellowicon from "../../assets/yellowicon.png"
import { Footer } from "../../components/Footer/Footer"
import check from "../../assets/check.png"
import reload from "../../assets/reload.png"
import computer from "../../assets/computer.png"

export const YellowPage = () => {
    return (
        <PageContainer>
            <div className="img-container">
                <img src={logoverde} />
            </div>

            <IconContainer>

                <FaixaDeAviso>
                    <p className="res">Resultado do teste · Preciso trocar de ERP?</p>
                    <p className="alerta">Fique atento</p>
                </FaixaDeAviso>

                <div className="circle">
                    <img src={yellowicon} />
                </div>

            </IconContainer>

            <Aparentemente>Aparentemente seu ERP ainda está conseguindo te atender, mas é importante estar sempre atento aos sinais.</Aparentemente>

            <CheckList>
                <Txt>
                    <p>O seu sistema de gestão precisa acompanhar a sua evolução, ou seja, <strong>é ele quem trabalha para você, e nunca o contrário.</strong> </p>
                    <p> O mínimo que ele deve fazer por você é:</p>
                </Txt>

                <Items>
                    <p>
                        <img
                            src={check}
                        />Agilizar os processos internos de controle e gestão</p>
                    <p>
                        <img
                            src={check}
                        />Permitir que os seus colaboradores tenham mais tempo para pensar de forma mais estratégica e em novas soluções</p>
                    <p>
                        <img
                            src={check}
                        />Facilitar a execução de tarefas e rotinas de trabalho</p>
                    <p>
                        <img
                            src={check}
                        />Garantir dados confiáveis e em tempo real, utilizando cada vez menos planilhas</p>
                    <p>
                        <img
                            src={check}
                        />Exigir quase nenhuma integração com outros softwares de mercado.</p>
                </Items>
            </CheckList>

            <SectionWhite>

                <Interessante>
                    É interessante também pensar sempre de modo holístico. Como tem sido a gestão da sua empresa no geral? Você já comparou a  execução dos seus processos com a dos seus concorrentes, por exemplo?
                </Interessante>

                <PerdendoEspaco>
                    <Text>
                        <p> Será que você está perdendo espaço no mercado por não ter processos bem definidos e executados, ou por falta de informação para a tomada de decisão? </p>
                        <br />
                        <p> Se essa reflexão te interessa, te convido a conhecer uma ferramenta completa de diagnóstico de maturidade de gestão que tem o objetivo de te mostrar as falhas nos seus processos e como você está em relação aos seus concorrentes.</p>
                    </Text>
                    <Box>
                        <img src={reload} />
                        <p>Utilizamos o Maha Gestão, uma ferramenta com mais de XXX empresas cadastradas e totalmente gratuita.</p>
                        <button>Solicitar o diagóstico de gestão</button>
                    </Box>
                </PerdendoEspaco>
            </SectionWhite>

            <Conhecer>
                <Content>
                    <p>Caso você queira conhecer melhor a nossa solução, é só clicar aqui embaixo para agendar uma reunião com um dos nossos consultores:</p>
                    <button>Fale com nossos consultores</button>
                </Content>
            </Conhecer>

            <Duvida>
                <ImageContainer>
                    <img src={computer} />
                </ImageContainer>
                <DuvidaT>
                    <p>Ainda tem alguma dúvida sobre a Troca de ERP? Você pode baixar o nosso guia completo:</p>
                    <button>Guia completo da troca de ERP + Checklist</button>
                </DuvidaT>
            </Duvida>
            <Footer />

        </PageContainer>
    )
}