const express = require('express');
const app = express();
const cookieParser = require("cookie-parser")
const http =  require('http').createServer(app)

//rotas
const cadastro = require("./controller/cadastroController.js")
const login = require("./controller/loginController.js")
const pergunta = require("./controller/perguntaController.js")
const resposta = require("./controller/respostaController.js")
const usuario = require("./controller/usuarioController.js")
const aviso = require("./controller/avisoController.js")
const chat = require("./controller/chatController.js")
//require mongo
require("./config/MongoConfig.js")
//require cors
const cors = require("cors")
const corsPort = {
    credentials: true,
    origin: ["https://gorgeous-faun-efe088.netlify.app"],
}
app.use(cors(corsPort))
//cookie
app.use(cookieParser())

app.use("/pergunta", pergunta)
app.use("/cadastro", cadastro)
app.use("/login", login)
app.use("/resposta", resposta)
app.use("/usuario", usuario)
app.use("/aviso", aviso)
app.use("/chat", chat)

module.exports = http;
