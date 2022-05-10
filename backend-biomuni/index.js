const dataBase = require('./dataBase');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/activate-drone', (req, res) => {
    req = req.body;
    const query = dataBase.insert(req).into('drone').then((data) => {
            console.log(data);
            res.json({msg: "inserido com sucesso"});
        }).catch(err => {
            console.log(err);
        });

})

app.get('/activate-sprinkler', (req, res) => {
    const query = dataBase.select().table('sprinkler').then(data => {
        res.json(data);
        res.json({msg: "inserido com sucesso"});
    }).catch(err => {
        console.log(err);
    })
})

app.post('/activate-sprinkler', (req, res) => {
    req = req.body;
    const query = dataBase.insert(req).into('sprinkler').then((data) => {
            console.log(data);
            res.json({msg: "inserido com sucesso"});
        }).catch(err => {
            console.log(err);
        });

})

app.get('/activate-drone', (req, res) => {
    const query = dataBase.select().table('drone').then(data => {
        res.json(data);
    }).catch(err => {
        console.log(err);
    })
})

app.listen(8080, () => {
    console.log("api rodando - porta 8080");
})