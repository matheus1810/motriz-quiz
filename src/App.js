import { Routers } from "./routes/Routes";
import { BrowserRouter } from "react-router-dom";

export const perguntas=[
  {
    pergunta:'Qual seu nome ?',
    
  }
]



function App() {
  return (
    <BrowserRouter>
    <Routers/>
    </BrowserRouter>
  );
}

export default App;
