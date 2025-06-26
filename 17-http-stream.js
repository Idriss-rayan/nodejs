var http = require('http')
var fs = require('fs')

http
.createServer(function(req, res){
    const fileStream = fs.createReadStream('./content/big.txt' , 'utf8')
})
fileStream.on('error', (err)=>{
    res.end(end)
})
.listen(5000)