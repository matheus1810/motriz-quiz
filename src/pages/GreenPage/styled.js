import styled from "styled-components";

export const Container=styled.div`
background: #E5E5E5;
.img-container{
    display:flex;
    align-items:center;
    justify-content:center;
    padding:10px;
}

`
export const FaixaDeAviso=styled.div`
background-color: rgba(178, 222, 39, 0.2);
position:relative;
color: #2E3C50;;
.faixa{
    padding-top:40px;
    padding-bottom:20px;
    font-family: 'Sora';
font-style: normal;
font-size: 20px;
line-height: 25px;
text-align: center;
letter-spacing: 0.06em;
text-transform: uppercase;
}
.nao-se-preucupe{
font-family: 'Sora';
font-style: normal;
font-weight: 600;
font-size: 36px;
line-height: 45px;
text-align: center;
padding-bottom:40px;
}
.icon-container{
    background-color:#66CB66;;
    display:grid;
    align-items:center;
    justify-content:center;
    border-radius:50%;
    width:45px;
    height:45px;
    position:absolute;
    top:150px;
    left:50%;
    

}
`

export const Resposta=styled.section`

padding-top:50px;
padding-bottom:60px;
`
export const ContainerRes=styled.div`
margin:0 auto;
width:80vw;
.flex-container{
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;

}
.primeiro-paragrafo{
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    text-align: center;
    color: #333333;
    width:55%;
    margin:0 auto ;
    padding-bottom:50px;
}
`
export const TextoContainer=styled.div`
    width:40%;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    color: #4D4D4D;
    p{
        padding:15px;
    }
`
export const BoxGray=styled.div`
    background: linear-gradient(180deg, #525D6E 65.95%, #77808C 100%);
    width:40%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    font-family: 'Sora';
    font-size: 22px;
    line-height: 28px;
    text-align: center;
    color: #FFFFFF;
p{
    width:80%;
    padding-top:50px;
    padding-bottom:50px;
}

button{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 20px;
    gap: 10px;
    width: 311px;
    height: 36px;
    border:none;
    background: #66CB66;
    font-family: 'Sora';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: #2E3C50;
}
`
export const Youtube=styled.div`
    background-color:white;
.container{
    display:flex;
    width:77vw;
    margin:0 auto;
    padding-bottom:50px;
    justify-content:space-between;
    padding-top:50px;

}
p{
    padding-top:50px;
    width: 403px;
    height: 182px;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    color: #4D4D4D;
}
.btn-img{
   
} 
div > img {
/*     position:absolute;
    top:40%;
    left:90%; */
} 
div > button{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 20px;
    gap: 10px;
    width: 301px;
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
}
`

export const BtnIcon=styled.div`
 position:relative;
 margin:0 auto ;
 margin-top:20px;
 width:70%;
button{
   
}
img{
    position:absolute;
    top:40%;
    left:90%;
}
`

export const Blog=styled.div`
    display:flex;
    padding-top:50px;
`
export const Blogcontent=styled.div`
    width:100%;
    background-color:#2E3C50;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    font-family: Arial,sans-serif;
p{
    font-family: Arial, sans-serif;
    line-height: 24px;
    width: 460px;
    height: 120px;
    color: #FFFFFF;

}
.politica{
    color:white;
    margin-top:20px;

}
`
export const InputContainer=styled.div`
height:30px;
button{
    border:none;
    width: 202px;
    height:33px;
    background: #66CB66;
    font-family: 'Sora';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    text-align: center;
    color: #2E3C50;
}
input{
    width:250px;
    height: 100%;
}
`

export const Footer=styled.div`
padding:30px;
display:flex;
justify-content:space-evenly ;
.icons{
    display:flex;
}
.icons > div {
    padding:10px;
}
.icons > p {
    padding:10px;
    font-family:sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: #2E3C50;

}
`