const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: 'your-openai-api-key',
});

const openai = new OpenAIApi(configuration);

app.post('/ask', async (req, res) => {
  const question = req.body.question;

  try {
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: question,
      max_tokens: 100,
    });
    res.json({ answer: response.data.choices[0].text });
  } catch (error) {
    res.json({ answer: 'Error with AI model' });
  }
});
