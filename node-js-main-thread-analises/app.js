const express = require('express');
const app = express ();
app.use(express.json());

const PORT = process.env.PORT || 3000;

var sleepSetTimeout_ctrl;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function sleep(ms) {
    clearInterval(sleepSetTimeout_ctrl);
    return new Promise(resolve => sleepSetTimeout_ctrl = setTimeout(resolve, ms));
}

app.listen(PORT, () => { console.log("Server Listening on PORT:", PORT); });

app.get("/verify-prime", (request, response) => {
    let random = getRandomInt(1000000000);
    var prime = true;

    for(let i = 2; i < random; i++) {
        if (random % i === 0) {
            prime = false;
            break;
        }
    }

    response.send(prime);
});

app.get("/sleep-10000", (request, response) => {
    sleep(10000)

    response.send("sleep" );
});