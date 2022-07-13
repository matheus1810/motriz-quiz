import { FaixaDeAviso, PageContainer } from "./styled"
import logoverde from "../../assets/logoverde.png"

export const RedPage=()=>{
    return (
        <PageContainer>
         <div className="img-container">
                <img src={logoverde} />
            </div>

            <FaixaDeAviso>
                <p className="res">Resultado do teste · Preciso trocar de ERP?</p>
                <p className="alerta">Alerta vermelho</p>
            </FaixaDeAviso>
        </PageContainer>
    )
}