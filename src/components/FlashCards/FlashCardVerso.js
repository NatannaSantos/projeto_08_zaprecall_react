export default function FlashCardVerso({titulo,resposta,index}) {
    return (
        <div className="flashcardVerso">
            <div className="tituloCard">
                <p> {titulo} </p>
            </div>
            <div className="conteudoTexto">
                <p> {resposta}</p>
            </div>
            <div className="respostas">
                <button class="respostaUm">Aprendi agora</button>
                <button class="respostaDois">Não lembrei</button>
                <button class="respostaTres">Lembrei com esforço</button>
                <button class="respostaQuatro">Zap!</button>
            </div>
            <div className="numeroCarta">
                <p>{index}</p>
            </div>
        </div>
    );
}