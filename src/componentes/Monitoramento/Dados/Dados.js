import './Dados.css'

const Dados = (props) => {

    let status = ""
    let backgroundColorClass = ""

    if (props.dados <= 40){
        status = "Normal"
        backgroundColorClass = '#3FA50F';
    }
    else if (props.dados <= 100){
        status = "Preocupante"
        backgroundColorClass = '#F3F320'
    }
    else{
        status = "Alerta vermelho"
        backgroundColorClass = '#E63C35'
    }

    const css = {
        width: '220px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '10px',
        backgroundColor: backgroundColorClass,
        fontWeight: 'bolder',
        borderRadius: '5px'
    }


    return(
        <div>
            <div className='sensor-data'>
                <p>{props.dados}</p>
            </div>
            <div style={css}>
                <p>{status}</p>
            </div>
        </div>
    );
}

export default Dados