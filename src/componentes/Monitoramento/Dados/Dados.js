import { useTheme } from '@mui/material/styles';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { green, yellow, red, grey } from '@mui/material/colors';

const Dados = (props) => {
    const theme = useTheme();

    let status;
    let color;

    if (props.dados == null) {
        status = "Sensor inativo";
        color = grey[500];
    } else if (props.dados <= 200) {
        status = "Normal";
        color = green[500];
    } else if (props.dados <= 250) {
        status = "Preocupante";
        color = yellow[800];
    } else {
        status = "Alerta vermelho";
        color = red[500];
    }

    return (
        <Card sx={{ width: '100%', bgcolor: theme.palette.primary.main }}>
            <CardContent sx={{ bgcolor: color }}>
                <Typography variant="h5" component="div" color="white">
                    {status}
                </Typography>
                <Typography sx={{ fontSize: 20 }} color="white" gutterBottom>
                    {props.dados != null ? `Nível de Risco: ${props.dados}` : "Dados não disponíveis"}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default Dados;
