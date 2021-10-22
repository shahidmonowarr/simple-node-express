const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

app.use(cors());
app.use(express.json());

// const handler = (req, res) => {
//     res.send('Hello from node');}

app.get('/', (req, res) => {
    res.send('Hello from my first node');
});

const users = [
    { id: 0, name: 'shabana', email: 'shahhhhna@gmail.com', phone: '12344' },
    { id: 1, name: 'shokhina', email: 'shabana@gmail.com', phone: '12344eee' },
    { id: 2, name: 'shabnoor', email: 'shabada@gmail.com', phone: '12344ee' },
    { id: 3, name: 'shamoli', email: 'shddddana@gmail.com', phone: '12344ww' },
    { id: 4, name: 'shonjita', email: 'shdssssna@gmail.com', phone: '12344ts' },
    { id: 5, name: 'shapla', email: 'shagggga@gmail.com', phone: '12344ss' }
]

// use query method 
app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users);
    }
});

// app.method 
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body);
    // res.send(JSON.stringify(newUser));
    res.json(newUser);
})

// dynamic api 
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
    console.log(req.params.id);
});
app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('Yummy yummy to marka fazli');
});

app.listen(port, () => {
    console.log('listening to port', port)
});