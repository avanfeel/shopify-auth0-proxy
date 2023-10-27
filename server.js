const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

const auth0LoginEndpoint = '';

app.get('/auth', async (req, res) => {

    const { username, password } = req.query;

    try {
        const response = await axios.post(auth0LoginEndpoint, {
            username,
            password,
        });

        const token = response.data.id_token;

        res.send('Login successful!');

    } catch (error) {
        res.status(400).send('Login failed!');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


app.get('/callback', (req, res) => {
    
    const { token, error } = req.query;

    if (error) {
        return res.status(400).send(`Login error: ${error}`);
    }

    res.send('Callback processed!');

});