const express = require('express'); //Library van express gebruiken
const router = express.Router();
const Campus = require('./models/campus');

router.get('/', (req, res) => { //Vanaf dat we slash tegenkomen deze code uitvoeren.
    console.log('/route called');
    res.send('<h1>Welcome to my API, these are the available router:</h1>'
    + '<h2>/</h2>'
    + 'Where are you right now'
    + '<hr/>'
    + '<h2>Campus</h2>'
    + 'Returns all campuses in the database using find()'
    + '<hr/>');
});

//Campus

router.get('/campus', async (req, res) => { //  /campus in uw url.
    console.log('/campus route called');
    try {
        res.json(await Campus.find());
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

//Campus zoeken

router.get('/campus/:id', async (req, res) => {
    console.log('/campus/:id route called');
    try {
        res.send(await Campus.findById(req.params.id))
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

//Campus maken

router.post('/campus/create', async(req, res) => {
    console.log('/campus/create route called');
    try {
        res.send(await Campus.create(req.body))
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

//Campus updaten

router.put('/campus/update/:id', async(req, res) => {
    console.log('/campus/update/:id route called');
    try {
        res.send(await Campus.findByIdAndUpdate(req.params.id, { $set: req.body }));
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

//Campus verwijderen

router.delete('/campus/delete/:id', async (req, res) => {
    console.log('/campus/delete/:id route called');
    try {
        res.send(await Campus.findByIdAndDelete(req.params.id));
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

module.exports = router;