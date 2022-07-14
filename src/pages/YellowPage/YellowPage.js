import { FaixaDeAviso, IconContainer, PageContainer } from "./styled"
import logoverde from "../../assets/logoverde.png"
import yellowicon from "../../assets/yellowicon.png"
import { Footer } from "../../components/Footer/Footer"

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

         {/*    <Footer/> */}

        </PageContainer>
    )
}