import styled from "styled-components";

export const Container = styled.div`
height:100vh;
background:#2E3C50;
`
export const LogoContainer = styled.div`
height:80px;
display:flex;
align-items: center;
justify-content:center;
`
export const ContentContainer = styled.div`
width:600px;
margin:0 auto;
.number{
    color: #66CB66;
    font-size:50px;
    font-weight:600;

}
.question-box{
    display:flex;
    align-items:center;
    justify-content:start;
    width:600px;
    background-color:#525D6E;
    color:#FFFFFF;
    margin:20px 0 0 0 ;
    padding:10px;

    font-family:sans-serif;
    font-style: normal;
    font-size: 16px;
    line-height: 24px;
    input{
        margin-right:10px;
    }
}
.question-box1{
    display:flex;
    align-items:center;
    justify-content:start;
    width:600px;
    background-color:#525D6E;
    color:#FFFFFF;
    margin:20px 0 0 0 ;
    padding:10px;

    font-family:sans-serif;
    font-style: normal;
    font-size: 16px;
    line-height: 24px;
    input{
        margin-right:10px;
    }
}

`
export const ButtonContainer = styled.div`
display:grid;
grid-template-columns:100px 100px;
justify-content:space-between;
align-items:center;
margin-top:30px;
width:600px;
.next{
    width: 132px;
    height: 36px;
    border:none;
    background: #66CB66;

    font-family:sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: #2E3C50;
}
.previous{
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    width: 132px;
    height: 36px;
    color: #66CB66;
    border:2px solid #66CB66;
    background-color:transparent;
}
`
export const NumberQuestionContainer = styled.div`
display:flex;
.question{
    font-family: sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: #FFFFFF;
    padding:20px;
}
`
export const NameContainer = styled.div`
input{
    width:100%;
    height:30px;
    background-color:transparent;
    border:none;
    border-bottom:2px solid #ffffff;
    padding:10px;
    color:#ffffff;
    font-size:1.2em;

}
textarea:focus, input:focus, select:focus {
    box-shadow: 0 0 0 0;
    border-bottom:2px solid #ffffff;
    outline: 0;
} 

`
export const ResCard = styled.div`

`