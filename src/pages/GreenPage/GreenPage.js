import {
    Blog,
    Blogcontent,
    BoxGray,
    BtnIcon,
    Container,
    ContainerRes,
    FaixaDeAviso,
    Footer,
    Icon,
    InputContainer,
    Resposta,
    TextoContainer,
    Youtube
} from "./styled"
import like from '../../assets/like.png'
import logoverde from "../../assets/logoverde.png"
import reload from "../../assets/reload.png"
import youtube from "../../assets/youtube.png"
import thumb from "../../assets/thumb.jpg"
import digitando from "../../assets/digitando.png"
import facebook from "../../assets/facebook.png"
import instagram from "../../assets/instagram.png"
import linkedin from "../../assets/linkedin.png"
import twitter from "../../assets/twitter.png"



export const GreenPage = () => {
    return (
        <Container>
            <div className="img-container">
                <img src={logoverde} />
            </div>
            <FaixaDeAviso>
                <p className="faixa">Resultado do teste. preciso trocar de ERP?</p>
                <p className="nao-se-preucupe">Não se preucupe agora</p>
                <div className="icon-container">
                    <img src={like} />
                </div>

            </FaixaDeAviso>

            <Resposta>
                <ContainerRes>
                    <p className="primeiro-paragrafo">Pelo que vimos nas suas respostas, pode ser que ainda tenha espaço para você crescer utilizando o seu ERP atual.</p>
                    <div className="flex-container">

                        <TextoContainer>
                            <p>De qualquer forma, se você respondeu este questionário, pode ser que você tenha algumas dúvidas que não estavam nesse diagnóstico ou que você não esteja satisfeito em alguns pontos específicos do seu sistema.</p>
                            <p>Você está certo! O ideal é que todas as empresas estejam constantemente em busca de mudanças e avanços em algum processo de negócio, querendo gerar ainda mais resultado e escalabilidade para a empresa.</p>
                            <p>Caso seja este o caso, podemos fazer um diagnóstico completo que irá medir a maturidade da sua gestão, apresentando onde possam ter gaps nos seus processos e como você está em relação aos seus concorrentes.</p>
                        </TextoContainer>
                        <BoxGray>
                            <img src={reload} />
                            <p>Utilizamos o Maha Gestão, uma ferramenta com mais de XXX empresas cadastradas e totalmente gratuita.</p>
                            <button>Solicitar o diagóstico de gestão</button>
                        </BoxGray>
                    </div>
                </ContainerRes>
            </Resposta>

            <Youtube>
                <div className="container">

                    <p>Independente do diagnóstico, uma coisa é fato: é importante estar sempre estudando e se atualizando. Te indico o canal do Mestre do ERP para entender ainda mais sobre o mercado de sistemas, tecnologia, gestão, indicadores de sucesso e vários outros assuntos relevantes relacionados aos negócios.</p>

                    <div className="btn-img">
                        <img src={thumb} />
                        <BtnIcon>
                            <button>Quer me inscrever no canal</button>
                            <img src={youtube} />
                        </BtnIcon>
                    </div>
                </div>
            </Youtube>


            <Blog>
                <div>
                    <img src={digitando} />
                </div>
                <Blogcontent>
                    <p>No nosso blog você também encontra muitos materiais com temas que vão de gestão de pessoas até as últimas tendências em tecnologia. Se você gosta de estar sempre atualizado, é só assinar nossa newsletter aqui embaixo para receber novidades:</p>
                    <InputContainer>
                        <input placeholder="Email" />
                        <button>Receber conteúdo</button>
                    </InputContainer>
                    <div className="politica">Ao informar meus dados, eu concordo com <u>Política de Privacidade.</u></div>
                </Blogcontent>
            </Blog>

            <Footer>
                <div>
                    <img src={logoverde} />
                </div>
                <div className="icons">
                    <p>Sankhya.com.br</p>
                    <div>
                        <img src={facebook} />
                    </div>
                    <div>
                        <img src={twitter} />
                    </div>
                    <div>
                        <img src={linkedin} />
                    </div>
                    <div> <img src={instagram} /></div>
                </div>
            </Footer>

        </Container>
    )
}