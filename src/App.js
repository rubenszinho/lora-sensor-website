import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Cabecalho from './componentes/Cabecalho/Cabecalho';
import Sensor from './componentes/Monitoramento/Sensor/Sensor';
import Mapa from './componentes/Monitoramento/Mapa/Mapa';
import Dados from './componentes/Monitoramento/Dados/Dados';

function App() {
  const [selectedSensor, setSelectedSensor] = useState('sensor1');
  const [sensorData, setSensorData] = useState(null);

  const handleSensorChange = (event) => {
    setSelectedSensor(event.target.value);
  };

  useEffect(() => {
    fetch('http://andromeda.lasdpc.icmc.usp.br:8046/sensor_data')
      .then(response => response.json())
      .then(data => {
        // Assuming the response is an array of sensor data
        const relevantData = data.find(d => d.sensor_id === selectedSensor);
        setSensorData(relevantData);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [selectedSensor]); // Dependency array ensures this runs when selectedSensor changes

  const renderSensorData = () => {
    if (sensorData) {
      const { location, value } = sensorData;
      const sensorValues = JSON.parse(value);

      return (
        <>
          <Sensor text={selectedSensor} location={location} data={sensorValues['Leitura:']} ativo={true} />
          <Mapa latitude={location.split(", ")[0]} longitude={location.split(", ")[1]} />
          <Dados dados={sensorValues['Leitura:']} />
        </>
      );
    }

    return <p>Loading sensor data...</p>;
  };

  return (
    <Router>
      <div>
        <Cabecalho img="./imagens/conta.svg" onSensorChange={handleSensorChange} />
        <div className='total-content'>
          {renderSensorData()}
        </div>
      </div>
    </Router>
  );
}

export default App;
