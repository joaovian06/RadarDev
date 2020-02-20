const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require ('http');

const routes = require('./routes');
const {setupWebsocket} = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-u63n6.mongodb.net/weekomnis?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);

// Métodos HTTP: get, post, put, delete

// Tipos de parametros:

// Query Params: request.query (Filtros, Ordenação, paginação...)
// Route Params: request.params ( Identicar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)

// MongoDB (não realacional)