
export default function FlashCardVerso({titulo,resposta,index,setFaceAtual,incrementarJogadas,cliqueZap}) {
    
    return (
        <div className="flashcardVerso">
            <div className="tituloCard">
                <p> {titulo} </p>
            </div>
            <div className="conteudoTexto">
                <p> {resposta}</p>
            </div>
            <div className="respostas">
                <button onClick={()=> {setFaceAtual('flashCardResposta');incrementarJogadas()}} className="respostaUm" >Aprendi agora</button>
                <button onClick={()=> {setFaceAtual('flashCardResposta');incrementarJogadas()}} className="respostaDois">Não lembrei</button>
                <button onClick={()=> {setFaceAtual('flashCardResposta');incrementarJogadas()}}className="respostaTres">Lembrei com esforço</button>
                <button onClick={()=> {setFaceAtual('flashCardResposta');incrementarJogadas();cliqueZap()}}className="respostaQuatro">Zap!</button>
            </div>
            <div className="numeroCarta">
                <p>{index}</p>
            </div>
        </div>
    );
}