var express   = require("express"),
    app       = express();
    
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res) {
  res.render("index");
});

app.get("/film", function(req, res) {
  res.render("film");
});

app.listen(3002, function() {
  console.log("kreativet is online!");
});