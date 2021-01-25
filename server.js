const express = require("express");
const app = express();
const {query} = require("express");

// Get route for greeting
let personName = "Jimmy-boy";

app.get('/greeting/:name', (req, res)=>{
    res.send(`Hello, ${personName}!`);
})



app.listen(3000, () => {
    console.log("Server is listening!!!")
});