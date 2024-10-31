const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: "Programmers Api",
        description: "Programmers Api"
    },
    host: "localhost:3000",
    schemes: ["https"]
};

const outputFile = "./swagger.json";
const endpointFiles = ["./routes/index.js"];

swaggerAutogen(outputFile, endpointFiles, doc);