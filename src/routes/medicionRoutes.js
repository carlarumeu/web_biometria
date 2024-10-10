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