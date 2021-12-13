import turn from "../../img/turn.png";

export default function FlashCardResposta({ titulo, resposta, index, setFaceAtual,incrementarIndice }) {
    return (
        <div className="flashcardResposta">
            <div className="tituloCard">
                <p> {titulo} </p>
            </div>
            <div className="conteudoTexto">
                <p> {resposta}</p>
            </div>
            <div className="numeroCarta">
                <p>{index}</p>
            </div>
            <div className="botaoRetorno" onClick={() => {setFaceAtual('flashCardFrente');incrementarIndice()}}>
                <img src={turn} />
            </div>

        </div>

    );
}