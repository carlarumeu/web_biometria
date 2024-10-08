// src/models/medicionModel.js
import pool from '../config/db.js';

/**
 * @module medicionModel
 * @description Modelo para manejar operaciones relacionadas con las mediciones en la base de datos.
 */

/**
 * @function getMediciones
 * @async
 * @param {Object} filters - Filtros para las mediciones.
 * @param {string} [filters.lugar] - Lugar de la medición.
 * @param {string} [filters.tipo_gas] - Tipo de gas de la medición.
 * @param {string} [filters.desde_hora] - Hora de inicio para el filtro de mediciones.
 * @param {string} [filters.hasta_hora] - Hora de fin para el filtro de mediciones.
 * @returns {Promise<Array<Object>>} Lista de mediciones que cumplen con los filtros especificados.
 * @throws {Error} Si ocurre un error durante la consulta a la base de datos.
 */

export const getMediciones = async (filters) => {
    let query = 'SELECT * FROM mediciones WHERE 1=1';
    const params = [];

    if (filters.lugar) {
        query += ' AND lugar = ?';
        params.push(filters.lugar);
    }

    if (filters.tipo_gas) {
        query += ' AND tipo_gas = ?';
        params.push(filters.tipo_gas);
    }

    if (filters.desde_hora) {
        query += ' AND hora >= ?';
        params.push(filters.desde_hora);
    }

    if (filters.hasta_hora) {
        query += ' AND hora <= ?';
        params.push(filters.hasta_hora);
    }

    const [rows] = await pool.query(query, params);
    return rows;
};


/**
 * @function insertMedicion
 * @async
 * @param {Object} medicion - Objeto que contiene los datos de la medición a insertar.
 * @param {number} medicion.medida - Valor de la medición.
 * @param {string} medicion.lugar - Lugar de la medición.
 * @param {string} medicion.tipo_gas - Tipo de gas de la medición.
 * @param {string} medicion.hora - Hora en la que se realizó la medición.
 * @returns {Promise<number>} ID de la medición insertada.
 * @throws {Error} Si ocurre un error durante la inserción en la base de datos.
 */

export const insertMedicion = async (medicion) => {
    const { medida, lugar, tipo_gas, hora } = medicion;
    const query = 'INSERT INTO mediciones (medida, lugar, tipo_gas, hora) VALUES (?, ?, ?, ?)';
    const [result] = await pool.execute(query, [medida, lugar, tipo_gas, hora]);
    return result.insertId;
};


/**
 * @function getUltimaMedicion
 * @async
 * @returns {Promise<Object|null>} La última medición registrada, o null si no hay mediciones.
 * @throws {Error} Si ocurre un error durante la consulta a la base de datos.
 */

export const getUltimaMedicion = async () => {
    const query = 'SELECT * FROM mediciones ORDER BY hora DESC LIMIT 1';
    const [rows] = await pool.query(query);
    return rows[0];
};
