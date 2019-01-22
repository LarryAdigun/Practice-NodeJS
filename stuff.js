var counter = function(arr){
    return "There are " + arr.length + "elements in this array"
};


var adder = function (a,b){
    return `The sum of the two variables is ${a+b}`;
}
// use this in order to export from this file

module.exports =counter;
module.exports = adder;
