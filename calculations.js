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
console.log("max radian threshold of arc")
console.log(Math.PI*1.99);
console.log("above value divided by 60 [secs] then divided by 24 [frame per second]")
console.log((Math.PI*1.99)/60/24);

var gridCalc = function(dim, grid){
    // assumes that a square space is to be plotted
    var gridRows = Math.sqrt(grid);
    centre = (dim/gridRows)/2;
    radius = (dim/gridRows)/gridRows;
    console.log("centre = "+centre+", radius = "+radius);

};

gridCalc(650, 9);

var planetData = new Array(58.81337, 243.68663, 1, 1.028552, 0.41435, 0.44499, 0.72006, 0.67339, 6.40529);

console.log("pre sort");
console.log(planetData);
function sortFloat(a,b) { return a - b; }
planetData.sort(sortFloat);
console.log("post sort");
console.log(planetData);
console.log("lowest = "+planetData[0]+", and highest = "+planetData[planetData.length-1]);
var span = planetData[planetData.length-1] - planetData[0];
console.log("span = "+span);
console.log("span divided by 0.00 and 1.99 = "+span);

for (i=0; i < (span/1.99); i++){
    //console.log(i);
}

/*
* arr[0] = 0.104666667 || Math.Pi * 1.99 / 60
* span = arr[arr.length-1] - arr[0]
* span segmented between 0.00 and 1.99
* HOW TO GET THE RIGHT STEP
* span / 1.99
* */