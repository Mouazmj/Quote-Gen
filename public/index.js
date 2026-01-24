const apiUrl = '/quote'
const quote = document.getElementById('quote')
const author = document.getElementById('author')
const newQuote = document.getElementById('new-quote')

async function getQuote(url) {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)

    quote.textContent = data.quote
    author.textContent = data.author

}

newQuote.addEventListener('click', () => {
    getQuote(apiUrl)
})