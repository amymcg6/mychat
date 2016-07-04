//Converter Class 
var Converter = require("csvtojson").Converter;
var converter = new Converter({headers:["fact"]}) ;
 
//end_parsed will be emitted once parsing finished 
converter.on("end_parsed", function (jsonArray) {
    var index = Math.floor(Math.random() * jsonArray.length)
   console.log(jsonArray[index]); //here is your result jsonarray 
});
 
//read from file 
require("fs").createReadStream("./randomfacts.csv").pipe(converter);