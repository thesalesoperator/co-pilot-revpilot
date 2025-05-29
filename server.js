// server.js
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Health check
app.get('/health', (_req, res) => res.send('ok'));

// Chat endpoint (placeholder)
app.post('/chat', async (req, res) => {
  const { message } = req.body;
  // TODO: call OpenAI + Firebase auth checks
  res.json({ reply: `You said: ${message}` });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on ${port}`));
