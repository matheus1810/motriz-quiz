import styled from "styled-components";

export const Container = styled.div`
background-color:#F1EFEE ;
`
export const Banner = styled.section`
margin:0 auto ;
width:80vw;
display:flex ;
`
export const TextBanner = styled.div`
color:#2E3C50;
max-width:550px;
.logo{
    padding:15px 15px 15px 0px;
}
.title{
    font-size:3em;
    line-height:50px;
    width:400px;
    padding:15px 15px 15px 0px;
}
.text{
    font-family: 'Open Sans';
    font-style: normal; 
    font-size:1.5em;
    line-height:30px;
    padding:15px 15px 15px 0px;
}
`
export const ImgBanner = styled.div`
height:95vh;
max-width:50vw;

img{
    height:100%;
    width:100%;
}
`
export const ButtonContainer = styled.button`
margin-top:40px;
button{
    color:#2E3C50;
    height:40px;
    background-color:#66CB66;
    width:300px;
    font-size:1.5em;
    border:none;
}
`
export const QueroFazerOTeste = styled.section`
background-color:gray;
position:absolute;
top:500px;
left:200px;
width:850px;
height:200px;
background-color:#ffffff ;
color:#2E3C50;
.text{
    width:80%;
    margin:0 auto ;
    font-size:1.5em;
    padding:30px;
}
`
export const ButtonTeste = styled.div`
   width:150px;
   margin:0 auto ;
button{
    color:#2E3C50;
    height:40px;
    background-color:#66CB66;
    width:230px;
    font-size:1.3em;
    border:none;
}
`
export const SeuErpTrabalhaParaVoce=styled.section`
margin-top:180px;
color: #2E3C50;
height:300px;
.title{

    padding:20px;
    margin:0 auto ;
    width:400px;
    font-size:2em;
}
.text{
   text-align:center ;
    font-size:1.3em;
    padding:20px;
    margin:0 auto ;
    width:700px;
}
`
export const VoceSofre=styled.section`
color: #2E3C50;
background-color:#ffffff;
display:flex;
justify-content:space-evenly ;
.text-container{
    width:500px;
}
.title{
    padding:20px 20px 20px 0px;
    margin:0 auto ;
    width:400px;
    font-size:2em;
}
.desanimo{
    font-size: 1.3em;
    padding:40px;
}
.processo{
    padding:0px 20px 20px 40px ;
    width:400px;
    line-height:30px;
    font-size:1.1em;
}
`
export const Duvidas=styled.section`
background-color:#2E3C50;
color:#ffffff ;
text-align:center ;

.btn-teste{
    color:#2E3C50;
    padding:10px;
    margin-top:20px;
    margin-bottom:20px;
    background-color:#66CB66;
    font-size:1em;
    border:none;

}

.title{
    font-size:2em;
    text-align:center ;
    padding:50px 0 50px 0 ;
}
.container{
    font-size:1.2em;
    margin:0 auto ;
    width:500px;
}
`
export const Footer=styled.div`
height:100px;
background-color:#525D6E;
display:flex ;
align-items:center;
justify-content:center;
`