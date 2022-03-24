const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname +"/date.js");

const app = express();
// place it below the above so it's used after the app is declared
app.set("view engine", "ejs"); // res.render();
app.use(bodyParser.urlencoded({extended: true}));  // for using form and inputting values and passing it to node/backend
app.use(express.static("public"));

let items = ["buy food", "prepare food", "eat food"];
let workItems = [];

app.get("/", function(req, res){
  // res.send("Hello");
  // res.sendFile("index.html");
  //------
  // if (today.getDay() === 6 || today.getDay() === 0){
  //   day = "Weekend";
  //   // res.write("<h>yay it' weekedn</h>");
  //   // res.sendFile(__dirname + "/weekdend.html");
  //   kindOfDay
  //
  // }
  // else{
  //   day = "Weekday";
  //   // res.write("<p>It's not the weekend</p>");
  //   //   res.write("<h>Boo I've to work</h>");
  //   //   res.send();
  //     //or we can put all of the html in html.index and send the link to the file example below
  //     // res.sendFile(__dirname + "/weekday.html");
  //     // html templates needed as we can't a lot of html page for all the different actions e.g. blogs in a blog page
  //
  // }
  let day = date.getDate();
  res.render("list", {listTitle: day, newListItems: items});
    //
    // let today = new Date();
    //
    // if (today.getDay() === 6 || today.getDay() === 0){
    //   res.send("<h>yay it' weekedn</h>");
    // }
    // else{
    //   res.send("Boo! I've to work");
    // }
});
// posting to the server
app.post("/", function(req, res){
  // getting the user added data in the server
    let item = req.body.newItem;
    // consoling output of the user entered data
    // console.log(item);
  if (req.body.list === "Work"){
    workItems.push(item);
    res.redirect("/work");

  } else{
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work", function(req, res){
  res.render("list", {listTitle:"Work List", newListItems:workItems})
});
app.post("/work", function(req, res){
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
});
app.get("/about", function(req, res){
  res.render("about");
});

app.listen(3000, function(){
  console.log("Server is responding at port 3000.");
});



// let currentDay = today.getDay();
// let day = "";
// switch (currentDay) {
// case 0:
//   day = "Sunday";
//   break;
// case 1:
//   day = "Monday";
//   break;
// case 2:
//    day = "Tuesday";
//   break;
// case 3:
//   day = "Wednesday";
//   break;
// case 4:
//   day = "Thursday";
//   break;
// case 5:
//   day = "Friday";
//   break;
// case 6:
//   day = "Saturday";
// }
