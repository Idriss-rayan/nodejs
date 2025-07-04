const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')

// Logger appliqué globalement
app.use(logger)

// Routes publiques
app.get('/', (req, res) => {
  res.send('Home')
})
app.get('/about', (req, res) => {
  res.send('About')
})

// Routes protégées (autorisation requise)
app.get('/api/products', authorize, (req, res) => {
  res.send(`Produits pour ${req.user.name}`)
})

app.get('/api/items', authorize, (req, res) => {
  res.send(`Articles accessibles à ${req.user.name}`)
})
