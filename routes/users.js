const express = require('express');
const router = express.Router();
const fs = require('fs')

const USERS_FILE = './data/users.json'

/* GET users listing. */
router.get('/', function (req, res, next) {
    fs.readFile(USERS_FILE, 'utf8', (err, data) => {
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
    fs.readFile(USERS_FILE, "utf-8", (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('There was a problem reading the file.')
            return;
        }
        const users = JSON.parse(data)
        const user = users.find(user => user.id === parseInt(req.params.id))
        // console.log(pet);
        // console.log(req.params);
        if (!user) {
            res.status(404).send('Basket not found')
            return;
        }
        res.json(user)
    })
})


// POST a new pet
router.post('/', (req, res) => {
    fs.readFile(USERS_FILE, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('There was a problem reading the file.');
            return;
        }
        const users = JSON.parse(data);
        //create a new basket with the data from the request

        const newUser = {
            id: (users.length + 1).toString(),
            name: req.body.name,
            age: 28,
            email: "john@example.com",
            address: {
                street: "123 Main St",
                city: "Anytown",
                state: "CA",
                zip: "12345"
            }
        }
        users.push(newUser);
        //replace the contents of baskets json with the new array
        fs.writeFile(USER_FILE, JSON.stringify(users), err => {
            if (err) {
                console.error(err);
                res.status(500).send('There was a problem writing to this file')
            }
            res.json(newUser)
        })
    })
});


module.exports = router;
