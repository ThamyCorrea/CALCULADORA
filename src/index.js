const express = require("express");
const {soma, subtracao, multiplicacao, divisao} = require("./controladores/operacoes");

const app = express();

app.get("/somar", soma);

app.get("/subtrair", subtracao);

app.get("/multiplicar", multiplicacao);

app.get("/dividir", divisao);



app.listen(3000);
console.log("PORTA 3000");