export default function App() {

    return (
        <>
            <div className="telaInicial">
                <div className="logo">
                    <img src="img/logo.png" />
                </div>
                <button>
                    praticar react
                    <img src="img/next.png" />
                </button>
            </div>
            <div className="flashCards">
                <header>
                    <img src="img/logo-mini.png" />
                </header>
                <div className="container">
                    <div className="flashcardFrente">
                        <p> O que é JSX? </p>
                        <div className="numeroCarta">
                            <p>1/8</p>
                        </div>
                        <div className="botaoRetorno">
                            <img src="img/turn.png" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flashCardVirado">
                <header>
                    <img src="img/logo-mini.png" />
                </header>
                <div className="container">
                    <div className="flashcardVerso">
                        <div className="tituloCard">
                            <p> O que é JSX? </p>
                        </div>
                        <div className="conteudoTexto">
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non ullamcorper at quis eu. Malesuada iaculis viverra a tincidunt arcu nullam. Orci tortor arcu placerat id sit et. Elementum in erat cras tortor at auctor diam.</p>
                        </div>
                        <div className="respostas">
                            <button class="respostaUm">Aprendi agora</button>
                            <button class="respostaDois">Não lembrei</button>
                            <button class="respostaTres">Lembrei com esforço</button>
                            <button class="respostaQuatro">Zap!</button>
                        </div>
                        <div className="numeroCarta">
                            <p>1/8</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="telaSucesso">
                <header>
                    <img src="img/logo-mini.png" />
                </header>
                <div className="container">
                    <div className="classificação">
                        <h1>PARABÉNS! <img src="img/party.png"></img></h1>
                        <p>Você não esqueceu de nenhum flashcard!</p>
                    </div>
                </div>
            </div>
        </>
    );
}