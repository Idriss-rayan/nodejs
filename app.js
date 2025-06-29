const http = require('http')

const server = http.createServer((req, res)=>{
    res.writeHead(400,{'content-type':'text/html'})
    res.write('<h1>home page</h1>')
    console.log('je suis rayan')
    res.end()
})

server.listen(5000)
