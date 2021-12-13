import turn from "../../img/turn.png";

export default function FlashCardResposta({ titulo, resposta, index, setFaceAtual,incrementarIndice }) {
    return (
        <div className="flashcardResposta" data-identifier="flashcard">
            <div className="tituloCard">
                <p> {titulo} </p>
            </div>
            <div className="conteudoTexto">
                <p> {resposta}</p>
            </div>
            <div className="numeroCarta" data-identifier="counter">
                <p>{index}</p>
            </div>
            <div className="botaoRetorno" onClick={() => {setFaceAtual('flashCardFrente');incrementarIndice()}}data-identifier="arrow">
                <img src={turn} />
            </div>

        </div>

    );
}