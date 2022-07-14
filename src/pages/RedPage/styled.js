import styled from "styled-components"

export const PageContainer = styled.div`
.img-container{
    display:flex;
    align-items:center;
    justify-content:center;
    padding:10px;
}

`
export const FaixaDeAviso = styled.div`
    background-color:rgba(177, 63, 77,0.2);
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    padding:20px;
.res{
    font-family: 'Sora';
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 25px;
    text-align: center;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: #2E3C50;
}
.alerta{
    width: 680px;
    height: 45px;
    font-family:sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    text-align: center;
    color: #2E3C50;
    margin-bottom:20px;
    margin-top:20px;
}
`
export const IconContainer = styled.div`
width:100vw;
position:absolute;
.circle{
    width:40px;
    height:40px;
    background-color:#B13F4D;
    display:grid;
    justify-content:center;
    align-items:center;
    border-radius:50%;
    position:absolute;
    top:85%;
    left:50%;
}
`
export const HoraCerta = styled.div`
margin-top:200px;
.txt-container{
   
    @media (max-width:400px) {
        width:90vw;
        }
    width:55vw;
    margin:0 auto  ;
    font-family: sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    text-align: center;
    color: #333333;

}
`
export const Recaptulando = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr;
    column-gap:30px;
    margin:0 auto ;
    width:80vw;
    font-family: sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #4D4D4D;
    row-gap:10px;
    margin-top: 50px;
    @media (max-width:500px) {
        grid-template-columns:1fr;
        width:90vw;
        p{
            padding:10px;
        }
       
    }
    
   .g{
    margin-top:10px;
   }
`

export const Caminhos = styled.p`
font-family:sans-serif;
font-style: normal;
font-size: 22px;
line-height: 28px;
text-align: center;
color: #2E3C50;
width:40%;
margin:0 auto;
margin-top:50px;
margin-bottom:50px;
@media (max-width:500px) {
        width:90vw;
    
    }
`
export const ProximoPasso = styled.div`
padding-top:80px;
background: linear-gradient(281.04deg, #F3F1F0 0%, #FFFFFF 100%);
display:grid;
width:80vw;
justify-content:space-around;
margin:0 auto;
grid-template-columns:1fr 1fr ;
@media (max-width:1000px) {
    grid-template-columns:1fr;
    align-items:center ;
    text-align:center ;
    
    }
`
export const Text = styled.div`

.proximo-passo{
    font-family:sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 40px;
    color: #525D6E;
    padding:20px;

}
button{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding:20px;
    height: 36px;
    background: #66CB66;
    border:none;
    font-family: 'Sora';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: #2E3C50;
    margin:20px;


}
.txt{
    padding:20px;

    font-family: sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #4D4D4D;
}
`
export const ImageContainer = styled.div`
img{
    width:100%;
    height:100%;
}
@media (max-width:700px) {
    width:80vw;
    
    }

`

export const Conhece = styled.section`
background: #2E3C50;
width:100vw;

`
export const ContentContainer = styled.div`
display:flex;
flex-wrap:wrap;
width:80vw;
margin:0 auto ;
color: #F3F1F0;
font-family:sans-serif;
font-style: normal;
padding:50px;
justify-content: space-around;
@media (max-width:900px) {
    width:90vw;
    
    }
.f1{
    min-width:310px;
    width:40%;
}
.f2{
    min-width:310px;
    width:40%;
    p{
        :first-child{
            font-family: sans-serif;
            font-style: normal;
            font-weight: 300;
            font-size: 24px;
            line-height: 30px;
            color: #F3F1F0;
        }
    }
    button{
    border:2px solid #66CB66;
    height:20px;
    background-color:#66CB66;
    font-family: sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: #2E3C50;
    height:40px;
    width:300px;
    @media (max-width:500px) {
        width:250px;
    
    }
  
    }
    
}
p{
    font-style: normal;
    font-size: 16px;
    line-height: 25px;

}
.conhece{
    padding-bottom:20px;
    font-weight: 400;
    font-size: 32px;
    line-height: 40px;

}
`
export const BtnC=styled.button`
    border:2px solid #66CB66;
    height:20px;
    background-color:transparent;
    font-family: sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    height:40px;
    width:300px;
    color: #66CB66;
    margin-bottom:50px;
    @media (max-width:500px) {
        width:250px;
    
    }

`