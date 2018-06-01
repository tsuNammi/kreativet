var express   = require("express"),
    app       = express();
    
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res) {
  res.render("index");
});

app.get("/grafisk", function(req, res) {
  res.render("grafikk");
});

app.get("/film", function(req, res) {
  res.render("film");
});

app.get("/web", function(req, res) {
  res.render("web");
});

app.get("/kommunikasjon", function(req, res) {
  res.render("kommunikasjon");
});


app.listen(3002, function() {
  console.log("kreativet is online at " + this.address().port);
});

// app.listen(process.env.PORT, process.env.IP, function() {
//   console.log("kreativet beta is online");
// });