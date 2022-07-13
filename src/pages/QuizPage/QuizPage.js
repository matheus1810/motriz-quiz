import { useState } from "react"
import { Container } from "./styled"


export const QuizPage = () => {

    const [step, setStep] = useState(3)
    const [name, setName] = useState('')
    const [peso, setPeso] = useState(0)

    console.log('peso' ,peso)


    const mudaPeso=()=>{
        setPeso(2)
    }

    const onSubmitf=(e)=>{
        e.preventDefault()
        console.log(e.target)
    }

    return (
        <Container>
            <form onSubmit={onSubmitf}>
            {step === 0 ? 
            <div>
               <p>1 - qual seu nome ? </p>
               <p><input name='q1' value={name} onChange={(e)=>{setName(e.target.value)}}/> </p>
            </div> : <></>}
            {step === 1 ? <div>
                <p> 2- Quantos funcionários tem sua empresa ?</p>
                <p><input type="radio" value='0' name='q1'/>100 - 200 </p>
                <p><input type="radio" value='0' name='q1'/>300 - 400 </p>
                <p><input type="radio" value='0' name='q1'/>500 - 800 </p>
                <p><input type="radio" value='0' name='q1'/>900 -1200 </p>
            </div> : <></>}
            {step === 2 ? <div>
               <p> 3- Seu ERP possui dificuldades de integração?</p>
               <p><input onChange={(e)=>{console.log(e.target.value)}} type="radio" value='3' name='q3'/>Sim </p>
                <p><input type="radio" value='2' name='q3'/>maio ou menos </p>
                <p><input type="radio" value='1' name='q3'/>Não </p>
            </div> : <></>}
            {step === 3 ? <div>
                Pergunta 3
            </div> : <></>}
            {step === 4 ? <div>
                Pergunta 4
            </div> : <></>}
            {step === 5 ? <div>
                Pergunta 5
            </div> : <></>}
            {step === 6 ? <div>
                Pergunta 6
            </div> : <></>}
            {step === 7 ? <div>
                Pergunta 7
            </div> : <></>}
            {step === 8 ? <div>
                Pergunta 8
            </div> : <></>}
            {step === 9 ? <div>
                Pergunta 9
            </div> : <></>}
            {step === 10 ? <div>
                Pergunta 10
            </div> : <></>}
            {step === 11 ? <div>
                Pergunta 11
            </div> : <></>}
            <button onClick={()=>{setStep(step-1)}}>Anterior</button>
            <button onClick={(e)=>{console.log(e.target.value)}}>Próximo</button>
            </form>
        </Container>
    )
}