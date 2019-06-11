const express = require("express");
const app = express();
const name = "steve";

app.get("/",function(req, res){
    //logic
    res.json({message:"Hello steve"});
});

app.listen(9000, function(){
    console.log("App listening on port 9000");
});