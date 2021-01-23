const express = require('express')
const app = express()
const port = 3001;
const hubbleQuestions = require('./hubbleQuestions');

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

app.get('/', (req, res) => {
    let options = {
        0: '1',
        1: '2'
    }

    let randomNumber = getRandomInt(2);

    res.send(options[randomNumber])
})

app.get('/hubble', (req, res) => {
    res.send(hubbleQuestions[getRandomInt(25)])
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})