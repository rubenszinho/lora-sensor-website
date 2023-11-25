import './Botao.css'

const Botao = (props) => {
    return(
        <div className="login">
            <button className="botao-login">{props.text}</button>
        </div>
    );
}

export default Botao