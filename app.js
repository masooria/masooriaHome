const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
        res.send('hello Masoorians, Node here');
    });

app.listen(port, () => console.log(`arya is listening on ${port}`))

