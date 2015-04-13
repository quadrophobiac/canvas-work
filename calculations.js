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