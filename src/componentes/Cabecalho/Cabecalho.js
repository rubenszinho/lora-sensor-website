import './Cabecalho.css'

const Cabecalho = ({ img, onSensorChange }) => {
    return (
        <div className="cabecalho">
            <img src={img} alt="Header" />
            <div className="sensor-dropdown">
                <label htmlFor="sensor-select">Sensor:</label>
                <select id="sensor-select" onChange={onSensorChange}>
                    <option value="">Select a Sensor</option>
                    <option value="sensor1">Sensor 1</option>
                    <option value="sensor2">Sensor 2</option>
                    {/* Add more sensor options here */}
                </select>
            </div>
        </div>
    );
};


export default Cabecalho