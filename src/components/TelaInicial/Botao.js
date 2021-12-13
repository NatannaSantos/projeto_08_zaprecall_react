import next from "../../img/next.png";

export default function Botao({texto, setPaginaAtual}) {
    return (
        <button onClick={() => setPaginaAtual('flashCards')} data-identifier="start-zap-recall">
            {texto}
            <img src={next} />
        </button>
    );
}