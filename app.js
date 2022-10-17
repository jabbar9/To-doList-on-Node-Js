const express = require("express");  //Using express as framework of node
const bodyParser = require("body-parser"); //Used for retreiving input values
const date = require(__dirname + "/date.js");

const app = express();
// Created an array with three values predefined
const items = ["Buy Foods", "Cook Food", "Eat Foods"];
const workItems = [];

app.set('view engine', 'ejs'); // It sets the ejs view engine and looks into views folders "ejs" Files

//Used to recieving input values
app.use(bodyParser.urlencoded({extended: true}));
//Uses express.static method for serving "Static Files" for ex: css,js,img,etc.
app.use(express.static("public"));

app.get("/", function(req, res) {
    
    //"date" is manually created and imported. And getDate is a function of that file.
    const day = date.getDate();
    //render method is used to render files (1)Pass the file (2)Pass the key value pair and the "Key" here is listTitle & newListItems
    res.render("list", {
        listTitle: day,
        newListItems: items
    });

});


app.post("/", function(req,res) {
    //the input value posted can be recieved using "req.body.newItem" and gets stored in item variable and pushes that value into items array
    const item = req.body.newItem;

    if(req.body.list === "Work-List"){
        //if condition is true the push that value into workItems array and redirect it into same page
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
    //After push operation redirect to "Home Route"
    res.redirect("/");
    }
    
});


app.get("/work", function(req,res) {
    res.render("list", { listTitle: "Work-List", newListItems: workItems});
});


app.post("/work", function(req,res) {
    let item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
});

app.get("/about", function(req,res) {
    res.render("about");
})

app.listen(3000, function() {
    console.log("Server started on port 3000");
});