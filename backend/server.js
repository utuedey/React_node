const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.get('/api/data', (req, res) => {
    // dummy data
    const data = {message: 'Hello from the server!'};
    res.json(data)
});

app.listen(PORT, () => {
    console.log(`App is connected on localhost:${PORT}`)
});

