const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('WOW! i am exited to learn node and nodemon. Automatic start');
})

const users = [
    { id: 0, name: 'shimul', email: 'sim@gmail.com' },
    { id: 1, name: 'parul', email: 'parul@gmail.com' },
    { id: 2, name: 'sim', email: 'sim@gmail.com' },
    { id: 3, name: 'tani', email: 'tani@gmail.com' },
    { id: 4, name: 'fani', email: 'fani@gmail.com' }
]

// query parameter and search result
app.get('/users', (req, res) => {
    // query
    const search = req.query.search;

    if (search) {
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(searchResult)
    }
    else {
        res.send(users);
    }
})

// app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting post', req.body)
    // res.send(JSON.stringify(newUser));
    res.json(newUser)
})

// dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
    console.log(req.params.id);
})

app.get('/fruits', (req, res) => {
    res.send(['mangoes', 'banana', 'apple', 'orange'])
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('Yummmy yummy tok fazli');
})

app.listen(port, () => {
    console.log('listening to port ', port)
})