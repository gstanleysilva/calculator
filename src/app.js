const express = require('express');
const calculator = require('./utils/calculator');

const app = express();

app.get('/', (req, res) => {
    res.send('Essa é a calculadora do Stanley');
})

app.get('/calc', (req, res) => {

    const operadores = {
        somar: 'somar',
        multiplicar: 'multiplicar',
        dividir: 'dividir',
        subrair: 'subrair'
    }

    if (!(req.query.val1 && req.query.val2)) {
        return res.send({
            error: '2 valores são obrigatórios'
        });
    }

    const oper = operadores[req.query.op];

    if (!oper) {
        return res.send({
            error: 'Operador Inválido'
        });
    }

    const func = calculator[oper];

    const resultado = func(parseInt(req.query.val1), parseInt(req.query.val2));

    if(resultado.error){
        return res.send({
            error: resultado.error
        });
    }

    res.send({
        result: resultado.valor
    });

})

app.listen(3000);