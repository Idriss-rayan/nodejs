const express = require('express');
const path = require('path'); // ← cette ligne est essentielle

const app = express()

app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './navbar-app/index.html'));
});

app.all('/*splat', (req, res) => {
    res.status(404).send('resource not found');
});

app.listen(5000, () => {
    console.log(`server is list on port 5000 ...`);
});
