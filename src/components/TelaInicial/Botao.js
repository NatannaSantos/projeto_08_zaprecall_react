import next from "../../img/next.png";

export default function Botao({texto,paginaAtual, setPaginaAtual}) {
    return (
        <button>
            {texto}
            <img src={next} />
        </button>
    );
}