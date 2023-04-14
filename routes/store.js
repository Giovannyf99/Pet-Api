const express = require('express');
const router = express.Router();
const fs = require('fs')

const STORE_FILE = './data/store.json'

/* GET users listing. */
router.get('/', function(req, res, next) {
    fs.readFile(STORE_FILE, 'utf8', (err, data) => {
        if(err){
            console.error(err);
            res.status(500).send('There was a problem reading the file.');
            return;
        }
        res.json(JSON.parse(data))
    })
});

//GET a basket by its id
router.get('/:id', (req, res) => {
    fs.readFile(STORE_FILE, "utf-8", (err, data) => {
        if(err) {
            console.error(err);
            res.status(500).send('There was a problem reading the file.')
            return;
        }
        const stores = JSON.parse(data)
        const store = stores.find(store => store.id === parseInt(req.params.id))
        // console.log(pet);
        // console.log(req.params);
        if(!store) {
            res.status(404).send('Basket not found')
            return;
        }
        res.json(store)
    })
})


// POST a new pet
router.post('/', (req, res) => {
    fs.readFile(STORE_FILE, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('There was a problem reading the file.');
            return;
        }
        const stores = JSON.parse(data);
        //create a new basket with the data from the request

        const newStore = {
            id: (stores.length + 1).toString(),
            name: req.body.name,
            boolean: req.body.boolean
        };
        
        stores.push(newStore);
        //replace the contents of baskets json with the new array
        fs.writeFile(STORE_FILE, JSON.stringify(stores), err => {
            if(err) {
                console.error(err);
                res.status(500).send('There was a problem writing to this file')
            }
            res.json(newStore)
        })
    })
});


module.exports = router;
