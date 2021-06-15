const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.get("/", function (req, res) {
  var day = "";
  var today = new Date();
  console.log(today);
  if (today.getDay() === 0) {
    day = "sunday";
  } else if (today.getDay() === 1) {
    day = "monday";
  } else if (today.getDay() === 2) {
    day = "tuesday";
  } else if (today.getDay() === 3) {
    day = "wesnesday";
  } else if (today.getDay() === 4) {
    day = "thursday";
  } else if (today.getDay() === 5) {
    day = "friday";
  } else {
    day = "saturday";
  }
  res.render("week", { day: day });
  console.log(today.getDay());

});

app.post("/", function(req,res){
  var item = req.body.newItem;
  console.log (item);
})

app.listen(3000, function () {
  console.log("server started on port 3000");
});
