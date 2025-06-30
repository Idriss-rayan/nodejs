const express = require('express');
const app = express();

let a = 0; // Déclaration correcte

app.get('/', (req, res) => {
    console.log('user hit the resource');
    res.status(200).send(`Home Page ${a++}`);
});

app.get('/about', (req, res) => {
    res.status(200).send('About page');
});

app.all('/*splat', (req, res) => {
    res.status(404).send('<h1>Resource not found</h1>');
});

app.listen(5000, () => {
    console.log('server is listening on the port 5000...');
});
