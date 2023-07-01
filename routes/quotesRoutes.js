const express = require("express");
const router = express.Router();
const path= require("path");
const quotesController = require("../controller/quotesController")

router.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"../views/home.html"));
})
router.get("/quotes",quotesController.findAll)

router.get("/quotes/random",quotesController.findRandom)

router.get("/quotes/search",quotesController.searchQuotes)

module.exports = router;