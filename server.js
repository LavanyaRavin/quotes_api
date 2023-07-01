const quotes = require("./models/quotes")
const express = require ("express");
const quotesRoute = require("./routes/quotesRoutes")
require("dotenv").config();
const path = require("path")
const app =express();
app.use(express.json());
console.log(quotes);

// routes
app.use("/quoteapi",quotesRoute)
// server setup
const port= process.env.PORT;

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})