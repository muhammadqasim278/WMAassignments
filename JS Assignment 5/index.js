// Chapter 26 -30
// 1
var num = +prompt("Enter a positiove integer:");
document.write("number: " + num);
document.write("<br>round off value: " + Math.round(num));
document.write("<br>floor value: " + Math.floor(num));
document.write("<br>ceil value: " + Math.ceil(num));
document.write("<br><br>");

// 2
var num = +prompt("Enter a negative integer:");
document.write("number: " + num);
document.write("<br>round off value: " + Math.round(num));
document.write("<br>floor value: " + Math.floor(num));
document.write("<br>ceil value: " + Math.ceil(num));
document.write("<br><br>");

// 3
var num = +prompt("Enter the number: ");
document.write("The absolute value of " + num + " is " + Math.abs(num));
document.write("<br><br>");

// 4
var num = Math.floor(Math.random() * 6 + 1);
document.write("random dice value: " + num);
document.write("<br><br>");

// 5
var num = Math.floor(Math.random() * 2 + 1);
if (num === 1) {
  document.write(num + "<br>random coin value: Tails<br>");
}
else {
  document.write(num + "<br>random coin value: Heads<brr>");
}
document.write("<br><br>");

// 6
var num = Math.floor(Math.random() * 100 + 1);
document.write("random number between 1 and 100: " + num);
document.write("<br><br>");

// 7
var userInput = prompt("Please enter your weight (e.g., 50, 50kgs, 50.2kgs, 50.2kilograms):");
// Remove non-numeric characters and convert to a floating-point number
var weight = parseFloat(userInput.replace(/[^\d.]/g, ''));
// Display the weight in the browser
if (!isNaN(weight)) {
  document.write("Your weight is: " + weight + " kilograms");
} else {
  document.write("Invalid input. Please enter your weight in the correct format.");
}
document.write("<br><br>");


// 8
var secnum = 6;
var number = +prompt("Enter a number between 1 and 10");
if (secnum === number) {
  document.write("Congratulation!");
}
else if (secnum !== number) {
  document.write("Try again!");
}
document.write("<br><br>");





// Chapter 31 - 34
// 1
document.write(new Date());
document.write("<br><br>");

// 2
var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
alert("Current Month: " + month[new Date().getMonth()]);

// 3
var week = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
alert("Today is " + week[new Date().getDay()]);

// 4
if (new Date().getDay() == 0 || new Date().getDay() == 6) {
  document.write("Its Fun day");
}
document.write("<br><br>");

// 5
if (new Date().getDate() < 16) {
  document.write("First fifteen days of the month");
}
else {
  document.write("Last days of the month");
}
document.write("<br><br>");

// 6
var currentDate = new Date();
var date = new Date(1970, 0, 1);
document.write(currentDate + "<br>");
var elapsed = currentDate.getTime() - date.getTime();
document.write("Elapsed milliseconds since January 1, 1970: " + elapsed + "<br>");
document.write("Elapsed minutes since January 1, 1970: " + (elapsed / (1000 * 60)));
document.write("<br><br>");

// 7
var hour = new Date().getHours();
if (hour >= 0 && hour < 12) {
  document.write("Its AM");
}
else if (hour > 12 && hour <= 23) {
  document.write("Its PM");
}
document.write("<br><br>");

// 8
var laterDate = new Date();
laterDate.setDate(31);
laterDate.setMonth(11);
laterDate.setFullYear(2020);
document.write(laterDate);
document.write("<br><br>");

// 9
var date = new Date();
var firstRamzan = new Date(2023, 2, 22);
var diffms = date.getTime() - firstRamzan.getTime();
var days = Math.floor(diffms / (1000 * 60 * 60 * 24));
document.write(days + " days have passed since 1st Ramadan, 2023");
document.write("<br><br>");

// 10
var date = new Date();
var firstDate = new Date(2023, 0, 1);
var diffms = date.getTime() - firstDate.getTime();
var sec = Math.floor(diffms / 1000);
document.write(sec + " seconds had passed since beginning of 2023");
document.write("<br><br>");

// 11
var date = new Date();
date.setHours(date.getHours() + 1);
document.write("current date: " + date);
date.setHours(date.getHours() - 1);
document.write("<br>1 hour ago, it was " + date);
document.write("<br><br>");

// 12
var date = new Date();
document.write("current date: " + date);
date.setFullYear(date.getFullYear() - 100);
document.write("<br>100 years back, it was " + date);
document.write("<br><br>");

// 13
var age = +prompt("Enter your Age:");
var date = new Date();
document.write("Your age is " + age);
document.write("<br>Your birth year is " + date.getFullYear(date.setFullYear(date.getFullYear() - age)));
document.write("<br><br>");

// 14
var cname = prompt("Enter your Name:");
var month = prompt("Enter Month:");
var nou = prompt("Enter the Number of units:")
var cpu = 16;
document.write("<h1>K-Electric Bill</h1><br><br>");
document.write("Customer Name: " + cname);
document.write("<br>Month: " + month);
document.write("<br>Number of units: " + nou);
document.write("<br>Charges per unit: " + cpu);
var netAmount = nou * cpu;
document.write("<br><br>Net Amount Payable (within Due Date): " + netAmount);
var lps = (5 / 100) * netAmount;
document.write("<br>Late payment surcharge: " + lps);
document.write("<br>Gross Amount Payable (after Due Date): " + (netAmount + lps));











