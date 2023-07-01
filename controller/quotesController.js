const quotesModel = require("../models/quotes");

exports.findAll = (req,res)=>{
    res.status(200).json(quotes);
}

exports.findRandom = (req,res)=>{
    res.status(200).json(quotes[Math.floor(Math.random()*quotes.length)]);
}

exports.searchQuotes = (req,res)=>{
    const search = req.query.author;
    const filteredQuotes = quotes.filter((quote)=>{
        return quote.quote.toLowerCase().includes(search.toLowerCase())||quote.author.toLowerCase().includes(search.toLowerCase())
    });
    res.status(200).json(filteredQuotes);
}