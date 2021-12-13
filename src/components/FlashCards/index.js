import { useState } from "react";
import Header from "../Header/index"
import FlashCardFrente from "./FlashCardFrente";
import FlashCardVerso from "./FlashCardVerso";
import FlashCardResposta from "./FlashCardResposta";


export default function FlashCards() {
    const [faceAtual, setFaceAtual] = useState('flashCardFrente');
    const [indiceAtual, setIndiceAtual] = useState(0);
    const [numeroJogadas, setNumeroJogadas] = useState(0);
    const [numeroZap,setNumeroZap]=useState(0);
   

    const frente = [
        {
            titulo: "O que é JSX?",
            index: "1/8"
        },
        {
            titulo: "O React é __",
            index: "2/8"
        },
        {
            titulo: "Componentes devem iniciar com __",
            index: "3/8"
        },
        {
            titulo: "Podemos colocar __ dentro do JSX",
            index: "4/8"
        },
        {
            titulo: "O ReactDOM nos ajuda __",
            index: "5/8"
        },
        {
            titulo: "Usamos o npm para __ ",
            index: "6/8"
        },
        {
            titulo: "Usamos props para __ ",
            index: "7/8"
        },
        {
            titulo: "Usamos estado (state) para __ ",
            index: "8/8"
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
        },
        {
            titulo: "Componentes devem iniciar com __",
            resposta: "letra maiúscula",
            index: "3/8"
        },
        {
            titulo: "Podemos colocar __ dentro do JSX",
            resposta: "expressões",
            index: "4/8"
        },
        {
            titulo: "O ReactDOM nos ajuda __",
            resposta: "interagindo com a DOM para colocar componentes ",
            index: "5/8"
        },
        {
            titulo: "Usamos o npm para __ ",
            resposta: "gerenciar os pacotes necessários e suas dependências",
            index: "6/8"
        },
        {
            titulo: "Usamos props para __ ",
            resposta: "passar diferentes informações para componentes",
            index: "7/8"
        },
        {
            titulo: "Usamos estado (state) para __ ",
            resposta: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
            index: "8/8"
        }
    ]
    const resposta = [
        {
            titulo: "O que é JSX?",
            resposta: "Uma extensão de linguagem do JavaScript",
            index: "1/8"
        },
        {
            titulo: "O React é __?",
            resposta: "uma biblioteca JavaScript para construção de interfaces",
            index: "2/8"
        },
        {
            titulo: "Componentes devem iniciar com __",
            resposta: "letra maiúscula",
            index: "3/8"
        },
        {
            titulo: "Podemos colocar __ dentro do JSX",
            resposta: "expressões",
            index: "4/8"
        },
        {
            titulo: "O ReactDOM nos ajuda __",
            resposta: "interagindo com a DOM para colocar componentes ",
            index: "5/8"
        },
        {
            titulo: "Usamos o npm para __ ",
            resposta: "gerenciar os pacotes necessários e suas dependências",
            index: "6/8"
        },
        {
            titulo: "Usamos props para __ ",
            resposta: "passar diferentes informações para componentes",
            index: "7/8"
        },
        {
            titulo: "Usamos estado (state) para __ ",
            resposta: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
            index: "8/8"
        }
    ]

    const paginaFrente = frente.map((cardFrente) => (
        <FlashCardFrente
            titulo={cardFrente.titulo}
            index={cardFrente.index}
            setFaceAtual={setFaceAtual}
            incrementarIndice={incrementarIndice}
            incrementarJogadas={incrementarJogadas}
            numeroJogadas={numeroJogadas}
            cliqueZap = {cliqueZap}
            numeroZap={numeroZap}
        />
    ));
    const paginaVerso = verso.map((cardVerso) => (
        <FlashCardVerso
            titulo={cardVerso.titulo}
            resposta={cardVerso.resposta}
            index={cardVerso.index}
            setFaceAtual={setFaceAtual}
            incrementarIndice={incrementarIndice}
            incrementarJogadas={incrementarJogadas}
            cliqueZap = {cliqueZap}
        />
    ));
    const paginaResposta = resposta.map((cardResposta) => (
        <FlashCardResposta
            titulo={cardResposta.titulo}
            resposta={cardResposta.resposta}
            index={cardResposta.index}
            setFaceAtual={setFaceAtual}
            incrementarIndice={incrementarIndice}
            incrementarJogadas={incrementarJogadas}
            cliqueZap = {cliqueZap}
            
        />
    ))
        
    function incrementarIndice(){
        setIndiceAtual(indiceAtual+1);
    }
    function incrementarJogadas(){
        setNumeroJogadas(numeroJogadas+1);
    }
    function cliqueZap(){
        setNumeroZap(numeroZap+1);
    }
    return (
        <div className="flashCards">
            <Header />
            <div className="container">
                <div class={faceAtual === "flashCardFrente" ? ' ' : "escondido"}>
                    {paginaFrente[indiceAtual]}
                </div>
                <div class={faceAtual === "flashCardVerso" ? ' ' : "escondido"}>
                    {paginaVerso[indiceAtual]}
                </div>
                <div class={faceAtual === "flashCardResposta" ? ' ' : "escondido"}>
                    {paginaResposta[indiceAtual]}
                </div>
            </div>            
        </div>        
    );
   
}

