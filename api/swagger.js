const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger/swagger_output.json';
const endpointsFiles = ['./routers/despesa.js'];
const doc = {
    info: {
        version: "1.0.0",
        title: "Despesa Manager API",
        description: " Documentação para API para o projeto Despesa Manager."
    },
    host: "localhost:5000",
    basePath: "/",
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    // tags: [
    //     {
    //         "name": "User",
    //         "description": "Endpoints"
    //     }
    // ],
    // securityDefinitions: {
    //     api_key: {
    //         type: "apiKey",
    //         name: "api_key",
    //         in: "header"
    //     },
    //     petstore_auth: {
    //         type: "oauth2",
    //         authorizationUrl: "https://petstore.swagger.io/oauth/authorize",
    //         flow: "implicit",
    //         scopes: {
    //             read_pets: "read your pets",
    //             write_pets: "modify pets in your account"
    //         }
    //     }
    // },
    // definitions: {
    //     User: {
    //         name: "Jhon Doe",
    //         age: 29,
    //         parents: {
    //             father: "Simon Doe",
    //             mother: "Marie Doe"
    //         },
    //         diplomas: [
    //             {
    //                 school: "XYZ University",
    //                 year: 2020,
    //                 completed: true,
    //                 internship: {
    //                     hours: 290,
    //                     location: "XYZ Company"
    //                 }
    //             }
    //         ]
    //     },
    //     AddUser: {
    //         $name: "Jhon Doe",
    //         $age: 29,
    //         about: ""
    //     }
    // }
}

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./api_server.js');
});