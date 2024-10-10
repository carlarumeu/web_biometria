<div align="center" id="top"> &#xa0; </div> <h1 align="center">PROYECTO BIOMETRÍA Y MEDIOAMBIENTE</h1> <h2 align="center">Contenedores Docker, Base de Datos y API</h2> <p align="center"> <a href="#dart-about">Acerca del proyecto</a> &#xa0; | &#xa0; <a href="#rocket-technologies">Tecnologías</a> &#xa0; | &#xa0; <a href="#white_check_mark-requirements">Requisitos</a> &#xa0; | &#xa0; <a href="#checkered_flag-starting">Comenzando</a> &#xa0; | &#xa0; <a href="#computer-database-queries">Consultas</a> &#xa0; | &#xa0; <a href="#memo-license">Licencia</a> &#xa0; | &#xa0; <a href="https://github.com/eleecash" target="_blank">Autor</a> </p> <br>

</div> 
</div><h2>:dart: Acerca del proyecto</h2>
Este proyecto define una API REST para obtener y almacenar mediciones de sensores de gases. Utiliza una arquitectura Docker con contenedores para la aplicación Node.js y una base de datos MySQL, permitiendo un entorno fácilmente replicable y escalable.

</div><h2>:rocket: Tecnologías</h2>

- Docker
- Node.js
- MySQL
- Express
- MySQL2 (Node Package)

</div><h2>:white_check_mark: Requisitos</h2>
Antes de comenzar, asegúrate de tener Git, Node.js y Docker instalados en tu máquina.

Asegúrate de definir las siguientes variables de entorno en un archivo .env en el directorio raíz del proyecto:

MYSQLDB_HOST=mysqldb
MYSQLDB_USER=root
MYSQLDB_ROOT_PASSWORD=123456
MYSQLDB_DATABASE=biometria_bbdd
MYSQLDB_LOCAL_PORT=3306
MYSQLDB_DOCKER_PORT=3306

NODE_LOCAL_PORT=3000
NODE_DOCKER_PORT=3000

</div><h2>:checkered_flag: Comenzando</h2>
Pasos para clonar y levantar los contenedores Docker:
Clonar el proyecto desde GitHub:

1. Clonar el proyecto desde GitHub:
 https://github.com/carlarumeu/web_biometria

2. Accede al directorio del proyecto:
cd web_biometria

3. Crea el archivo .env con las variables de entorno necesarias:
touch .env

4. Construir y levantar los contenedores utilizando Docker Compose:
docker-compose up --build

5. Accede a la aplicación:
- La API estará disponible en http://localhost:3000.
- La base de datos MySQL estará escuchando en el puerto 3306.

Estructura del Proyecto:
- Dockerfile: Define la imagen de Node.js para la aplicación y el entorno de trabajo.
- docker-compose.yml: Configura los servicios de Docker para la base de datos MySQL y la aplicación Node.js.
- db.js: Configuración de la conexión a la base de datos.
- medicionController.js: Controladores para manejar las rutas de la API.
- medicionService.js: Servicios que interactúan con la base de datos.
- index.js: Punto de entrada principal del servidor Express.
- database-init.sql: Script SQL para inicializar la base de datos.
- ejemplosdatos.sql: Datos de ejemplo para pruebas iniciales.

</div><h2>:computer: Consultas a la Base de Datos</h2>

- Obtener todas las mediciones:
GET /mediciones

Parámetros opcionales:

- lugar: Filtra por lugar.
- tipo_gas: Filtra por tipo de gas.
- desde_hora: Filtra desde una hora específica.
- hasta_hora: Filtra hasta una hora específica.

- Enviar una nueva medición 
POST /mediciones

Cuerpo de la solicitud (JSON):

{
  "medida": 50.5,
  "lugar": "Zona Industrial",
  "tipo_gas": "CO2",
  "hora": "2024-09-26T14:30:00"
}

- Obtener la última medición registrada:
GET /mediciones/ultima

- Inicializar la base de datos manualmente:
Si necesitas inicializar o reinicializar la base de datos, puedes usar los archivos SQL proporcionados en la carpeta src/mysql-init/:

database-init.sql: Crea las tablas necesarias.
ejemplosdatos.sql: Inserta datos de ejemplo en la tabla mediciones.

</div><h2>:memo: License</h2>

Este proyecto está bajo la licencia MIT.

</div><h2>:memo: Proyectos relacionados</h2>
https://github.com/carlarumeu/Arduino-Biometria
https://github.com/carlarumeu/android_biometria 

Hecho con :heart: por Carla Rumeu Montesinos