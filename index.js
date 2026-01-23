const fetch = require('node-fetch')

const apiUrl = 'https://zenquotes.io/api/random'

async function addQuote (url) {
    const response = await fetch(url)
    var data = await response.json()

    console.log(data)
}

addQuote(apiUrl)