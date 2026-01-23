import fetch from 'node-fetch'

const apiUrl = 'https://zenquotes.io/api/random'

import http from 'http'

const PORT = 3000

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
})

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});