export default function Logo(props){
    return (
        <div className="logo">
                {props.imagem && <img src= {props.imagem}/>}
            </div>
    );

}