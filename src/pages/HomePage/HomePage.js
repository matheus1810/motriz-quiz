import { Banner, ButtonContainer, ButtonTeste, Container, Duvidas, Footer, ImgBanner, QueroFazerOTeste, SeuErpTrabalhaParaVoce, TextBanner, VoceSofre } from "./styled"
import logoverde from "../../assets/logoverde.png"
import logo from "../../assets/logo.png"
import banner from "../../assets/banner.png"
import data from "../../assets/data.png"
import { useNavigate } from "react-router-dom"


export const HomePage = () => {

    const navigate = useNavigate()


    return (
        <Container>
            <Banner>
                <TextBanner>
                    <div className="logo">
                        <img src={logoverde} />
                    </div>
                    <div className="title">Preciso trocar de ERP ?</div>
                    <div className="text">Se você tem se questionado frequentemente
                        se deve contratar um novo sistemade gestão,
                        este diagnóstico vai te ajudar a tomar uma
                        decisão inteligente
                    </div>
                    <ButtonContainer>
                        <button onClick={() => { navigate('/quiz') }} >Faça o teste agora e descubra</button>
                    </ButtonContainer>

                </TextBanner>
                <ImgBanner>
                    <img src={banner} />
                </ImgBanner>

            </Banner>
            <QueroFazerOTeste>
                <div className="text">
                    Entenda se este é o melhor momento para trocar o erp de sua empresa
                    e como fazer essa mudança de uma forma prática
                </div>
                <ButtonTeste>
                    <button onClick={() => { navigate('/quiz') }}>  Quero fazer o teste </button>
                </ButtonTeste>
            </QueroFazerOTeste>

            <SeuErpTrabalhaParaVoce>
                <div className="title">
                    Seu ERP trabalha para você ou é você quem trabalha para ele?
                </div>

                <div className="text">
                    Se você tem gastado muito tempo resolvendo problemas causados pelo seu sistema de gestão,
                    ou deixado de realizar planos porque ele não suporta inovações,
                    talvez seja o momento de levantar a hipótese de procurar uma nova solução.
                </div>

            </SeuErpTrabalhaParaVoce>

            <VoceSofre>
                <div>
                    <img src={data} />
                </div>
                <div className="text-container">
                    <div className="title">Você sofre com o excesso de integrações?

                    </div>
                    <div className="desanimo">Bate até um desânimo quando você pensa nas inúmeras
                        integrações que o seu atual sistema
                        precisa para funcionar corretamente?
                    </div>
                    <div className="processo">Seu processo precisa ser executado em muitas telas?
                        Tem pouco dinamismo e fluidez?
                        Estes também são alguns sinais importantes para refletir.
                    </div>
                </div>
            </VoceSofre>

            <Duvidas>
                <div className="container">
                    <div className="title">Ainda está com dúvidas sobre a troca do ERP da sua empresa?</div>
                    <div className="text">
                        Nós vamos te ensinar o passo a passo para que sua troca de software
                        aconteça de maneira simples
                        e rápida na sua empresa.
                    </div>
                    <button
                        onClick={() => { navigate('/quiz') }}
                        className="btn-teste">Faça o teste agora mesmo</button>
                </div>
            </Duvidas>

            <Footer>
                <div>
                    <img src={logo} />
                </div>
            </Footer>

        </Container>
    )
}