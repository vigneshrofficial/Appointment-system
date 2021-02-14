var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var mongoose = require("mongoose");

app.set("view engine" , "ejs");
app.use(bodyParser.urlencoded({extended:true}));
var port = 2200;

var Appointment = require("./models/Appointment");

mongoose.connect("<MongoDB-url-String>");

app.get("/",function(req,res){
    res.render("index");
});

app.get("/show",function(req,res){
    Appointment.find({},function(err,appointment){
        if(err){
            console.log(err);
        }else{
            res.render("show",{appointment:appointment});
        }
    });
});

app.post("/newform",function(req,res){
    var obj = {
        name : req.body.name,
        email : req.body.email,
        phonenumber : req.body.phonenumber,
        state : req.body.state
    };
    Appointment.create(obj,function(err){
        if(err){
            console.log(err);
        }else{
            res.redirect("/");
        }
    })
});

app.listen(port,function(){
    console.log("App Started");
});
