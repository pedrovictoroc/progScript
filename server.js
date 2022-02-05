const express = require('express');
const path = require('path');

const app = express();
const port = 8080;

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, "public" ,"index.html"));
});

app.get('/calculate', function(req, res) {
    const toCalculate = +req.query.toCalculate

    res.json({
        "result": toCalculate + 2
    })
});

app.listen(port, () => {
    console.log(`Servidor escutando porta ${port}`);
});