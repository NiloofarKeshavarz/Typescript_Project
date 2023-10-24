// function log(message){
//     console.log(message);
// };
// var message = 'Hello World';
// log(message);
//====================================
// function doSth(){
//     for (var i =0 ; i <5 ; i++){
//         console.log(i);
//     }
//     console.log("Finally " + i);
// };
// doSth();
var a;
a = 1;
var b;
var c;
var d;
var e;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Purple"] = 3] = "Purple";
})(Color || (Color = {}));
; //best practice to add numbers for furthur modification
var backgroundColor = Color.Green;
console.log(a);
