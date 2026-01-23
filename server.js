const PORT = process.env.PORT || 3000

import http from 'http'
import fs from 'fs'
import path from 'path'

const server = http.createServer((req, res) => {
   if (req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/html'})
    const filePath = path.join(process.cwd(), './public/index.html')

    const html = fs.readFileSync(filePath, 'utf-8')
    res.end(html)
   }
})

server.listen(PORT)