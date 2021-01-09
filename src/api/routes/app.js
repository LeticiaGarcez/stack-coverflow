const express = require("express");
const app = express();
const appService = require('../service/stack-exchange');

app.get('', (req, res) => {
    appService.getQuestions(req.query.question)
        .then(result => res.status(200).send(result))
        .catch(err => console.log("Error to get search on API", err, res));
})

module.exports = app;