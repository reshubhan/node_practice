var express = require("express");
var app = express();

app.get("/", function(req,res){
	res.send("Welcome to express");
	// res.redirect('http://qbinproduct.intuit.com');  
	res.end
});


var server = app.listen(8000, function () {  

  console.log('Example app listening at 8000');  
}
);  