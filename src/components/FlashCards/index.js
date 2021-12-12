import {useState} from "react";
import Header from "../Header/index"
import FlashCardFrente from "./FlashCardFrente";
import FlashCardVerso from "./FlashCardVerso";

export default function FlashCards() {
    const [faceAtual, setFaceAtual] = useState('flashCardFrente');
    

    const frente = [
        {
            titulo: "O que é JSX?",
            index: "1/8"
        },
        {
            titulo: "O React é __",
            index: "2/8"
        }

    ]
    const verso = [
        {
            titulo: "O que é JSX?",
            resposta: "Uma extensão de linguagem do JavaScript",
            index: "1/8"
        },
        {
            titulo: "O React é __?",
            resposta: "uma biblioteca JavaScript para construção de interfaces",
            index: "2/8"
        }
    ]
   
    return (
        <div className="flashCards">
            <Header />
            <div className="container">
                <div class={faceAtual==="flashCardFrente"? ' ': "escondido"}>
                    {frente.map((cardFrente) => (
                        <FlashCardFrente
                            titulo={cardFrente.titulo}
                            index={cardFrente.index}
                            setFaceAtual = {setFaceAtual}
                        />
                    ))
                    }
                </div>
                <div class={faceAtual==="flashCardVerso"? ' ': "escondido"}>
                    {verso.map((cardVerso) => (
                        <FlashCardVerso
                            titulo={cardVerso.titulo}
                            resposta={cardVerso.resposta}
                            index={cardVerso.index}
                        />
                    ))
                    }
                </div>
            </div>
          
        </div>
    );
}

