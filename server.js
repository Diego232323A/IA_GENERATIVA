const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

const HUGGING_FACE_API_KEY = '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'; //cambia tu api_key
app.use(express.json());

app.post('/generate', async (req, res) => {
    const { prompt } = req.body;

    if (!prompt) {
        return res.status(400).send({ error: 'Prompt is required' });
    }

    try {
        const response = await fetch(
            'https://api-inference.huggingface.co/models/openai-community/gpt2',
            {
                headers: {
                    Authorization: `Bearer ${HUGGING_FACE_API_KEY}`,
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify({ inputs: prompt }),
            }
        );

        const result = await response.json();
        console.log(result); 

        if (result && result.length > 0 && result[0].generated_text) {
            const generatedText = result[0].generated_text;
            res.send({ text: generatedText });
        } else {
            res.status(500).send({ error: 'No text generated' });
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ error: 'Something went wrong', details: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});