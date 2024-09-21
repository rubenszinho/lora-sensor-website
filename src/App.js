import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Cabecalho from './componentes/Cabecalho/Cabecalho';
import Sensor from './componentes/Monitoramento/Sensor/Sensor';
import Mapa from './componentes/Monitoramento/Mapa/Mapa';
import Dados from './componentes/Monitoramento/Dados/Dados';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { isValid, parseISO, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#263238',
    },
    secondary: {
      main: '#546e7a',
    },
  },
});


function App() {
  const [selectedSensor, setSelectedSensor] = useState('1');
  const [sensorData, setSensorData] = useState(null);

  const handleSensorChange = (event) => {
    setSelectedSensor(event.target.value);
  };

  useEffect(() => {
    const fetchData = () => {
      const url = `http://andromeda.lasdpc.icmc.usp.br:8046/sensor_data?sensor_id=${selectedSensor}`;

      fetch(url)
        .then(response => response.json())
        .then(data => {
          if (data) {
            // Parse the 'value' field if it exists and is a JSON string
            if (data.value) {
              try {
                data.value = JSON.parse(data.value);
              } catch (error) {
                console.error('Error parsing value:', error);
                return;
              }
            }

            setSensorData(data);
          }
        })
        .catch(error => console.error('Error fetching data:', error));
    };

    fetchData();
    const intervalId = setInterval(fetchData, 8000); // 8000ms = 8 segundos

    return () => clearInterval(intervalId);
  }, [selectedSensor]); // A dependência é o sensor selecionado


  const renderSensorData = () => {
    if (sensorData) {
      const { value } = sensorData;

      // Ensure location exists before splitting
      const locationExists = sensorData.location && sensorData.location.includes(",");
      const [latitude, longitude] = locationExists ? sensorData.location.split(", ") : [null, null];

      // Verifica se o sensor está ativo baseado no timestamp
      let tempoAtivo = 'Indisponível';
      let sensorAtivo = false;
      if (sensorData.timestamp) {
        const dataRecebida = parseISO(sensorData.timestamp);
        if (isValid(dataRecebida)) {
          tempoAtivo = formatDistanceToNow(dataRecebida, { locale: ptBR, addSuffix: true });
          sensorAtivo = new Date() - dataRecebida < 60 * 1000; // Ativo se a última leitura foi há menos de 1 minuto
        }
      }

      // Processar o valor da leitura
      const leituraValue = value && value['Leitura:'];

      return (
        <>
          <Sensor
            text={selectedSensor}
            location={sensorData.location}
            data={leituraValue}
            ativo={sensorAtivo}
            tempoAtivo={tempoAtivo}
          />
          {locationExists && <Mapa latitude={latitude} longitude={longitude} />}
          <Dados dados={leituraValue} />
        </>
      );
    }

    return <p>O sensor está desativado ou os dados ainda estão carregando...</p>;
  };


  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <div>
          <Cabecalho selectedSensor={selectedSensor} onSensorChange={handleSensorChange} />
          <div className='total-content' background-color='secondary.main'>
            {renderSensorData()}
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
