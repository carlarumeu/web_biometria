/*
 * Nombre del fichero: errorHandler.js
 * Descripción: Middleware para manejar los errores en la aplicación.
 * Autores: Álex Escrivá Caravaca, Elena Ruiz de la Blanca y Carla Rumeu Montesinos
 * Fecha: 8 de octubre de 2024
 *
 * Este archivo ha sido realizado por Álex Escrivá Caravaca, Elena Ruiz de la Blanca y Carla Rumeu Montesinos el 8 de octubre de 2024.
 * Contiene la función para manejar los errores y enviar una respuesta adecuada al cliente.
 * 
 * Todos los derechos reservados.
 */

// src/middlewares/errorHandler.js
export const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
};
