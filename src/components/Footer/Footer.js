import { Container,FooterC } from "./styles"
import facebook from "../../assets/facebook.png"
import instagram from "../../assets/instagram.png"
import linkedin from "../../assets/linkedin.png"
import twitter from "../../assets/twitter.png"
import logoverde from "../../assets/logoverde.png"

export const Footer=()=>{
    return (
        <Container>
         
         <FooterC>
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
            </FooterC>
        </Container>
    )
}