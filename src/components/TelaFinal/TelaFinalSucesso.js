import party from "../../img/party.png";

export default function TelaFinalSucesso(){
    return(
        <div className="telaSucesso">
                <div className="container">
                    <div className="classificação">
                        <h1>PARABÉNS! <img src={party}></img></h1>
                        <p>Você não esqueceu de nenhum flashcard!</p>
                    </div>
                </div>
            </div>
    );
}