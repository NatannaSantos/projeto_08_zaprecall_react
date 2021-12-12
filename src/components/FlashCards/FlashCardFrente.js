import turn from "../../img/turn.png";

export default function FlashCardFrente({titulo, index,setFaceAtual}) {
    return (
        <div className="flashcardFrente">
            <p>{titulo}</p>
            <div className="numeroCarta">
                <p>{index}</p>
            </div>
            <div className="botaoRetorno" onClick={()=>setFaceAtual('flashCardVerso')}>
                <img src={turn}/>
            </div>
        </div>
    );
}