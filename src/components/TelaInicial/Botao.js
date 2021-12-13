import next from "../../img/next.png";

export default function Botao({texto, setPaginaAtual}) {
    return (
        <button onClick={() => setPaginaAtual('flashCards')}>
            {texto}
            <img src={next} />
        </button>
    );
}