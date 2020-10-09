
var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
		{name: "Salmon Creek", image: "https://files.mywaterton.ca/portal/wat85TPJK213SDXVVCSD/images/content/original/watD52D6A0BA6F3E5E3A.jpg"}
		{name: "Granite Hill", image: "https://www.spn.usace.army.mil/portals/68/docs/Lake%20Sonoma/black1.jpg"}		
		{name: "Mountain goat's Rest", image: "http://www.destateparks.com/images/activities/family-camp.jpg"}
		{name: "Salmon Creek", image: "https://files.mywaterton.ca/portal/wat85TPJK213SDXVVCSD/images/content/original/watD52D6A0BA6F3E5E3A.jpg"}
		{name: "Granite Hill", image: "https://www.spn.usace.army.mil/portals/68/docs/Lake%20Sonoma/black1.jpg"}		
		{name: "Mountain goat's Rest", image: "http://www.destateparks.com/images/activities/family-camp.jpg"}
		{name: "Salmon Creek", image: "https://files.mywaterton.ca/portal/wat85TPJK213SDXVVCSD/images/content/original/watD52D6A0BA6F3E5E3A.jpg"}
		{name: "Granite Hill", image: "https://www.spn.usace.army.mil/portals/68/docs/Lake%20Sonoma/black1.jpg"}		
		{name: "Mountain goat's Rest", image: "http://www.destateparks.com/images/activities/family-camp.jpg"}
];

app.get("/", function(req, res){
	res.render("landing");
});	
// GET and POST methods
app.get("/campgrounds", function(req, res){
	res.render("campgrounds",{campgrounds:campgrounds});
});	

app.post("/campgrounds", function(req, res){
	res.send("YOU HIT THE POST ROUTE!")
	//get data from form and add to campgrounds array
	var name = req.body.name;
	var image = req.body.image;
	var newCampground = {name: name, image: image}
	campgrounds.push(newCampground);
	//redirect back to campgrounds page
	res.redirect("/campgrounds");
});

//To show the form
app.get("/campgrounds/new", function(req, res){
	res.render("new.ejs");
});


app.listen(process.env.PORT, process.env.IP, function(){
	console.log("The Yelpcamp Server Has Started!");
});