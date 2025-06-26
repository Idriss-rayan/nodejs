const http = require('http');
const fs = require('fs');

http
  .createServer((req, res) => {
    const fileStream = fs.createReadStream('./content/big.txt', 'utf8');
    
    fileStream.on('error', (err) => {
      res.statusCode = 500;
      res.end('Erreur lors de la lecture du fichier');
    });

    fileStream.pipe(res); // Envoie le contenu du fichier directement au client
  })
  .listen(5000, () => {
    console.log('Serveur en écoute sur http://localhost:5000');
  });
