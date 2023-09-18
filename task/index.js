// var arr=[21,22,23,24];
// for(var j=0;j<=arr.length-1;j++){
//     document.write(arr[j]+"  ");
// }
// document.write("<br>");
// var flag=false;
// a=arr[0]-1;
// for(var i=0;i<5;i++){
//     a++;
//     if(a!= arr[i]){
//         document.write(a+" is missing!");
//         break;
//     }
// }



// var arr=[21,23,25,27];
// for(var j=0;j<=arr.length-1;j++){
//     document.write(arr[j]+"  ");
// }
// document.write("<br>");

// for(var i=0;i<arr.length;i++){
//     var diff=arr[i+1]-arr[i];
//     if(diff===2){
//         var a=arr[i]+1;
//         document.write(a+" ");
//     }
// }
// document.write("is missing!");


// var a="Qasim";
// for(var i=a.length-1;i>=0;i--){
//     document.write(a[i]);
// }

// var arr=[1,2,3,4,5,6,7,8,9,10];
// for(var j=0;j<=arr.length-1;j++){
//     document.write(arr[j]+"  ");
// }
// document.write("<br>");
// var even=[];
// var odd=[];
// for(var i=0;i<10;i++){
//     if(arr[i]%2===0){
//         even.push(arr[i]);
//     }
//     else{
//         odd.push(arr[i]);
//     }
// }
// for(var a=0;a<=even.length-1;a++){
//     document.write(even[a]+"  ");
// }
// document.write("<br>");

// for(var b=0;b<=odd.length-1;b++){
//     document.write(odd[b]+"  ");
// }
// document.write("<br>");


// var arr=[1,2,3,4,5,6,7,8,9,10];
// for(var j=0;j<=arr.length-1;j++){
//     document.write(arr[j]+"  ");
// }
// document.write("<br>");


// while (1) {
//     var x = Math.floor(Math.random() * 2);
//     var a = prompt("Enter your option: (Head / Tail)");
//     a = a.toLowerCase();
//     if (a === "head") {
//         a = 1;
//     }
//     else if (a === "tail") {
//         a = 0;
//     }
//     else if(a==="exit"){
//         break;
//     }
//     else {
//         console.log("Error!")
//         continue;
//     }
//     if (a === x) {
//         console.log("You win");
//     }
//     else{
//         console.log("Fail!");
//     }
// }

// generate random number with 10th length


// var currentdate = new Date(2023,8,8);
// var dob = prompt("Enter your Date of Birth: (DD-MM-YYYY)");
// if (dob.includes(" ")) {
//     dob = dob.split(" ");
// }
// else if (dob.includes("-")) {
//     dob = dob.split("-");
// }
// else if (dob.includes("/")) {
//     dob = dob.split("/");
// }
// // var userdate = new Date(+dob[2], +dob[1] - 1, +dob[0]);
// var userdate = new Date(1999,1,7);
// var timediffms = currentdate - userdate;

// var year = Math.floor(timediffms / (1000 * 60 * 60 * 24 * 30.4167 * 12));
// var month =Math.floor((timediffms - (year * 1000 * 60 * 60 * 24 * 30.4167 * 12 )) /(1000 * 60 * 60 * 24 * 30.4167));
// var day = Math.floor((timediffms - ((year * 1000 * 60 * 60 * 24 * 30.4167 * 12 )+(month *1000 * 60 * 60 * 24 * 30.4167)) )/ (1000 * 60 * 60 * 24 ));

// document.write(currentdate+"<br>");
// document.write(year);
// document.write("<br>" + month);
// document.write("<br>" + day+"<br>");



// // var day2 = (timediffms- (1000*60*60*24*212))/(1000 * 60 * 60 * 24);
// // document.write("<br>"+day2);


// var currentDate = new Date();
// var birthDate = new Date('February 7, 1999'); // Replace 'YYYY-MM-DD' with the actual birthdate in the format 'YYYY-MM-DD'
// var timeDifference = currentDate - birthDate;
// var millisecondsInYear = 31536000000; // 31,536,000,000 milliseconds in a year
// var millisecondsInMonth = 2628000000; // Approximately 30.44 days in a month on average
// var millisecondsInDay = 86400000; // 86,400,000 milliseconds in a day
// var millisecondsInHour = 3600000; // 3,600,000 milliseconds in an hour
// var millisecondsInMinute = 60000; // 60,000 milliseconds in a minute
// var years = Math.floor(timeDifference / millisecondsInYear);
// var months = Math.floor((timeDifference % millisecondsInYear) / millisecondsInMonth);
// var days = Math.floor((timeDifference % millisecondsInMonth) / millisecondsInDay);
// var hours = Math.floor((timeDifference % millisecondsInDay) / millisecondsInHour);
// var minutes = Math.floor((timeDifference % millisecondsInHour) / millisecondsInMinute);
// var seconds = Math.floor((timeDifference % millisecondsInMinute) / 1000); // Convert remaining milliseconds to seconds
// function calculateAge(birthDate) {
//     var currentDate = new Date();
//     var timeDifference = currentDate - birthDate;
//     var millisecondsInYear = 31536000000;
//     var millisecondsInMonth = 2629746000;
//     var millisecondsInDay = 86400000;
//     var millisecondsInHour = 3600000;
//     var millisecondsInMinute = 60000;

//     var years = Math.floor(timeDifference / millisecondsInYear);
//     var months = Math.floor((timeDifference % millisecondsInYear) / millisecondsInMonth );
//     var days = Math.floor((timeDifference % millisecondsInMonth) / millisecondsInDay);
//     var hours = Math.floor((timeDifference % millisecondsInDay) / millisecondsInHour);
//     var minutes = Math.floor((timeDifference % millisecondsInHour) / millisecondsInMinute);
//     var seconds = Math.floor((timeDifference % millisecondsInMinute) / 1000);

//     return {
//         years: years,
//         months: months,
//         days: days-1,
//         hours: hours,
//         minutes: minutes,
//         seconds: seconds
//     };
// }

// // Usage:
// var birthDate = new Date(2002,6,28); // Replace with the actual birthdate
// var age = calculateAge(birthDate);
// document.write("Age: " + age.years + " years, " + age.months + " months, " + age.days + " days, " + age.hours + " hours, " + age.minutes + " minutes, " + age.seconds + " seconds");



// var a = prompt("Enter a number:");
// factorial(a);
// function factorial(x){
//     for(var i=x-1; i>=1;i--){
//         x=x*i;
//     }
//     document.write(x);
// }

// var str = "5+5-";
// var newInput = "10";
// var last = str[str.length -1];
// var arr = ["+","-","*","/"];
// if(arr.indexOf(last) !== -1 && newInput.indexOf(0)>="0" && newInput.indexOf(0)<=""){
//     str = str.slice(0,-1)+newInput;
// }
// else{
//     str += newInput;
// }
// console.log(str);

// anagrams
function sorting(characters) {
    for (let i = 0; i < characters.length - 1; i++) {
        for (let j = 0; j < characters.length - i - 1; j++) {
            if (characters[j] > characters[j + 1]) {
                // Swap the characters
                const temp = characters[j];
                characters[j] = characters[j + 1];
                characters[j + 1] = temp;
            }
        }
    }
    return characters;
}
var input1 = prompt("Enter the 1st word:");
input1 = sorting(input1.split("")).join("");
var input2 = prompt("Enter the 2nd word:");
input2 = sorting(input2.split("")).join("");
if(input1 === input2){
    document.write("The giving words are Anagrams!");''
}
else{
    document.write("Not a Anagrams.");
}








