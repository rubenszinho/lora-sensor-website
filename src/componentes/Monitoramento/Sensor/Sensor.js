import './Sensor.css'

const Sensor = (props) => {

    let sensor_name = "Sensor " + props.text
    let location = props.location
    let data = "Ativo há " + props.data + " dias"
    let recepcao = "Recepção " + (props.ativo ? "ativa" : "inativa") 

    return(
        <div className='container'>
            <div className='sinal'>
                <img src="/imagens/signal.svg" className='icon'/>
                <span className='name'>{sensor_name}</span>
            </div>
            <div className='dados'>
                <div className='item'>
                    <img src="/imagens/loc.svg" className='icon'/>
                    <span className='name'>{location}</span>
                </div>
                <div className='item'>
                    <img src="/imagens/calendar.svg" className='icon'/>
                    <span className='name'>{data}</span>
                </div>
                <div className='item'>
                    <img src="/imagens/signal2.svg" className='icon'/>
                    <span className='name'>{recepcao}</span>
                </div>
            </div>
        </div>
    );
}

export default Sensor