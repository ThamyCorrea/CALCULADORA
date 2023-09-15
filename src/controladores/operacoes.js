const operacoes = require('../bancoDeDados');



//soma
const soma = (req, res) => {

const {num1, num2} = req.query;
const numero1 = Number(req.query.num1);
const numero2 = Number(req.query.num2);
 
res.send(`${numero1 + numero2}`)

}

//subtracao
const subtracao = (req, res) => {

const {num1, num2} = req.query;
const numero1 = Number(req.query.num1);
const numero2 = Number(req.query.num2);
     
res.send(`${numero1 - numero2}`);
    
}

const multiplicacao = (req, res) => {

const {num1, num2} = req.query;
const numero1 = Number(req.query.num1);
const numero2 = Number(req.query.num2);
         
res.send(`${numero1 * numero2}`);
        
}

const divisao = (req, res) => {

const {num1, num2} = req.query;
const numero1 = Number(req.query.num1);
const numero2 = Number(req.query.num2);
             
res.send(`${numero1 / numero2}`);
            
}

module.exports = {
    soma,
    subtracao,
    multiplicacao,
    divisao
};

