import turn from "../../img/turn.png";
import TelaFinalSucesso from "../TelaFinal/TelaFinalSucesso";
import TelaFinalFracasso from "../TelaFinal/TelaFinalFracasso";

export default function FlashCardFrente({titulo, index,setFaceAtual,faceAtual,numeroJogadas, numeroZap}) {
  console.log(numeroJogadas,numeroZap)
    if(numeroJogadas === 7 && numeroZap === 7){
    return (<TelaFinalSucesso />);
  } else if(numeroJogadas === 7 && numeroZap !== 7){
      return (<TelaFinalFracasso />)
  }
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