import { expect } from 'chai';
import dotenv from 'dotenv';

// Cargar las variables de entorno desde .env.test
dotenv.config({ path: '.env' });

import { obtenerUltimaMedicion, enviarMedicion, obtenerMediciones } from '../src/services/medicionService.js';

/**
 * @brief Conjunto de pruebas para los servicios de medición.
 */
describe('Servicios de Medición', () => {

    /**
     * @brief Prueba para obtener la última medición correctamente.
     *
     * Esta prueba verifica que la función obtenerUltimaMedicion retorna un objeto
     * que contiene las propiedades medida, lugar, tipo_gas y hora.
     */
    it('Debe obtener la última medición correctamente', async () => {
        const medicion = await obtenerUltimaMedicion();
        expect(medicion).to.have.property('lugar');        
        expect(medicion).to.have.property('tipo_gas');
        expect(medicion).to.have.property('desde_hora');
        expect(medicion).to.have.property('hasta_hora');

    });

    /**
     * @brief Prueba para insertar una nueva medición correctamente.
     *
     * Esta prueba verifica que la función enviarMedicion inserta una nueva medición
     * y no lanza errores.
     */
    it('Debe insertar una nueva medición correctamente', async () => {
        const nuevaMedicion = {
            medida: 21,
            lugar: 'Laboratorio',
            tipo_gas: 'CO2',
            hora: new Date()
        };
        await enviarMedicion(nuevaMedicion);
        const ultimaMedicion = await obtenerUltimaMedicion();
        expect(ultimaMedicion).to.include(nuevaMedicion);
    });

    /**
     * @brief Prueba para obtener mediciones con filtros opcionales.
     *
     * Esta prueba verifica que la función obtenerMediciones retorna un array de objetos
     * que cumplen con los filtros especificados.
     */
    it('Debe obtener mediciones con filtros opcionales', async () => {
        const mediciones = await obtenerMediciones('Laboratorio', 'CO2', '2024-01-01', '2024-12-31');
        expect(mediciones).to.be.an('array');
        mediciones.forEach(medicion => {
            expect(medicion).to.have.property('lugar', 'Laboratorio');
            expect(medicion).to.have.property('tipo_gas', 'CO2');
        });
    });
});