const apiUrl = 'https://api.quotable.io/random';
const PORT = process.env.PORT || 3000

import http from 'http'
import fs from 'fs'
import path from 'path'
import fetch from 'node-fetch'

const server = http.createServer(async (req, res) => {
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
   } else if (req.url === '/quote') {
    try {
        console.log('Fetching from:', apiUrl)
        const response = await fetch(apiUrl)
        const data = await response.json()
        console.log('Got data:', data)
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(data))
    } catch (err) {
        console.error('Error in /quote:', err)
        res.writeHead(500, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ error: 'Error fetching quote' }))
    }
   } else {
    res.writeHead( 404, { 'Content-Type': 'text/plain' } )
    res.end('Not found')
   }
})

server.listen(PORT)