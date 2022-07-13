import { FaixaDeAviso, IconContainer, PageContainer } from "./styled"
import logoverde from "../../assets/logoverde.png"
import redicon from "../../assets/redicon.png"

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

        </PageContainer>
    )
}