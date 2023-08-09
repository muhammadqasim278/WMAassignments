// Assignment # 1

alert("Welcome to Javascript :)")

alert("Error! Please enter a valid password.")

alert("Welcome ot JS Land... \nHappy Coding!")

alert("Welcome ot JS Land...")

alert("Happy Coding!")

alert("Hello... I can run JS through my web browser's console")


// Assignment # 2

var username;
var myName = "Muhammad Qasim";
var message = "Hellow World";
alert(message);
var name ="Muhammad Qasim";
var age = "24 years old";
var certificate= "Certified Mobile Application Development";

alert(name);
alert(age);
alert(certificate);

var email="example@example.com";
alert(email);

var book = "smarter way to learn JavaScript";
alert(book);

document.write("Yah! I can write HTML content through JavaScript>");
document.write("<br><br>")

var design = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”";
alert(design);

// Assignment # 3
var age=24; 
alert("I am "+age+" years old")

var birthYear = 1999;
document.write("My birth year is "+birthYear+"<br>Data type of declared variable is "+typeof(birthYear));
document.write("<br><br>")

var Vname = "Muhammad Qasim";
var Ptitle = "T-Shirt";
var Quantity= 5;

document.write(Vname+" ordered "+Quantity+" "+Ptitle+"(s) on XYZ Clothing store");
document.write("<br><br>")

// Assignment # 4

var a,b,c;
var myName, name, M_name, _name, my2nd;
// var @name, @Name, -name, 2name, #rd;

document.write("<br>Rules for naming JS variables<br>");
document.write("Variable names can only contain, numbers, $ and _. For example : $my_1stVariable<br>");
document.write("Variable must beging with a letter, $ or _. For example : $name, _name or name<br>");
document.write("Variable names are case sensitive<br>");
document.write("Variable names should not be JS keywords");
document.write("<br><br>")

// Assignment # 5

var a=3,b=5,c;
c=a+b;
document.write("Sum of "+a+" and "+b+" is "+c);
c=a-b;
document.write("<br>Subtraction of "+a+" and "+b+" is "+c);
c=a*b;
document.write("<br>Multiplication of "+a+" and "+b+" is "+c);
c=a/b;
document.write("<br>Division of "+a+" and "+b+" is "+c);
c=a|b;
document.write("<br>Modulus of "+a+" and "+b+" is "+c);
document.write("<br><br>")

var x;
document.write("<br>Value after variale declaration is "+x);
x=5;
document.write("<br>Initial Value: "+x);
x++;
document.write("<br>Value after increament is : "+x);
x=x+7;
document.write("<br>Value after addition is : "+x);
x--;
document.write("<br>Value after decrement is : "+x);
x=x%3;
document.write("<br>The remainder is: "+x);
document.write("<br><br>")

var tprice=600;
document.write("Total cost to by 5 tickets to a movie is "+tprice*5+"PKR");
document.write("<br><br>")

var table = 4;
document.write("Table of "+table)
for(var i=1;i<=10;i++)
{
    document.write("<br>"+table+" x "+i+" = "+table*i);
}
document.write("<br><br>")

var c=25,f=70;
f1=(c*9/5)+32;
c1=(f-32)*5/9;
document.write("<br>"+c+"C is "+f1+"F");
document.write("<br>"+f+"F is "+c1+"C");
document.write("<br><br>")

var p1=650,p2=100,q1=3,q2=7,s=100,tcost;
tcost=(p1*q1)+(p2*q2)+s;
document.write("<br>Price of item 1 is "+p1);
document.write("<br>Quantity of item 1 is "+q1);
document.write("<br>Price of item 2 is "+p2);
document.write("<br>Quantity of item 2 is "+q2);
document.write("<br><br>Total cost of your order is "+tcost);
document.write("<br><br>")

var tmarks=980,omarks=804,per=0;
per=(omarks/tmarks)*100;
document.write("<br>Marksheet");
document.write("<br>Total Marks: "+tmarks);
document.write("<br>Marks obtained: "+omarks);
document.write("<br>Percentage: "+per+"%");
document.write("<br><br>")


var d=10, r=25, pkr;
pkr=(d*104.80)+(r*28)
document.write("<br><br>Currency in PKR");
document.write("<br>Toral currency in PKR: "+pkr)
document.write("<br><br>")

var x=2;
y=(((x+5)*10)/2);
document.write("<br><br>")

var cy=2023, by=1999, age;
age=cy-by;
document.write("<br>Age Calculator");
document.write("<br>Current Year: "+cy);
document.write("<br>Birth Year: "+by);
document.write("<br>Your age is: "+age);
document.write("<br><br>")

var r=20,pi=3.142,c,a;
c=2*pi*r;
a=pi*r*r;
document.write("<br>The Geometrizer");
document.write("<br>Radius of a circle: "+r);
document.write("<br>The circumference is: "+c);
document.write("<br>The area is: "+a);
document.write("<br><br>")

var snack="chocolate chip", age=15,maxage=65,spd=3,need;
need=spd*365*(maxage-age);
document.write("<br>The Lifetiem Supply Calculator");
document.write("<br>Favourite Snack: "+snack);
document.write("<br>Current age: "+age);
document.write("<br>Estimated Maximum Age: "+maxage);
document.write("<br>Amount of snacks per day: "+spd);
document.write("<br>You will need "+need+" "+snack+" to last you until the ripe old age of "+maxage);
document.write("<br><br>")