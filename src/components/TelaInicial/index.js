import Logo from "./Logo"
import Botao from "./Botao"
import logo from "../../img/logo.png"

export default function TelaInicial({setPaginaAtual}) {
    
    
    return (
        <div className="telaInicial">
            <Logo imagem={logo} />
            <Botao texto="praticar react" setPaginaAtual={setPaginaAtual}/>
        </div>
    );

}