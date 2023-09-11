// Chapter 35 - 38
// 1
function currentDate(){
    document.write(new Date());
}
currentDate();
document.write("<br><br>");

// 2
function name(x,y){
    document.write("Welcome "+x+" "+y);
}
var a = prompt("Enter first name:");
var b = prompt("Enter last name:");
name(a,b);
document.write("<br><br>");

// 3
function add(x,y){
    return x+y;
}
var a = +prompt("Enter 1st number:");
var b = +prompt("Enter 2nd number:");
document.write("Sum of "+a+" and "+b+" is "+add(a,b));
document.write("<br><br>");

// 4
function calculator(x,y,o){
    if(o==="+"){
        document.write(x+" "+o+" "+y+" = "+(a+b));
    }
    else if(o==="-"){
        document.write(x+" "+o+" "+y+" = "+(a-b));
    }
    else if(o==="*"){
        document.write(x+" "+o+" "+y+" = "+(a*b));
    }
    else if(o==="/"){
        document.write(x+" "+o+" "+y+" = "+(a/b));
    }
    else if(o==="%"){
        document.write(x+" "+o+" "+y+" = "+(a%b));
    }
}
var a = +prompt("Enter the 1st number:");
var b = +prompt("Enter the 2nd number:");
var operator = prompt("Enter the operator:");
calculator(a,b,operator);
document.write("<br><br>");

// 5
function square(x){
    document.write("Square of "+x+" is "+(x*x));
}
var a = +prompt("Enter a number:");
square(a);
document.write("<br><br>");

// 6
var a = prompt("Enter a number:");
factorial(a);
function factorial(x){
    var y=x;
    for(var i=x-1; i>=1;i--){
        x=x*i;
    }
    document.write("Factorial of "+y+" is "+x);
}
document.write("<br><br>");

// 7
function counting(x,y){
    for(var i=x;i<=y;i++){
        document.write(i+" ");
    }
}
var a = +prompt("Enter start number:");
var b = +prompt("Enter end number:");
counting(a,b);
document.write("<br><br>");

// 8
function calculateHypotenuse(x,y){
    function calculateSquare(a){
        return a*a;
    }
    x=calculateSquare(x);
    y=calculateSquare(y);
    var hyp = Math.sqrt(x+y);
    document.write("Hypotenuse: "+hyp.toFixed(2));
}
var base = +prompt("Enter the value of base:");
var perp = +prompt("Enter the value of perpendicular:");
calculateHypotenuse(base,perp);
document.write("<br><br>");

// 9
function area(x,y){
    document.write("Area of Rectangle: "+(x*y)+" Sq. unit");
}
area(2,4);
area(a,b);
document.write("<br><br>");

// 10
function palindrom(x){
    var reverse="";
    for(var i=x.length-1;i>=0;i--){
        reverse = reverse + x[i];
    }
    if(x===reverse){
        document.write(x+" is a Palindrom!");
    }
    else{
        document.write(x+" not a Palindrom!");
    }
}
var a = prompt("Enter a word:");
palindrom(a);
document.write("<br><br>");

11
function capitalize(x){
    document.write(x+"<br>")
    x=x.split(" ");
    for(var i=0;i<x.length;i++){
        x[i]=x[i].charAt(0).toUpperCase()+x[i].slice(1,x[i].length);
    }
    x=x.join(" ");
    document.write(x);
}
var a = prompt("Enter a string:");
capitalize(a);
document.write("<br><br>");


// 12
function longLength(x){
    document.write(x+"<br>");
    x=x.split(" ");
    var max= x[0];
    for(var i=0;i<x.length;i++){
        if(x[i].length>max.length){
            max=x[i];
        }
    }
    document.write("Longest Word: "+max);
}
var a = prompt("Enter the string:");
longLength(a);
document.write("<br><br>");


// 13
function occurance(x,y){
    var z=0;
    for(var i=0;i<x.length;i++){
        if(x[i]===y){
            z++;
        }
    }
    document.write(x+"<br>");
    document.write("No. of occurance of "+y+": "+z);
}
var a = prompt("Enter the String:");
var b = prompt("Enter the letter you want to search?");
occurance(a,b);
document.write("<br><br>");

// 14
function calcCircumference(x){
    var circum = 2*pi*x;
    document.write("Circumference of circle: "+circum.toFixed(2));
}
function calcArea(y){
    var area = pi*y*y;
    document.write("<br>Area of circle: "+area.toFixed(2));
}
const pi = 22/7;
var r = +prompt("Enter the radius of circle:");
calcCircumference(r);
calcArea(r);