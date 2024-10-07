// src/utils/validation.js

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
