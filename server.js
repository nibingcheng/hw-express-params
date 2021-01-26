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

// Get route for Fibonacci
app.get('/fibonacci/:number', (req, res)=>{
    let number = req.params.number;
    let x = Math.sqrt(5*number*number+4);
    let y = Math.sqrt(5*number*number-4); 

    if ((x - Math.floor(x)) === 0 || (y - Math.floor(y)) === 0) {
        res.send("Sweet Fibonacci number!");
    }
    else {
        res.send("I can tell this ain't a fibonacci number. Wack.");
    }
})

// Get route for Fibonacci continued
app.get('/fibonacciIndex/:index', (req, res)=>{
    let index = req.params.index;
    let fibonacciNum = 0;
    if (index <= 1) {
        res.send("1");
    }
    else {
        let a = 1, b = 0, temp = 0;
        while (index >= 0) {
            temp = a;
            a = a + b;
            b = temp;
            index = index - 1;
        }
        res.send(` ${b}`);
    }
})

app.listen(3000, () => {
    console.log("Server is listening!!!")
});