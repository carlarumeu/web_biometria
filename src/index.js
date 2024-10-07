import express from 'express';
import {config} from 'dotenv';
import medicionRoutes from './routes/medicionRoutes.js';

config()

const app = express()
app.use(express.json());

app.use('/mediciones', medicionRoutes);

// Ruta de bienvenida
app.get('/', (req, res) => {
    res.send('Bienvenido a la API de mediciones');
});

// Servidor en escucha
app.listen(process.env.NODE_DOCKER_PORT, () => {
    console.log('Servidor corriendo en el puerto ${process.env.NODE_DOCKER_PORT}');
});