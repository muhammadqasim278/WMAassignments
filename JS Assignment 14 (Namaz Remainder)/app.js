function updateClock() {
  var now = new Date();
  var hours = now.getHours();
  if (hours >= 0 && hours <= 11) {
    var noon = "AM";
  } else if (hours >= 12 && hours <= 23) {
    var noon = "PM";
  }
  hours = hours > 12 ? hours - 12 : hours;
  hours = hours === 0 ? hours + 12 : hours;
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  document.getElementById("hour").innerHTML = hours + ":";
  document.getElementById("mint").innerHTML = minutes + ":";
  document.getElementById("sec").innerHTML = seconds + " " + noon;
}
setInterval(updateClock, 1000);
updateClock();


function idate() {
  var idate = new Intl.DateTimeFormat('fr-TN-u-ca-islamic', { day: 'numeric' }).format(Date.now());

  var imonth = new Intl.DateTimeFormat('fr-TN-u-ca-islamic', { month: 'numeric' }).format(Date.now());
  var imonthArray = ["Muharram", "Safar", "Rabi ul Awwal", "Rabi al-Sani", "Jumada ul Awwal", "Jumada ul-Sani", "Rajab", "Shaban", "Ramadan", "Shawwal", "Dhu al Qadah", "Dhu al Ḥijjah"]
  imonth = imonthArray[imonth - 1];

  var iyear = parseInt(new Intl.DateTimeFormat('fr-TN-u-ca-islamic', { year: 'numeric' }).format(Date.now()));

  document.getElementById("idate").innerHTML = idate - 1;
  document.getElementById("idetailDate").innerHTML = imonth + ", " + iyear;
}
setInterval(idate, 1000);
idate();

function date() {
  var day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat']
  var now = new Date();
  var cdate = now.getDate();
  var cmonth = now.getMonth() + 1;
  var cyear = now.getFullYear();


  cdate = cdate < 10 ? '0' + cdate : cdate;
  cmonth = cmonth < 10 ? '0' + cmonth : cmonth;

  document.getElementById("date").innerHTML = day[now.getDay()] + " " + cdate + "-" + cmonth + "-" + cyear;
}
setInterval(date, 1000);
date();

function namazName() {
  var namaz;
  var fajar = (5 * 60) + 39;
  var zohor = (12 * 60) + 21;
  var asar = (16 * 60) + 6;
  var maghrib = (17 * 60) + 42;
  var isha = (19 * 60) + 3;

  var date = new Date();
  var currentMinutes = ((date.getHours()) * 60) + date.getMinutes();

  if (currentMinutes >= fajar && currentMinutes < zohor) {
    namaz = ["FAJAR","ZOHOR","12:21 PM"];
  } 
  else if (currentMinutes >= zohor && currentMinutes < asar) {
    if (date.getDay() == 5) {namaz = ["JUMMA","ASAR","04:06 PM"];} 

    else { namaz = ["ZOHOR","ASAR","04:06 PM"];}
  } 
  else if (currentMinutes >= asar && currentMinutes < maghrib) {
    namaz = ["ASAR","MAGHRIB","05:42 PM"];
  } 
  else if (currentMinutes >= maghrib && currentMinutes < isha) {
    namaz = ["MAGHRIB","ISHA","07:03 PM"];
  } 
  else if ((currentMinutes >= isha && currentMinutes <= 1440 ) || currentMinutes < fajar) {
    namaz = ["ISHA","FAJAR","05:39 AM"];
  }
  
  document.getElementById("now").innerHTML = namaz[0];
  document.getElementById("upcoming").innerHTML = namaz[1];
  document.getElementById("untime").innerHTML =  namaz[2];
}
setInterval(namazName, 1000);
namazName();












