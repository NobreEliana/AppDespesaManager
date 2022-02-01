require('dotenv').config();
const express = require('express');
const cors = require('cors');
const swaggerUI =require('swagger-ui-express');
const despesa = require('./routers/despesa');
const swaggerFile = require('./swagger/swagger_output.json');

const app = express()
  .use(cors())
  .use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerFile))
  .use(express.json())
  .use(express.urlencoded({extended:false}))
  .use("/", despesa);
 
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    next();
});

app.use((req, res, next) => {
    const erro = new Error("Não Encontrado");
    erro.status = 404;
    next(erro);
});

app.use((error, req, res, next) => {
    res.status(error.status||500);
    return res.send({
        erro:{
            message: error.message
        }
    });
});



  module.exports= app;
