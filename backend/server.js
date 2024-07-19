const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.post('/summarize', async (req, res) => {
    const { text } = req.body;
    const apiKey = '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';

    const options = {
        method: 'POST',
        url: 'https://api-inference.huggingface.co/models/facebook/bart-large-cnn',
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
        },
        data: {
            inputs: text,
            parameters: {}
        }
    };

    try {
        console.log('Sending request to Hugging Face API:', options);
        const response = await axios.request(options);
        console.log('API response:', response.data);
        res.json({ summary: response.data[0].summary_text });
    } catch (error) {
        console.error('Error during summarization:', error.response ? error.response.data : error.message);
        res.status(500).send('Error summarizing text');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
