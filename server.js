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

app.listen(3000, () => {
    console.log("Server is listening!!!")
});