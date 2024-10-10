// src/config/db.js
import { createPool } from 'mysql2/promise';
import dotenv from 'dotenv';

// Cargar las variables de entorno desde el archivo .env
dotenv.config();


/**
 * @module db
 * @description Configuración y creación de un pool de conexiones a la base de datos MySQL.
 */

/**
 * @const {Pool} pool
 * @description Pool de conexiones para la base de datos MySQL.
 * Se utiliza para manejar múltiples conexiones de forma eficiente.
 */
const pool = createPool({
    /**
     * @property {string} host - El host del servidor MySQL.
     * Se obtiene de la variable de entorno MYSQLDB_HOST.
     */
    host: process.env.MYSQLDB_HOST,

    /**
     * @property {string} user - Nombre de usuario para la conexión a la base de datos.
     * Este valor está fijado como 'root'.
     */
    user: 'root',

    /**
     * @property {string} password - Contraseña para la conexión a la base de datos.
     * Se obtiene de la variable de entorno MYSQLDB_ROOT_PASSWORD.
     */
    password: process.env.MYSQLDB_ROOT_PASSWORD,

    /**
     * @property {number} port - Puerto del servidor MySQL.
     * Se obtiene de la variable de entorno MYSQLDB_DOCKER_PORT.
     */
    port: process.env.MYSQLDB_DOCKER_PORT,


    /**
     * @property {string} database - Nombre de la base de datos a utilizar.
     * Este valor está fijado como 'biometria_bbdd'.
     */
    database: 'biometria_bbdd',

    /**
     * @property {boolean} waitForConnections - Indica si el pool debe esperar a que haya conexiones disponibles.
     */
    waitForConnections: true,

    /**
     * @property {number} connectionLimit - Límite máximo de conexiones en el pool.
     */
    connectionLimit: 10,

    /**
     * @property {number} queueLimit - Límite de conexiones en cola. 0 indica que no hay límite.
     */
    queueLimit: 0
});

// Exportar el pool de conexiones para su uso en otros módulos
export default pool;
