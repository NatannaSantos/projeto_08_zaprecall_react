import Header from "../Header/index"

export default function FlashCards() {
    return (
        <div className="flashCards">
            <Header />
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
        );
    }
    
