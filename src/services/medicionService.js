import pool from '../config/db.js';

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

// Crear nueva medición
export const enviarMedicion = async (medicion) => {
  const { medida, lugar, tipo_gas, hora } = medicion;
  const query = 'INSERT INTO mediciones (medida, lugar, tipo_gas, hora) VALUES (?, ?, ?, ?)';
  await pool.query(query, [medida, lugar, tipo_gas, hora]);
};

// Obtener la última medición
export const obtenerUltimaMedicion = async () => {
  const [rows] = await pool.query('SELECT * FROM mediciones ORDER BY hora DESC LIMIT 1');
  return rows[0];
};