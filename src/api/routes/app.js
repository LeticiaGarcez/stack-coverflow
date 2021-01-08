const express = require("express");
const app = express();
const appService = require('../service/stack-exchange');

app.get('/:question', (req, res) => {
    appService.getQuestions(req.params.question)
        .then(result => res.status(200).send(result))
        .catch(err => console.log("Error to get search on API", err, res));
})

module.exports = app;