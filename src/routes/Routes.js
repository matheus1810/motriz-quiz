import { Routes, Route } from "react-router-dom"
import { GreenPage } from "../pages/GreenPage/GreenPage"
import { HomePage } from "../pages/HomePage/HomePage"
import { QuizPage } from "../pages/QuizPage/QuizPage"
import { RedPage } from "../pages/RedPage/RedPage"
import { YellowPage } from "../pages/YellowPage/YellowPage"


export const Routers = () => {
    return (

        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/verde" element={<GreenPage/>} />
            <Route path="/amarelo" element={<YellowPage/>} />
            <Route path="/vermelho" element={<RedPage/>} /> 
            <Route path="/quiz" element={<QuizPage/>} />  
        </Routes>

    )
}