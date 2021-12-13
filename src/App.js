import { useState } from "react"
import TelaInicial from "./components/TelaInicial/index";
import FlashCards from "./components/FlashCards/index";



export default function App() {
    const [paginaAtual, setPaginaAtual] = useState("telaInicial");
  
    return (
        <>
            <div className={paginaAtual === "telaInicial"? ' ' : "escondido"}>
                <TelaInicial setPaginaAtual={setPaginaAtual} />
            </div>
            <div className={paginaAtual === "flashCards"? ' ' : "escondido"}>
                <FlashCards />
            </div>           
           
        </>
    );
}