import styled from "styled-components"

export const PageContainer = styled.div`
background:#F3F1F0;
.img-container{
    display:flex;
    align-items:center;
    justify-content:center;
    padding:10px;
}

`
export const FaixaDeAviso = styled.div`
    background-color:rgba(242, 203, 62,0.2);
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
export const IconContainer=styled.div`

width:100vw;
position:absolute;
.circle{
    width:45px;
    height:45px;
    background-color:#F2CB3E;
    display:grid;
    justify-content:center;
    align-items:center;
    border-radius:50%;
    position:absolute;
    top:85%;
    left:50%;
}
`
export const Aparentemente=styled.div`

    font-family:sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    text-align: center;
    color: #333333;
    margin:200px auto 80px auto  ;
    width:600px;
    @media (max-width:700px) {
        width:80%;
    
    }


`

export const CheckList=styled.section`
display:flex;
flex-wrap:wrap;
width:80vw;
margin:0 auto ;
justify-content:space-around;
`
export const Txt=styled.div`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    width:300px;
    color: #4D4D4D;
    padding:40px;

`
export const Items=styled.div`
width:40%;
@media (max-width:791px) {
    width:90%;
    
    }
p{
    padding:10px;
    font-family: sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #4D4D4D;

}
`

export const SectionWhite=styled.div`
background-color:#ffffff;
`

export const Interessante=styled.div`

    font-family:sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    text-align: center;
    color: #333333;
    margin:50px auto ;
    padding-top:50px;
    width:50vw;

`

export const PerdendoEspaco=styled.div`
display:flex;
flex-wrap:wrap;
width:70vw;
margin:0 auto ;
justify-content: space-around;
`
export const Text =styled.div`
    width:300px;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #4D4D4D;
    margin-bottom:50px;

`
export const Box =styled.div`
    width:400px;
    display:flex;
    padding:30px;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background: linear-gradient(180deg, #525D6E 65.95%, #77808C 100%);
button{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 20px;
    width: 311px;
    height: 36px;
    background: #66CB66;
    border:none;


    font-family: sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: #2E3C50;
}
p{
    font-family:sans-serif;
    font-style: normal;
    font-size: 22px;
    line-height: 28px;
    text-align: center;
    padding:30px;
    color: #FFFFFF;
}
`
export const Conhecer=styled.section`
background-color:#2E3C50;

`
export const Content=styled.div`
display:flex;
flex-direction:column ;
justify-content:center ;
align-items:center;
padding:50px;
p{
    font-family:sans-serif;
    font-style: normal;
    font-size: 24px;
    line-height: 30px;
    text-align: center;
    color: #F3F1F0;
    max-width:600px;
}
button{
    height:40px;
    background-color:transparent;
    border:3px solid #66CB66;
    color: #66CB66;
    font-family:sans-serif;
    font-style: normal;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    width:250px;
    
    margin-top:30px;

}
`
export const Duvida=styled.div`
width:80vw;
margin:0 auto  ;
display:flex ;
padding-top:50px ;
padding-bottom:50px;
@media (max-width:1150px) {
    flex-wrap:wrap;
    
    }
`
export const DuvidaT=styled.div`

p{
    font-family: sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    color: #525D6E;
    margin-top:50px;

}
button{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 20px;
    gap: 10px;
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
    margin:50px auto;

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