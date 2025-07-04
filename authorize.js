const authorize = (req, res, next) => {
  const { user } = req.query

  if (user === 'john') {
    req.user = { name: 'john', id: 3 }
    console.log('authorize: access granted')
    next()
  } else {
    console.log('authorize: access denied')
    res.status(401).send('Unauthorized')
  }
}

module.exports = authorize
