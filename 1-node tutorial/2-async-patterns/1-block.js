const http = require('http');


const server = http.createServer((req , res) => {
if (req.url === '/'){
    res.end('Home Page')
}
if(req.url === '/about') {
    // BLOCKING CODE !!!
    for (let i=0; i<100; i++){
        for (let j=0; j<100; j++){
            console.log(`${i} ${j}`)
        }
    }
    res.end('About Page')
}

})

server.listen(5000, ()=>{
    console.log('Server listening on part 5000 ...')
})