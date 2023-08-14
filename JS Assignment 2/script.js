// Chapter 6-9
// 1
var a=10;
document.write("Results:<br>");
document.write("The value of a is: "+a);
document.write("<br /><br />");
document.write("...........................................");
document.write("<br /><br />");
document.write("The value of ++a is: "+ ++a);
document.write("<br>Now the value of a is: "+a);
document.write("<br><br>");
document.write("The value of a++ is: "+ a++);
document.write("<br>Now the value of a is: "+a);
document.write("<br><br>");
document.write("The value of --a is: "+ --a);
document.write("<br>Now the value of a is: "+a);
document.write("<br><br>");
document.write("The value of a-- is: "+ a--);
document.write("<br>Now the value of a is: "+a);
document.write("<br><br>");

//2
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
// Explain the output at each stage:
--a;
document.write("a is "+a);
document.write("<br>b is "+b);
document.write("<br>result is "+result);
document.write("<br><br>");
--a - --b;
document.write("a is "+a);
document.write("<br>b is "+b);
document.write("<br>result is "+result);
document.write("<br><br>");
--a - --b + ++b;
document.write("a is "+a);
document.write("<br>b is "+b);
document.write("<br>result is "+result);
document.write("<br><br>");
--a - --b + ++b + b--; 
document.write("a is "+a);
document.write("<br>b is "+b);
document.write("<br>result is "+result);
document.write("<br><br>");

// 3
var nam = prompt("Enter your name");
document.write("Welcome "+nam);
document.write("<br><br>");

// 5
var x=0;
x = +prompt("Enter a number");
num=1;
if(typeof(x)===typeof(num) && x>0){
    for(var i=1;i<=10;i++){
        document.write("<br>"+x+" x "+i+" = "+x*i);
    }
}
else if(x===0){
    for(var i=1;i<=10;i++){
        x=5;
        document.write("<br>"+x+" x "+i+" = "+x*i);
    }
}
document.write("<br><br>");

// 6

var s1=prompt("Enter the name of 1st subject: ");
var s2=prompt("Enter the name of 2nd subject: ");
var s3=prompt("Enter the name of 3rd subject: ");
var t1=+prompt("Enter the marks of 1st subject: ");
var t2=+prompt("Enter the marks of 2nd subject: ");
var t3=+prompt("Enter the marks of 3rd subject: ");
var tmarks=100;
var p1=(t1/tmarks)*100;
var p2=(t2/tmarks)*100;
var p3=(t3/tmarks)*100;
var t=t1+t2+t3;
var p=(p1+p2+p3)/3;
document.write("Subject Total Marks Obtained Marks Percentage");
document.write("<br>"+s1+" "+tmarks+" "+t1+" "+p1+"%");
document.write("<br>"+s2+" "+tmarks+" "+t2+" "+p2+"%");
document.write("<br>"+s3+" "+tmarks+" "+t3+" "+p3+"%");
document.write("<br>"+tmarks*3+" "+t+" "+p+"%");
document.write("<br><br>");


// Chapter 9-11

//  1
var city=prompt("Enter the City Name:");
if(city==="Karachi" || city==="karachi"){
    document.write("Welcome to city of lights!");
}
document.write("<br><br>");

// 2

var gender = prompt("Enter your Gender:");
if(gender==="male" || gender === "Male"){
    document.write("Good Morning Sir");
}
else if(gender==="female" || gender=== "Female"){
    document.write("Good Morning Ma'am");
}
document.write("<br><br>");

// 3

var sc=prompt("Enter the Signal Color:");
if(sc==="red"||sc==="Red"){
    document.write("Must Stop");
}
else if(sc==="yellow"||sc==="Yellow"){
    document.write("Ready to move");
}
else if(sc==="green"||sc==="Green"){
    document.write("Move now")
}
document.write("<br><br>");

// 4 
var rf=+prompt("Enter the remaining fuel of your car in liters:");
if(rf<0.25){
    document.write("Please refill the fuel in your car");
}
document.write("<br><br>");

// 5
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

if (true){
alert("True");
}
if (false){
alert("False");
}

if("car" < "cat"){
    alert("car is smaller than cat");
    }
document.write("<br><br>");

// 6
var m1=+prompt("Enter the marks of 1st subject:");
var m2=+prompt("Enter the marks of 2nd subject:");
var m3=+prompt("Enter the marks of 3rd subject:");
var total=+prompt("Enter the total marks:");
t=m1+m2+m3;
document.write("Mark Sheet");
document.write("<br><br>Total Marks : "+total);
document.write("<br>Marks Obtained : "+t);
var p=((t)/total)*100;
var grade,remarks;
document.write("<br>Percentage : "+p+"%");
if(p>=80){
    grade="A-one";
    remarks="Excellent";
}
else if(p>=70){
    grade="A";
    remarks="Good";
}
else if(p>=60){
    grade="B";
    remarks="You need to improve";
}
else if(p<60){
    grade="Fail";
    remarks="Sorry"
}
document.write("<br>Grade : "+grade);
document.write("<br>Remarks : "+remarks);
document.write("<br><br>");

// 7
var sn=7;
var gn=+prompt("Guess the Secret number");
if(gn===sn){
    document.write("Bingo! Correct answer");
}
else if(gn+1===sn){
    document.write("Close enough to the correct answer");
}
document.write("<br><br>");

// 8
var x = +prompt("Enter the number:");
if(x%3===0){
    document.write("Given number is divisible by 3");
}
else{
    document.write("Given number is not divisible by 3");
}
document.write("<br><br>");


// 9
var a = +prompt("Enter the nubmer");
if(a%2===0){
    document.write("Given number is a even number");
}
else{
    document.write("Given number is a odd number");
}
document.write("<br><br>");

// 10
var tmp=+prompt("enter the Temperature:");
if(tmp>40){
    document.write("It is too hot outside.");
}
else if(tmp>30){
    document.write("The Weather today is Normal.");
}
else if(tmp>20){
    document.write("Today’s Weather is cool.");
}
else if(tmp>10){
    document.write("“OMG! Today’s weather is so Cool.”");
}
document.write("<br><br>");

// 11
var a =+prompt("Enter 1st number:");
var b =+prompt("Enter 2nd number");
var c =prompt("Enter the operator");
if(c=="+"){
    var x=a+b;
    document.write(a+" "+c+" "+b+" = "+x);
}
else if(c=="-"){
    var x=a-b;
    document.write(a+" "+c+" "+b+" = "+x);
}
else if(c=="*"){
    var x=a*b;
    document.write(a+" "+c+" "+b+" = "+x);
}
else if(c=="/"){
    var x=a/b;
    document.write(a+" "+c+" "+b+" = "+x);
}
else if(c=="%"){
    var x=a*b;
    document.write(a+" "+c+" "+b+" = "+x);
}
document.write("<br><br>");


// 12-13
// 1
var x = prompt("Enter the character: ");
if(x>="A" && x<="Z"){
    document.write("Given character is upper-case");
}
else if(x>="a" && x<="z"){
    document.write("Given character is lower-case");
}
else if(x<=0 || x>0){
    document.write("Givern character is number");
}

// 2
var a =+prompt("Enter the 1st number:");
var b =+prompt("Enter the 2nd nubmer");
if(a>b){
    document.write(a+" is grater than "+b);
}
else if(a<b){
    document.write(b+" is grater than "+a);
}
else{
    document.write("Both are equal.");
}
document.write("<br><br>");

// 3
var x = +prompt("Enter the number:");
if(x<0){
    document.write("Given number is negative");
}
else if(x===0){
    document.write("Given number is zero");
}
else if(x>0){
    document.write("Given number is positive");
}
document.write("<br><br>");

// 4
var char = prompt("Enter a Character:");
if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
    document.write("True");
}
else{
    document.write("False");
}
document.write("<br><br>");

// 5
var pwd="admin";
var given= prompt("Enter the password");
if(given===""){
    given=prompt("Please enter your password");
}
else if(given===pwd){
    document.write("Correct! The password you entered matches the original password");
}
else if(given!=pwd){
    document.write("Incorrect Password");
}
document.write("<br><br>");

// 6
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}
else{
greeting = "Good evening";
}
document.write("<br><br>");

// 7
var time = +prompt("Enter the time in 24 hour clock format");
if(time>=0 && time<1200){
    document.write("Good Morning!");
}
else if(time>=1200 && time<1700){
    document.write("Good afternoon!");
}
else if(time>=1700 && time<2100){
    document.write("Good evening!");
}
else if(time>=2100 && time<=2359){
    document.write("Good night!");
}