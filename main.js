const axios = require('axios');

// Your OpenAI API key
const apiKey = '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'; // Replace with your API key

// Function to interact with the ChatGPT API
async function chatPHS(prompt) {
    try {
        const response = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
                model: 'gpt-3.5-turbo', // Use 'gpt-4' if you have access
                messages: [{ role: 'user', content: prompt }],
                max_tokens: 150,
            },
            {
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                    'Content-Type': 'application/json',
                },
            }
        );

        // Extract the response from the API
        const reply = response.data.choices[0].message.content;
        return reply;
    } catch (error) {
        console.error('Error interacting with ChatGPT API:', error);
        return null;
    }
}

// Example usage
async function main() {
    const userPrompt = 'Hello, how are you?';
    const reply = await chatPHS(userPrompt);
    console.log('ChatGPT:', reply);
}

main();
