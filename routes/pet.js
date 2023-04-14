const express = require('express');
const router = express.Router();
const fs = require('fs')

const PET_FILE = './data/pet.json'

/* GET users listing. */
router.get('/', function (req, res, next) {
    fs.readFile(PET_FILE, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('There was a problem reading the file.');
            return;
        }
        res.json(JSON.parse(data))
    })
});

//GET a basket by its id
router.get('/:id', (req, res) => {
    fs.readFile(PET_FILE, "utf-8", (err, data) => {
        if(err) {
            console.error(err);
            res.status(500).send('There was a problem reading the file.')
            return;
        }
        const pets = JSON.parse(data)
        const pet = pets.find(pet => pet.id === parseInt(req.params.id))
        // console.log(pet);
        // console.log(req.params);
        if(!pet) {
            res.status(404).send('Basket not found')
            return;
        }
        res.json(pet)
    })
})


// POST a new pet
router.post('/', (req, res) => {
    fs.readFile(PET_FILE, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('There was a problem reading the file.');
            return;
        }
        const pets = JSON.parse(data);
        //create a new basket with the data from the request

        const newPet = {
            id: (baskets.length + 1).toString(),
            name: req.body.name,
        };
        
        pets.push(newPet);
        //replace the contents of baskets json with the new array
        fs.writeFile(PET_FILE, JSON.stringify(pets), err => {
            if(err) {
                console.error(err);
                res.status(500).send('There was a problem writing to this file')
            }
            res.json(newPet)
        })
    })
});

module.exports = router;
