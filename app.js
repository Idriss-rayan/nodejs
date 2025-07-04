const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')

app.use(logger)

app.get('/', (req, res) => {
  res.send('Home')
})
app.get('/about', (req, res) => {
  res.send('About')
})

app.get('/api/products', authorize, (req, res) => {
  res.send(`Produits pour ${req.user.name}`)
})

app.get('/api/items', authorize, (req, res) => {
  res.send(`Articles accessibles à ${req.user.name}`)
})
