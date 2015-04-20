/**
 * Created by stephen on 12/04/15.
 */
var time = new Date();
console.log("mozilla earth rotation = ")
console.log(((2*Math.PI)/60)*time.getSeconds() + ((2*Math.PI)/60000)*time.getMilliseconds());
// between 0.00000 and 0.59
console.log("mozilla moon rotation = ");
console.log(((2*Math.PI)/6)*time.getSeconds() + ((2*Math.PI)/6000)*time.getMilliseconds());
// between
console.log("current time in seconds: ");
console.log(time.getMilliseconds());
console.log(Math.PI*1.99999999999999999999999999999999999999999999999999999999);
console.log((Math.PI*1.99)/60/24);

var gridCalc = function(dim, grid){
    // assumes that a square space is to be plotted
    var gridRows = Math.sqrt(grid);
    centre = (dim/gridRows)/2;
    radius = (dim/gridRows)/gridRows;
    console.log("centre = "+centre+", radius = "+radius);

};

gridCalc(650, 9);