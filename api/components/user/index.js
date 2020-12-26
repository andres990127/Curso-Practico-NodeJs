const store = require('../../../store/dummy');
const ctrl = require('./controller');

module.exports = ctrl(store); // Le inyectamos un store especifico al controlador, para hacerlo fácil de cambiar
                              // si queremos que nuestro controlador se comunique con otra base de datos diferente.