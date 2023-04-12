const PORT = 8000
const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const API_KEY = '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'

app.post('/completions', (req, res) => {
    const options = {
        method: 'POST',
        headers: {
            "Authorization": `Bearer ${API_KEY}`,
            "Content-Type": 'applications/json'
        },
        body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [{role: 'user', content: 'how are your'}],
            max_tokens: 100,
        })
    }

    try {
        const response = async () => await fetch('https://api.openai.com/v1/chat/completions', options)
        const data = async () => await response.json()
        res.send(data)
    } catch (error) {
        console.error(error)
    }
})

app.listen(PORT, () => console.log('running ' + PORT))