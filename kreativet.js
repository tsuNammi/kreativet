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

app.listen(process.env.PORT, process.env.IP, function() {
  console.log("kreativet is online!");
});