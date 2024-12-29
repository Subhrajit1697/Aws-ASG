const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/load', (req, res) => {
    // simulate a load on cpu
    let count = 0;
    for(let i = 0; i < 1000000; i++) {
        count = count + i
    }
    res.send(`Load completed, count is ${count}`);
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
