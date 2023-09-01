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


while (1) {
    var x = Math.floor(Math.random() * 2);
    var a = prompt("Enter your option: (Head / Tail)");
    a = a.toLowerCase();

    if (a === "head") {
        a = 1;
    }
    else if (a === "tail") {
        a = 0;
    }
    else if(a==="exit"){
        break;
    }
    else {
        console.log("Error!")
        continue;
    }


    if (a === x) {
        console.log("You win");
    }
    else{
        console.log("Fail!");
    }
}





