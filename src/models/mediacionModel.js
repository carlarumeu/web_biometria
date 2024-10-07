// src/models/medicionModel.js
import pool from '../config/db.js';

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

export const insertMedicion = async (medicion) => {
    const { medida, lugar, tipo_gas, hora } = medicion;
    const query = 'INSERT INTO mediciones (medida, lugar, tipo_gas, hora) VALUES (?, ?, ?, ?)';
    const [result] = await pool.execute(query, [medida, lugar, tipo_gas, hora]);
    return result.insertId;
};

export const getUltimaMedicion = async () => {
    const query = 'SELECT * FROM mediciones ORDER BY hora DESC LIMIT 1';
    const [rows] = await pool.query(query);
    return rows[0];
};
