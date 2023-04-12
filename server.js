const PORT = 8001
const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())

const API_KEY = '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'

app.post('/completions', async (req, res) => {
    const options = {
        method: 'POST',
        headers: {
            'model': 'gpt-3.5-turbo',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
            "model": "gpt-3.5-turbo",
            "messages": [{"role": "user", "content": "Say this is a test!"}],
            "temperature": 0.7,
            'max_tokens': 100,
        })
    }

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', options)
        const data = await response.json();
        res.send(data)
    } catch (error) {
        console.error('error')
    }
})

app.listen(PORT, () => console.log(PORT))