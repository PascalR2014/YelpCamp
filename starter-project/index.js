/*source - https://nodejs.org/en/docs/guides/getting-started-guide/ */

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

/* 	
	Maintenant utilise ton terminal/console et tape la commande node index.js
 	Une fois que tu as passer la commande ...  Tu devrais voir un message du style: 
	Server running at ...
	Tu copie/colle le:  http://127.0.0.1:3000/ qui t'es proposer sur ton navigateur - barre URL. - 
	et alors tu devrais apercevoir le messsage suivant: "Hello World". 
*/
