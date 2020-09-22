const express=require("express");
const bodyParser=require("body-parser");
const ejs=require("ejs");

const app=express();

app.use(express.static("public"));
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){

  res.render("home");
});

app.post("/",function(req,res){
  const checkInput=req.body.checkInput;
  const wordCount=checkInput.split(' ').filter(function(n) { return n != '' }).length;
  console.log(wordCount);
  res.render("output",{wordCount:wordCount});
});













app.listen(3000,function(){
  console.log("Server has started on port 3000");
});
