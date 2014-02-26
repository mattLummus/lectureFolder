// this is a single line comment
// another comment
/*
 * this is
 * very
 * cool
 */

console.log('hello from javascript');
console.log('Matt Lummus');


//debugger

var a = 10;
var b = 20;
var c = a + b;
var d = c * b;
var e = d * (b-a);

var power = Math.pow(2, 8);
console.log('2 to the 8th power is ' + power);

console.log('e is ' + e);

//example
//you have a room that is 8ft by 12 ft
//write the code that will compute the area of
//the room and print that out to the console

var area = 8*12;
console.log('the area of the room is ' + area + ' sq. ft.');

//example
//you have a cylinder with a radius of 5 inches and a height of 9 inches
//what is the volume in cubic inches

var volume = Math.round((Math.PI*5*5)*9);
console.log('the volume of the cylinder is ' + volume + ' cu. in.');

//you are a floor painter
//you have an exceptionally large bucket of paint
//you can paint 29,572 square feet of surface without having to refill
//every house you encounter has 3 rooms
//here are the dimensions:
//3x5, 7x9, 6x2
//how many full houses can you paint before running out of paint?


var house = ((3*5)+(7*9)+(6*2));
var paint = 29572;
var solution = (paint/house);
console.log('You can paint ' + Math.floor(solution) + ' houses');

//you are a space person with lasers
//you can travel the speed of light
//you are in the andromeda galaxy, somewhere
//you want to destroy Justin Bieber
//if you leave tomorrow, when will you arrive to meet the Bieb.
//i.e. how many dayswill it take you to get to earth?
//Please hurray!

var distance = 2538000;
//light years
var lightYear = 9460730472580800;
//meters
var lightSpeed = 299792458;
//meters per second
var calc = (distance*lightYear)/lightSpeed;
//seconds
var answer = ((calc/60)/60)/24;
//days
console.log("It will take " + answer + " days");

var years = 2538000;
var daysPerYear = 365;
var totalDays = years *365;
console.log(totalDays);

var firstName = prompt('Enter your first name');
console.log('Your first name is ' + firstName);
var lastName = prompt('Enter your last name');
console.log('Your full name is ' + firstName + " " + lastName);

var l = prompt('Enter the length of your room');
l = parseInt(l);
var w = prompt('Enter the width of your room');
w = parseInt(w);
var h = prompt('Enter the height of your room');
h = parseInt(h);

var vol = l*w*h;
console.log('The volume of your room is ' + vol);


var age = prompt('What is your age?');
age = parseInt(age);
if(age < 18)
  console.log('you cannot vote');
else
  console.log('you can vote');

