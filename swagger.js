const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Api Digital Talk',
        description: 'Atividade proposta',
    },
    host: 'localhost:5000',
    schemes: ['http']
};

const outputFile = './swagger-output.json';
const endpointsFile = ['./app.js']

swaggerAutogen(outputFile, endpointsFile, doc).then(()=> {
    require('./app.js');
})