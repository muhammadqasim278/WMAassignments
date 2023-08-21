// Chapter 14 to 16
// 1
var studentNames = [];

// 2
var students = {
    names: []
  };
  
//3
var stringArray = ["Apple", "Banana", "Cherry", "Date"];

// 4
var numbersArray = [1, 2, 3, 4, 5];

// 5
var booleanArray = [true, false, true, true, false];

// 6
var mixedArray = [1, "Hello", true, null, { name: "John", age: 30 }];

// 7
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"];
document.write("Qualifications: <br><br>");
for(var i=1;i<=8;i++)
{
    document.write(i+") "+qualifications[i-1]+"<br>");
}
document.write("<br><br>");

// 8
var studentnames = ["Michale", "John", "Tony"];
var studentScoores = [320, 230, 480];
var totalMarks = 500;
var studentPercentages = [];
for (let i = 0; i < studentScoores.length; i++) {
  var percentage = (studentScoores[i] / totalMarks) * 100;
  studentPercentages.push(percentage);
}
for (let i = 0; i < studentnames.length; i++) {
  document.write("Score of "+studentnames[i]+"is "+studentScoores[i]+". Percentage: "+studentPercentages[i]+"%<br>");
}
document.write("<br><br>");


// 9
var colorArray = ["Red", "Green", "Blue", "Yellow"];
document.write("<h3>Initial Array:</h3>");
document.write(`<p>${colorArray.join(", ")}</p>`);
var colorToAddAtBeginning = prompt("Enter a color to add to the beginning:");
colorArray.unshift(colorToAddAtBeginning);
var colorToAddAtEnd = prompt("Enter a color to add to the end:");
colorArray.push(colorToAddAtEnd);
colorArray.unshift("Purple", "Orange");
colorArray.shift();
colorArray.pop();
var indexToAdd = prompt("Enter the index where you want to add a color:");
var colorToAddAtIndex = prompt("Enter the color name to add at that index:");
colorArray.splice(indexToAdd, 0, colorToAddAtIndex);
var indexToDelete = prompt("Enter the index from where you want to delete color(s):");
var numberOfColorsToDelete = prompt("Enter the number of colors to delete:");
colorArray.splice(indexToDelete, numberOfColorsToDelete);
document.write("<h3>Updated Array:</h3>");
document.write(`<p>${colorArray.join(", ")}</p>`);
document.write("<br><br>");


// 10
var studentScores = [320,230,480,120];
document.write("Scores of Students: "+studentScores+"<br>");
studentScores.sort();
document.write("Student Scores (Ascending Order):", studentScores);
document.write("<br><br>");


// 11
var cities = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
document.write(cities+"<br>");
var selectedCities = [];
selectedCities.push(cities[2]);
selectedCities.push(cities[3]);
document.write("Selected Cities:", selectedCities);
document.write("<br><br>");


// 12
var arr = ["This", "is", "my", "cat"];
var singleString = arr.join(" ");
document.write(singleString);
document.write("<br><br>");


// 13
var fifoQueue = [];
fifoQueue.push("Keyboard");
fifoQueue.push("Mouse");
fifoQueue.push("Printer");
fifoQueue.push("Monitor");
document.write("Devices:<br>"+fifoQueue+"<br>");
var firstValue = fifoQueue.shift(); 
var secondValue = fifoQueue.shift(); 
var thirdValue = fifoQueue.shift(); 
var fourthValue = fifoQueue.shift();
document.write("Out:<br>", firstValue);
document.write("<br>Out:<br>", secondValue);
document.write("<br>Out:<br>", thirdValue);
document.write("<br>Out:<br>", fourthValue);
document.write("<br><br>");


// 14
var fifoQueue = [];
fifoQueue.push("Keyboard");
fifoQueue.push("Mouse");
fifoQueue.push("Printer");
fifoQueue.push("Monitor");
document.write("Devices:<br>"+fifoQueue+"<br>");
var firstValue = fifoQueue.shift(); 
var secondValue = fifoQueue.shift();
var thirdValue = fifoQueue.shift(); 
var fourthValue = fifoQueue.shift();
document.write("Out:<br>", fourthValue);
document.write("<br>Out:<br>", thirdValue);
document.write("<br>Out:<br>", secondValue);
document.write("<br>Out:<br>", firstValue);
document.write("<br><br>");



// 15
var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<select id='manufacturerDropdown'>");
for (let i = 0; i < phoneManufacturers.length; i++) {
  document.write(`<option value='${phoneManufacturers[i]}'>${phoneManufacturers[i]}</option>`);
}
document.write("</select>");


