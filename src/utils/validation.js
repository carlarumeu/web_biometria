// src/utils/validation.js


/**
 * @module validation
 * @description Funciones de validación para las mediciones.
 */

/**
 * @function validarMedicion
 * @async
 * @param {Object} medicion - Objeto que contiene los datos de la medición a validar.
 * @param {number} medicion.medida - Valor de la medición.
 * @param {string} medicion.lugar - Lugar donde se tomó la medición.
 * @param {string} medicion.tipo_gas - Tipo de gas de la medición.
 * @param {string} medicion.hora - Hora en la que se realizó la medición (formato ISO 8601).
 * @returns {boolean} Devuelve true si la medición es válida.
 * @throws {Error} Si alguna de las validaciones falla.
 *
 * @example
 * // Ejemplo de uso
 * try {
 *     validarMedicion({ medida: 12.34, lugar: 'Laboratorio', tipo_gas: 'Oxígeno', hora: '2024-10-08T12:00:00Z' });
 * } catch (error) {
 *     console.error(error.message);
 * }
 */
export const validarMedicion = (medicion) => {
    const { medida, lugar, tipo_gas, hora } = medicion;
    
    if (typeof medida !== 'number') {
        throw new Error('La medida debe ser un número');
    }
    
    if (typeof lugar !== 'string' || lugar.trim() === '') {
        throw new Error('El lugar debe ser una cadena de texto no vacía');
    }
    
    if (typeof tipo_gas !== 'string' || tipo_gas.trim() === '') {
        throw new Error('El tipo_gas debe ser una cadena de texto no vacía');
    }
    
    if (isNaN(Date.parse(hora))) {
        throw new Error('La hora debe ser una fecha válida en formato ISO 8601');
    }
    
    return true;
};
