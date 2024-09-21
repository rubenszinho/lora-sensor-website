import { useTheme } from '@mui/material/styles';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import PlaceIcon from '@mui/icons-material/Place';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import NetworkCheckIcon from '@mui/icons-material/NetworkCheck';

const Sensor = (props) => {
    const theme = useTheme();
    const sensorName = "Sensor " + props.text;
    const recepcao = props.ativo ? "Recepção ativa" : "Recepção inativa";
    const localizacao = props.location || "Localização indisponível";
    const tempoAtivo = props.tempoAtivo || "0 horas";
    const tempoAtivoTexto = props.ativo ? `Ativo há ${tempoAtivo}` : "Indisponível";


    return (
        <Card sx={{ width: '100%', bgcolor: theme.palette.primary.main }}>
            <CardContent>
                <Box display="flex" alignItems="center" mb={2}>
                    <SignalCellularAltIcon />
                    <Typography variant="subtitle1" ml={1}>{sensorName}</Typography>
                </Box>
                <Box display="flex" alignItems="center" mb={2}>
                    <PlaceIcon />
                    <Typography variant="subtitle1" ml={1}>{localizacao}</Typography>
                </Box>
                <Box display="flex" alignItems="center" mb={2}>
                    <CalendarTodayIcon />
                    <Typography variant="subtitle1" ml={1}>
                        {tempoAtivoTexto}
                    </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                    <NetworkCheckIcon />
                    <Typography variant="subtitle1" ml={1}>{recepcao}</Typography>
                </Box>
            </CardContent>
        </Card>
    );
};

export default Sensor;
