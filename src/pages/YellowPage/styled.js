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
    width: 680px;
    height: 45px;
    font-family:sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    text-align: center;
    color: #2E3C50;
}
`