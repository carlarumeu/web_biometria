import pool from '../config/db.js';

/**
 * @module medicionService
 * @description Servicio para manejar operaciones relacionadas con las mediciones en la base de datos.
 */

/**
 * @function obtenerMediciones
 * @async
 * @param {string} [lugar] - Lugar de la medición.
 * @param {string} [tipo_gas] - Tipo de gas de la medición.
 * @param {string} [desde_hora] - Hora de inicio para el filtro de mediciones.
 * @param {string} [hasta_hora] - Hora de fin para el filtro de mediciones.
 * @returns {Promise<Array<Object>>} Lista de mediciones que cumplen con los filtros especificados.
 * @throws {Error} Si ocurre un error durante la consulta a la base de datos.
 */
// Obtener mediciones con filtros opcionales
export const obtenerMediciones = async (lugar, tipo_gas, desde_hora, hasta_hora) => {
  let query = 'SELECT * FROM mediciones WHERE 1=1';
  const params = [];

  if (lugar) {
    query += ' AND lugar = ?';
    params.push(lugar);
  }

  if (tipo_gas) {
    query += ' AND tipo_gas = ?';
    params.push(tipo_gas);
  }

  if (desde_hora) {
    query += ' AND hora >= ?';
    params.push(desde_hora);
  }

  if (hasta_hora) {
    query += ' AND hora <= ?';
    params.push(hasta_hora);
  }

  const [rows] = await pool.query(query, params);
  return rows;
};


/**
 * @function enviarMedicion
 * @async
 * @param {Object} medicion - Objeto que contiene los datos de la medición a insertar.
 * @param {number} medicion.medida - Valor de la medición.
 * @param {string} medicion.lugar - Lugar de la medición.
 * @param {string} medicion.tipo_gas - Tipo de gas de la medición.
 * @param {string} medicion.hora - Hora en la que se realizó la medición.
 * @returns {Promise<void>} 
 * @throws {Error} Si ocurre un error durante la inserción en la base de datos.
 */

// Crear nueva medición
export const enviarMedicion = async (medicion) => {
  const { medida, lugar, tipo_gas, hora } = medicion;
  const query = 'INSERT INTO mediciones (medida, lugar, tipo_gas, hora) VALUES (?, ?, ?, ?)';
  await pool.query(query, [medida, lugar, tipo_gas, hora]);
};


/**
 * @function obtenerUltimaMedicion
 * @async
 * @returns {Promise<Object|null>} La última medición registrada, o null si no hay mediciones.
 * @throws {Error} Si ocurre un error durante la consulta a la base de datos.
 */
// Obtener la última medición
export const obtenerUltimaMedicion = async () => {
  const [rows] = await pool.query('SELECT * FROM mediciones ORDER BY hora DESC LIMIT 1');
  return rows[0];
};