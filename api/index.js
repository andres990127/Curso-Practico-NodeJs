const express = require('express'); // Servidor de express
const bodyParser = require('body-parser'); // Permite trabajar con toda la data en JSON

const swaggerUi = require('swagger-ui-express'); // Incluimos swagger para documentación grafica

const config = require('../config.js'); // Archivo de configuración que tendrá variables poco cambiables
const user = require('./components/user/network'); // Importo del objeto 'user'
const auth = require('./components/auth/network'); // Importo el objeto 'auth'

const app = express(); // Se crea la app

app.use(bodyParser.json());

const swaggerDoc = require('./swagger.json');

// ROUTER
app.use('/api/user', user); // Creamos la primera ruta, lo lleva hacia el objeto 'user'
app.use('/api/auth', auth); // Creamos la ruta para la autorización
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc)); // Ruta para acceder a la documentación


app.listen(config.api.port, () => { // El puerto lo importo desde el archivo de configuración, donde estan las variables de entorno
    console.log('Api escuchando en el puerto ', config.api.port);
});