/*
 * Nombre del fichero: medicionController.js
 * Descripción: Controlador para manejar las operaciones relacionadas con las mediciones de gases.
 * Autores: Álex Escrivá Caravaca, Elena Ruiz de la Blanca y Carla Rumeu Montesinos
 * Fecha: 8 de octubre de 2024
 *
 * Este archivo ha sido realizado por Álex Escrivá Caravaca, Elena Ruiz de la Blanca y Carla Rumeu Montesinos el 8 de octubre de 2024.
 * Contiene las funciones para obtener todas las mediciones, crear una nueva medición y obtener la última medición registrada.
 * 
 * Todos los derechos reservados.
 */

import { obtenerMediciones, enviarMedicion, obtenerUltimaMedicion } from '../services/medicionService.js';

// Obtener todas las mediciones (con filtros opcionales)
/**
 * @module mediciones
 * @description Controlador para manejar las operaciones relacionadas con las mediciones.
 */

/**
 * @function getMediciones
 * @async
 * @param {Object} req - Objeto de solicitud HTTP.
 * @param {Object} res - Objeto de respuesta HTTP.
 * @description Obtiene todas las mediciones con filtros opcionales.
 * Los filtros incluyen lugar, tipo de gas, desde_hora y hasta_hora.
 * @returns {Promise<void>} Respuesta con el resultado de la operación.
 */
//req, res -> getMediciones()
export const getMediciones = async (req, res) => {
  try {
    const { lugar, tipo_gas, desde_hora, hasta_hora } = req.query;
    const mediciones = await obtenerMediciones(lugar, tipo_gas, desde_hora, hasta_hora);
    res.status(200).json(mediciones);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


/**
 * @function postMedicion
 * @async
 * @param {Object} req - Objeto de solicitud HTTP.
 * @param {Object} res - Objeto de respuesta HTTP.
 * @description Crea una nueva medición en la base de datos.
 * La información de la medición se obtiene del cuerpo de la solicitud.
 * @returns {Promise<void>} Respuesta con el resultado de la operación.
 */

// Crear nueva medición
// req, res -> postMedicion()
export const postMedicion = async (req, res) => {
  try {
    const nuevaMedicion = req.body;
    await enviarMedicion(nuevaMedicion);
    res.status(201).json({ message: 'Medición creada correctamente' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


/**
 * @function getUltimaMedicion
 * @async
 * @param {Object} req - Objeto de solicitud HTTP.
 * @param {Object} res - Objeto de respuesta HTTP.
 * @description Obtiene la última medición registrada.
 * Si no se encuentra ninguna medición, se retorna un error 404.
 * @returns {Promise<void>} Respuesta con la última medición o un mensaje de error.
 */

// Obtener la última medición
// req, res -> getUltimaMedicion()
export const getUltimaMedicion = async (req, res) => {
  try {
    const ultimaMedicion = await obtenerUltimaMedicion();
    if (!ultimaMedicion) {
      return res.status(404).json({ message: 'No se encontró ninguna medición' });
    }
    res.status(200).json(ultimaMedicion);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};