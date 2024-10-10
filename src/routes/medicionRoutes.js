/*
 * Nombre del fichero: medicionRoutes.js
 * Descripción: Rutas para manejar las operaciones relacionadas con las mediciones de gases.
 * Autores: Álex Escrivá Caravaca, Elena Ruiz de la Blanca y Carla Rumeu Montesinos
 * Fecha: 8 de octubre de 2024
 *
 * Este archivo ha sido realizado por Álex Escrivá Caravaca, Elena Ruiz de la Blanca y Carla Rumeu Montesinos el 8 de octubre de 2024.
 * Contiene las rutas para obtener todas las mediciones, crear una nueva medición y obtener la última medición registrada.
 * 
 * Todos los derechos reservados.
 */

import { Router } from 'express';
import { getMediciones, postMedicion, getUltimaMedicion } from '../controllers/medicionController.js';

const router = Router();


/**
 * @module medicionRoutes
 * @description Rutas para manejar las operaciones relacionadas con las mediciones.
 */

/**
 * @route GET /
 * @group medicionRoutes
 * @description Obtiene todas las mediciones.
 * @produces application/json
 * @returns {Array<Object>} 200 - Lista de mediciones.
 * @returns {Error} 400 - Si ocurre un error al obtener las mediciones.
 */
router.get('/', getMediciones);

/**
 * @route POST /
 * @group medicionRoutes
 * @description Crea una nueva medición.
 * @produces application/json
 * @param {Object} medicion.body.required - Objeto que contiene los datos de la medición.
 * @returns {Object} 201 - Mensaje de éxito.
 * @returns {Error} 400 - Si ocurre un error al crear la medición.
 */
router.post('/', postMedicion);

/**
 * @route GET /ultima
 * @group medicionRoutes
 * @description Obtiene la última medición registrada.
 * @produces application/json
 * @returns {Object} 200 - Última medición.
 * @returns {Error} 404 - Si no se encuentra ninguna medición.
 * @returns {Error} 400 - Si ocurre un error al obtener la última medición.
 */
router.get('/ultima', getUltimaMedicion);

export default router;