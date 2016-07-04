//Converter Class 
var Converter = require("csvtojson").Converter;
var converter = new Converter({headers:["fact"]}) ;

var facts = null;

//end_parsed will be emitted once parsing finished 
converter.on("end_parsed", function (jsonArray) {
    facts = jsonArray;

});
 
//read from file 
require("fs").createReadStream("./randomfacts.csv").pipe(converter);

module.exports.getrandomfact = function () {
    var index = Math.floor(Math.random() * jsonArray.length)
    return jsonArray[index].fact;
}