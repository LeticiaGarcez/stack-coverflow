var express = require("express");
var router = express.Router();
const json = {
    "teste": 'lalala',
    'teste2': 'lelele'
}
router.get("/", function(req, res, next) {
    res.send(json);
});

module.exports = router;