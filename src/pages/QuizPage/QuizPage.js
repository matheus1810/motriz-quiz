import { useState } from "react"
import { ButtonContainer, Container, ContentContainer, LogoContainer, NameContainer, NumberQuestionContainer } from "./styled"
import logo from "../../assets/logo.png"


export const QuizPage = () => {

    const [step, setStep] = useState(1)
    const [name, setName] = useState('')
    const [peso, setPeso] = useState(0)

    console.log('peso', peso)


    const mudaPeso = () => {
        setPeso(2)
    }

    const onSubmitf = (e) => {
        e.preventDefault()
        console.log(e.target)
    }

    const nextStep = () => {
        if (step >= 11) {
            setStep(11)
        } else {
            setStep(step + 1)
        }


    }

    const previousStep = () => {
        if (step <= 1) {
            setStep(1)
        } else {
            setStep(step - 1)
        }

    }

    return (
        <Container>
            <LogoContainer>
                <img src={logo} />
            </LogoContainer>
            <ContentContainer>
                <form onSubmit={onSubmitf}>
                    {step === 1 ?
                        <NameContainer>
                            <NumberQuestionContainer>
                                <p className="number">01</p>
                                <p className="question">qual seu nome ? </p>
                            </NumberQuestionContainer>
                            <input name='q1' value={name} onChange={(e) => { setName(e.target.value) }} />
                        </NameContainer> : <></>}
                    {step === 2 ? <div>
                        <p className="number">02</p>
                        <p>Quantos funcionários tem sua empresa ?</p>
                        <p><input type="radio" value='0' name='q1' />100 - 200 </p>
                        <p><input type="radio" value='0' name='q1' />300 - 400 </p>
                        <p><input type="radio" value='0' name='q1' />500 - 800 </p>
                        <p><input type="radio" value='0' name='q1' />900 -1200 </p>
                    </div> : <></>}
                    {step === 3 ? <div>
                        <p className="number">03</p>
                        <p>Seu ERP possui dificuldades de integração?</p>
                        <p><input onChange={(e) => { console.log(e.target.value) }} type="radio" value='3' name='q3' />Sim </p>
                        <p><input type="radio" value='2' name='q3' />maio ou menos </p>
                        <p><input type="radio" value='1' name='q3' />Não </p>
                    </div> : <></>}
                    {step === 4 ? <div>
                        <p className="number">04</p>
                        Pergunta 4
                    </div> : <></>}
                    {step === 5 ? <div>
                        <p className="number">05</p>
                        Pergunta 5
                    </div> : <></>}
                    {step === 6 ? <div>
                        <p className="number">06</p>
                        Pergunta 6
                    </div> : <></>}
                    {step === 7 ? <div>
                        <p className="number">07</p>
                        Pergunta 7
                    </div> : <></>}
                    {step === 8 ? <div>
                        <p className="number">08</p>
                        Pergunta 8
                    </div> : <></>}
                    {step === 9 ? <div>
                        <p className="number">09</p>
                        Pergunta 9
                    </div> : <></>}
                    {step === 10 ? <div>
                        <p className="number">10</p>
                        Pergunta 10
                    </div> : <></>}
                    {step === 11 ? <div>
                        <p className="number">11</p>
                        Pergunta 11
                    </div> : <></>}

                    <ButtonContainer>
                        <button
                            className="previous"
                            onClick={() => { previousStep() }}>Voltar</button>
                        <button
                            className="next"
                            onClick={() => { nextStep() }}>Avançar</button>

                    </ButtonContainer>
                </form>
            </ContentContainer>

        </Container>
    )
}