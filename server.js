const apiUrl = 'https://zenquotes.io/api/random';
const PORT = process.env.PORT || 3000

import http from 'http'
import fs from 'fs'
import path from 'path'
import fetch from 'node-fetch'

const server = http.createServer((req, res) => {
   if (req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/html'})
    const filePath = path.join(process.cwd(), './public/index.html')

    const html = fs.readFileSync(filePath, 'utf-8')
    res.end(html)
   } else if (req.url === '/main.css') {
    res.writeHead(200, {'Content-Type': 'text/css'})
    const cssPath = path.join(process.cwd(), './public/main.css')

    const css = fs.readFileSync(cssPath, 'utf-8')
    res.end(css)
   } else if (req.url === '/index.js') {
    res.writeHead(200, {'Content-Type': 'application/javascript'})
    const jsPath = path.join(process.cwd(), './public/index.js')

    const js = fs.readFileSync(jsPath, 'utf-8')
    res.end(js)
   }
})

server.listen(PORT)