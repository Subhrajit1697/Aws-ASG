const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/load', (req, res) => {
    // simulate a load on cpu
    const start = Date.now();
    while (Date.now() - start < 80000); // Simulate CPU load for 80 seconds
    res.send('CPU load simulation complete');
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
