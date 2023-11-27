import { useTheme } from '@mui/material/styles';
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const Cabecalho = ({ onSensorChange, selectedSensor }) => {
    const theme = useTheme();

    return (
        <AppBar position="static" style={{ background: theme.palette.primary.main }}>
            <Toolbar>
                <div className="logo-container">
                    <img src={'https://i.imgur.com/GNUNVMX.png'} alt="App Logo" style={{ height: '50px' }} />
                </div>
                <Typography variant="h6" style={{ flexGrow: 1, textAlign: 'center' }}>
                    LoRa Communication for Water Level Monitoring
                </Typography>
                <Select
                    id="sensor-select"
                    value={selectedSensor}
                    onChange={onSensorChange}
                    label="Sensor"
                    sx={{
                        color: 'white',
                        background: theme.palette.secondary.main,
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'transparent', // Makes the border transparent
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'transparent', // Keeps the border transparent on hover
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'transparent', // Keeps the border transparent on focus
                        },
                    }}
                >
                    <MenuItem value="1">Sensor 1</MenuItem>
                    <MenuItem value="2">Sensor 2</MenuItem>
                </Select>
            </Toolbar>
        </AppBar>
    );
};

export default Cabecalho;
