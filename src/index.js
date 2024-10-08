/*
 * Nombre del fichero: app.js
 * Descripción: Archivo principal para iniciar la aplicación Express y definir las rutas.
 * Autores: Álex Escrivá Caravaca, Elena Ruiz de la Blanca y Carla Rumeu Montesinos
 * Fecha: 8 de octubre de 2024
 *
 * Este archivo ha sido realizado por Álex Escrivá Caravaca, Elena Ruiz de la Blanca y Carla Rumeu Montesinos el 8 de octubre de 2024.
 * Contiene la configuración inicial de la aplicación, la definición de rutas y el inicio del servidor.
 * 
 * Todos los derechos reservados.
 */

import express from 'express';
import {config} from 'dotenv';
import medicionRoutes from './routes/medicionRoutes.js';

// Cargar las variables de entorno desde el archivo .env
config()

// Crear una instancia de la aplicación Express
const app = express()

// Middleware para parsear el cuerpo de las solicitudes como JSON
app.use(express.json());

// Definir las rutas de mediciones
app.use('/mediciones', medicionRoutes);

/**
 * @route GET /
 * @group Welcome
 * @returns {string} Mensaje de bienvenida
 * @throws {Error} Si hay un problema en el servidor
 */

// Ruta de bienvenida
app.get('/', (req, res) => {
    res.send('Bienvenido a la API de mediciones');
});

// Servidor en escucha
/**
 * @function startServer
 * @description Inicia el servidor en el puerto especificado en las variables de entorno.
 * @returns {void}
 */
app.listen(process.env.NODE_DOCKER_PORT, () => {
    console.log('Servidor corriendo en el puerto ${process.env.NODE_DOCKER_PORT}');
});