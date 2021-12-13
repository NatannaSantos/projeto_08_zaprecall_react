import sad from "../../img/sad.png";
export default function TelaFinalFracasso(){
    return(
        <div className="telafracasso">
                <div className="container">
                    <div className="classificação">
                        <h1>PUTZ... <img src={sad}></img></h1>
                        <p>Você esqueceu alguns flashcards..Não desanime! Na próxima você consegue!</p>
                    </div>
                </div>
            </div>
    );
}