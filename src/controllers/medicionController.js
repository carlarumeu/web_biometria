import { obtenerMediciones, enviarMedicion, obtenerUltimaMedicion } from '../services/medicionService.js';

// Obtener todas las mediciones (con filtros opcionales)
export const getMediciones = async (req, res) => {
  try {
    const { lugar, tipo_gas, desde_hora, hasta_hora } = req.query;
    const mediciones = await obtenerMediciones(lugar, tipo_gas, desde_hora, hasta_hora);
    res.status(200).json(mediciones);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Crear nueva medición
export const postMedicion = async (req, res) => {
  try {
    const nuevaMedicion = req.body;
    await enviarMedicion(nuevaMedicion);
    res.status(201).json({ message: 'Medición creada correctamente' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Obtener la última medición
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