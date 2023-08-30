// chapter 17-20

// 1
var arr=[[1,2,3],["a","b","c"]];

// 2
var arr=[
    [0,1,2,3],
    [1,0,1,2],
    [2,1,0,1]
];

// 3
for(var i=1;i<=10;i++){
    document.write(i+"<br>");
}
document.write("<br><br>");

// 4
var x=+prompt("Enter a number to show its multiplication table");
var l=+prompt("Enter length multiplication table");
document.write("Multiplication table of "+x);
document.write("<br>Length "+l);
for(var i=1;i<=l;i++){
    document.write("<br>"+x+" x "+i+" = "+x*i);
}
document.write("<br><br>");

// 5
var fruits =["apple","banana","mango","orange","stawberry"];
for(var i=0;i<fruits.length;i++){
    document.write(fruits[i]+"<br>");
}
for(var i=0;i<fruits.length;i++){
    document.write("Element at index "+i+" is "+fruits[i]+"<br>");
}
document.write("<br><br>");


// 6
document.write("Counting:<br>");
for(var i=1;i<=15;i++){
    document.write(i+", ");
}
document.write("<br>Reverse Counting:<br>");
for(var i=10;i>=1;i--){
    document.write(i+", ");
}
document.write("<br>Even:<br>");
for(var i=0;i<=20;i+=2){
    document.write(i+", ");
}
document.write("<br>Odd:<br>");
for(var i=1;i<=19;i+=2){
    document.write(i+", ");
}
document.write("<br>Series:<br>");
for(var i=2;i<=20;i+=2){
    document.write(i+"K, ");
}
document.write("<br><br>");

// 7
var A=["cake","apple pie","cookie","chips","patties"];
var x=prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
for(var i=0;i<A.length;i++){
    if(A[i]===x){
        var a = "found";
        var b =i;
    }
}
if(a==="found"){
    document.write(x+" is available at index "+b+" in our bakery");
}
else{
    document.write("We are sorry. "+x+" is not available in our bakery");
}
document.write("<br><br>");

// 8
var A=[24,53,78,91,12];
document.write("Array items: ");
document.write(A);
var max=A[0];
for(var i=0;i<A.length;i++){
    if(A[i]>max){
        max=A[i];
    }
}
document.write("<br>The largest number is "+max);
document.write("<br><br>");

// 9
var A=[24,53,78,91,12];
document.write("Array items: ");
document.write(A);
var min=A[0];
for(var i=0;i<A.length;i++){
    if(A[i]<min){
        min=A[i];
    }
}
document.write("<br>The smallest number is "+min);
document.write("<br><br>");

// 10
var x=5;
for(var i=1;i<=20;i++){
    document.write(x*i+", ");
}
document.write("<br><br>");




// Chapter 21-25
// 1
var firstName=prompt("Enter your First Name:");
var lastName= prompt("Enter your Last Name: ");
var fullName = firstName +" "+ lastName;
document.write("Welcome "+fullName);
document.write("<br><br>");

// 2
var mobile = prompt("Enter your Favorite Mobile Phone Model:");
var length = mobile.length;
document.write("My favorite phone is: "+mobile);
document.write("<br>Length of string: "+length);
document.write("<br><br>");

3
var word = "Pakistani";
var index = word.indexOf("n");
document.write("String: "+word);
document.write("<br>Index of 'n': "+index);
document.write("<br><br>");

// 4
var word = "Hello World";
var index = word.lastIndexOf("l");
document.write("String: "+word);
document.write("<br>Index of 'l': "+index);
document.write("<br><br>");

// 5
var word = "Pakistani";
var char = word.charAt(3);
document.write("String: "+word);
document.write("<br>Character at index 3: "+char);
document.write("<br><br>");

// 6
var firstName=prompt("Enter your First Name:");
var lastName= prompt("Enter your Last Name: ");
var fullName = firstName.concat(" ",lastName);
document.write("Welcome "+fullName);
document.write("<br><br>");

// 7
var city = "Hyderabad";
var part = city.split("Hyder");
var replaced = part.join("Islam");
document.write("City: "+city);
document.write("<br>After replacement: "+replaced);
document.write("<br><br>");

// 8
var message = "Ali and Sami are best friends. They play cricket and football together.";
var part  = message.split("and");
var replaced = part.join("&");
document.write(message);
document.write("<br>"+replaced); 
document.write("<br><br>");

// 9
var string = "472";
var number = parseInt(string);
document.write("Value: "+string);
document.write("<br>Type: "+typeof(string));
document.write("<br>Value: "+number);
document.write("<br>Type: "+typeof(number));
document.write("<br><br>");

// 10
var word = prompt("Enter a word:");
var capital = word.toUpperCase();
document.write("User input: "+word);
document.write("<br>Upper case: "+capital);
document.write("<br><br>");

// 11
var word = prompt("Enter a word:");
var firstletter = word.charAt(0).toUpperCase();
var remaingletter = word.slice(1,word.length).toLowerCase();
var capital = firstletter+remaingletter;
document.write("User input: "+word);
document.write("<br>Upper case: "+capital);
document.write("<br><br>");

// 12
var num = 35.36;
var string = num.toString().replace(".","");
document.write("Number: "+num);
document.write("<br>Result: "+string);
document.write("<br><br>");

// 13
var x = prompt("Enter your Name:");
for(var i=0;i<=x.length;i++){
    if(x[i]=="!" || x[i]=="@" || x[i]=="." || x[i]==","){
        document.write("Please enter a valid username");
    }
}
document.write("<br><br>");

// 14
var A=["cake","apple pie","cookie","chips","patties"];
var x=prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
x = x.toLocaleLowerCase();
for(var i=0;i<A.length;i++){
    if(A[i]===x){
        var a = "found";
        var b =i;
    }
}
if(a==="found"){
    document.write(x+" is available at index "+b+" in our bakery");
}
else{
    document.write("We are sorry. "+x+" is not available in our bakery");
}
document.write("<br><br>");

// 15
var password = prompt("Enter a password:");
var valid,reason1="",reason2="",reason3="";
for(var i=1;i<=password.length;i++){
    if(password[i]>="a" && password[i]<="z"){
        valid = "true";
    } 
    else if(password[i]>="A" && password[i]<="Z"){
        valid = "true";
    }
    else if( password[i]>=0 && password[i]<=9){
        valid = "true";
    }
    else{
        valid="false";
    }
}
if(valid==="false"){
    var reason1 ="Password contain Special Character.<br>"
}
if(password[0]>=0 && password[0]<=9){
    valid = "false";
    var reason2 = "Password can not begin with a number.<br>";
}
if(password.length<6){
    valid="false";
    var reason3 = "Password at least 6 characters long.<br>";
}
document.write("Entered Password: "+password+"<br>");
if(valid==="true"){
    document.write("Valid Password.");
}
else{
    document.write(reason1+reason2+reason3+"Please enter a valid password!");
}
document.write("<br><br>");

// 16
var university = "University of Karachi";
var array = university.split(" ");
for(var i =0;i<array.length;i++){
    for(var j=0;j<array[i].length;j++){
        document.write(array[i][j]+"<br>");
    }
    document.write("<br>");
}
document.write("<br><br>");

// 17
var word = prompt("Enter the word");
var l = word[word.length-1];
document.write("User Input: "+word);
document.write("<br>Last character of input: "+l);
document.write("<br><br>");

// 18
var string = "The quick brown fox jumps over the lazy dog";
var array = string.split(" ");
var x=0;
for(var i=0;i<=array.length;i++){
    if(array[i]==="the" || array[i]==="The"){
        x++;
    }
}
document.write("Text: "+string);
document.write("<br>There are "+x+" occurence(s) of word 'the'");

