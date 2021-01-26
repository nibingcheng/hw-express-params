const express = require("express");
const app = express();
const {query} = require("express");

// Get route for greeting
app.get('/greeting/:name', (req, res)=>{
    res.send(`What's up, ${req.params.name}!`);
})

// Get route for tip calc
app.get('/tip/:total/:tipPercentage', (req, res)=>{
    let total = req.params.total;
    let tipPercentage = req.params.tipPercentage;
    res.send(` ${total*tipPercentage/100} `);
})

// Get route for Magic 8 Ball
app.get('/magic/Will%20I%20Be%20A%20Millionaire', (req, res)=>{
    let ans = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"];
    let index = Math.floor(Math.random()*ans.length);
    res.send(`Will I be a Millionaire? ` + `${ans[index]}.`);
});

app.listen(3000, () => {
    console.log("Server is listening!!!")
});