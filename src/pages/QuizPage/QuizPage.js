import { useState } from "react"
import { ButtonContainer, Container, ContentContainer, LogoContainer, NameContainer, NumberQuestionContainer } from "./styled"
import logo from "../../assets/logo.png"
import { useNavigate } from "react-router-dom"

export const QuizPage = () => {

    const [step, setStep] = useState(3)
    const [name, setName] = useState('')
    const [peso, setPeso] = useState(0)

    const navigate = useNavigate()




    const onSubmitf = (e) => {
        e.preventDefault()
    }

    const nextStep = () => {

        if (step >= 11) {
            changePage()
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

    const changePage = () => {
        if (peso <= 5) {
            navigate('/verde')
        } else if (peso >= 6 && peso <= 10) {
            navigate('/amarelo')
        } else {
            navigate('/vermelho')
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
                        <NumberQuestionContainer>
                            <p className="number">02</p>
                            <p className="question">Qual  é o tamanho da sua empresa?</p>
                        </NumberQuestionContainer>
                        <p className="question-box1"><input type="radio" value='0' name='q1' />1 a 19 funcionários</p>
                        <p className="question-box1"><input type="radio" value='0' name='q1' />20 a 99 funcionários </p>
                        <p className="question-box1"><input type="radio" value='0' name='q1' />100 a 299 funcionários</p>
                        <p className="question-box1"><input type="radio" value='0' name='q1' />300 a 599 funcionários</p>
                        <p className="question-box1"><input type="radio" value='0' name='q1' />Acima de 600 funcionários</p>
                    </div> : <></>}



                    {step === 3 ? <div>
                        <NumberQuestionContainer>
                            <p className="number">03</p>
                            <p className="question">Seu ERP possui dificuldades de integração?</p>
                        </NumberQuestionContainer>
                        <p className="question-box">
                            <input onChange={(e) => { setPeso(peso + Number(e.target.value)) }} type="radio" value='3' name='q3' /> Sim. Apesar de ter um ERP, preciso de outros sistemas para diferentes áreas da empresa,  o que torna os processos mais complexos e pouco fluidos </p>

                        <p className="question-box">
                            <input
                                onChange={(e) => { setPeso(peso + Number(e.target.value)) }}
                                type="radio"
                                value='2'
                                name='q3'
                            /> Sim, mas da forma que está funcionando me atende bem, não tenho muitos problemas
                        </p>

                        <p className="question-box">
                            <input
                                onChange={(e) => { setPeso(peso + Number(e.target.value)) }}
                                type="radio"
                                value='1'
                                name='q3'
                            />Não, preciso de poucas integrações e meu ERP se adapta muito bem às minhas necessidades
                        </p>

                    </div> : <></>}




                    {step === 4 ? <div>
                        <NumberQuestionContainer>
                            <p className="number">04</p>
                            <p className="question">Como é o suporte do seu fornecedor?  </p>
                        </NumberQuestionContainer>

                        <p className="question-box">
                            <input
                                onChange={(e) => { setPeso(peso + Number(e.target.value)) }}
                                type="radio" value='3' name='q4' />Tenho dificuldades em manter contato com o fornecedor quando preciso de ajuda</p>
                        <p className="question-box">
                            <input
                                onChange={(e) => { setPeso(peso + Number(e.target.value)) }}
                                type="radio" value='2' name='q4' />Quando tenho dúvidas ou problemas, ele se dispõe a ajudar</p>
                        <p className="question-box">
                            <input
                                onChange={(e) => { setPeso(peso + Number(e.target.value)) }}
                                type="radio" value='1' name='q4' />Mesmo quando não preciso, ele entra em contato para acompanhar o meu processo evolutivo, sugerindo melhorias nos meus processos baseado nas melhores práticas administrativas</p>

                    </div> : <></>}



                    {step === 5 ? <div>
                        <NumberQuestionContainer>
                            <p className="number">05</p>
                            <p className="question">Você é dependente de consultores externos ou os seus colaboradores já conseguem fazer o uso do sistema de forma independente?</p>
                        </NumberQuestionContainer>
                        <p className="question-box"><input onChange={(e) => { setPeso(peso + Number(e.target.value)) }} type="radio" value='3' name='q5' /> Preciso sempre de consultores externos para me auxiliar</p>
                        <p className="question-box"><input onChange={(e) => { setPeso(peso + Number(e.target.value)) }} type="radio" value='2' name='q5' /> Normalmente minha equipe consegue se virar bem, de vez em quando precisamos de consultores para resolver problemas muito específicos</p>
                        <p className="question-box"><input onChange={(e) => { setPeso(peso + Number(e.target.value)) }} type="radio" value='1' name='q5' /> Tenho um departamento ou profissional responsável, totalmente independente </p>
                    </div> : <></>}




                    {step === 6 ? <div>
                        <NumberQuestionContainer>
                            <p className="number">06</p>
                            <p className="question">Como você descreveria a capacidade do seu ERP na visualização de dados gerenciais para tomada de decisão? </p>
                        </NumberQuestionContainer>

                        <p className="question-box"><input onChange={(e) => { setPeso(peso + Number(e.target.value)) }} type="radio" value='3' name='q6' /> O meu sistema apresenta gráficos já oferecidos pelo próprio ERP, com baixa capacidade de personalização. Quando preciso de informações mais completas, preciso extrair planilhas e fazer o processo manualmente.</p>
                        <p className="question-box"><input onChange={(e) => { setPeso(peso + Number(e.target.value)) }} type="radio" value='2' name='q6' /> Poderia ser melhor, mas o básico funciona</p>
                        <p className="question-box"><input onChange={(e) => { setPeso(peso + Number(e.target.value)) }} type="radio" value='1' name='q6' /> Muito boa, consigo fazer ótimos relatórios através do meu ERP</p>
                    </div> : <></>}




                    {step === 7 ? <div>
                        <NumberQuestionContainer>
                            <p className="number">07</p>
                            <p className="question">Caso sua empresa cresça ainda mais no ano que vem, você acredita que o seu atual ERP consegue acompanhar a sua evolução? </p>
                        </NumberQuestionContainer>

                        <p className="question-box"><input onChange={(e) => { setPeso(peso + Number(e.target.value)) }} type="radio" value='3' name='q7' /> Acredito que não, já sinto algumas limitações atualmente</p>
                        <p className="question-box"><input onChange={(e) => { setPeso(peso + Number(e.target.value)) }} type="radio" value='2' name='q7' />Não consigo avaliar</p>
                        <p className="question-box"><input onChange={(e) => { setPeso(peso + Number(e.target.value)) }} type="radio" value='1' name='q7' />Sim, com certeza meu ERP ainda tem muito a ser explorado, pois utilizo poucos recursos que ele oferece</p>
                    </div> : <></>}




                    {step === 8 ?
                        <NameContainer>
                            <NumberQuestionContainer>
                                <p className="number">08</p>
                                <p className="question">Para finalizar preciso de algumas informações sobre você. Em qual empresa você trabalha?   </p>
                            </NumberQuestionContainer>
                            <input name='q1' value={name} onChange={(e) => { setName(e.target.value) }} />
                        </NameContainer> : <></>}




                    {step === 9 ? <div>
                        <NumberQuestionContainer>
                            <p className="number">09</p>
                            <p className="question">Qual cargo você ocupa? </p>
                        </NumberQuestionContainer>

                        <p className="question-box"><input type="radio" value='0' name='q3' /> Sócio/CEO</p>
                        <p className="question-box"><input type="radio" value='0' name='q3' /> Proprietário </p>
                        <p className="question-box"><input type="radio" value='0' name='q3' /> Gerente/coordenador </p>
                        <p className="question-box"><input type="radio" value='0' name='q3' /> Analista </p>
                        <p className="question-box"><input type="radio" value='0' name='q3' /> Assistente</p>
                        <p className="question-box"><input type="radio" value='0' name='q3' /> Outro</p>
                    </div> : <></>}




                    {step === 10 ?
                        <NameContainer>
                            <NumberQuestionContainer>
                                <p className="number">10</p>
                                <p className="question"> Qual é o seu telefone?</p>
                            </NumberQuestionContainer>
                            <input name='q1' value={name} onChange={(e) => { setName(e.target.value) }} />
                        </NameContainer> : <></>}



                    {step === 11 ?
                        <NameContainer>
                            <NumberQuestionContainer>
                                <p className="number">11</p>
                                <p className="question">Pronto! Deixe seu e-mail aqui para receber o resultado.</p>
                            </NumberQuestionContainer>
                            <input name='q1' value={name} onChange={(e) => { setName(e.target.value) }} />
                        </NameContainer> : <></>}



                    <ButtonContainer>
                        <button
                            className="previous"
                            onClick={() => { previousStep() }}>Voltar</button>
                        <button
                            className="next"
                            onClick={(e) => { nextStep() }}>
                            {step === 11 ? 'Finalizar teste' : 'Avançar'}</button>

                    </ButtonContainer>
                </form>
            </ContentContainer>

        </Container>
    )
}