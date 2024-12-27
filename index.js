const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/load', (req, res) => {
    // simulate a load on cpu
    for(let i = 0; i < 100000; i++) {}
    res.send('Load completed');
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
