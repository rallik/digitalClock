function myClock(){
    var date = new Date();
    var timezone = date.getTimezoneOffset() / 60;
    // console.log(timezone);
    var year = date.getFullYear();
    // console.log(year);
    var month = date.getMonth();
    // console.log(month);
    var dayofweek = date.getDay();
    // console.log(dayofweek);
    var dayofmonth = date.getDate();
    // console.log(dayofmonth);
    var hour = date.getHours();
    // console.log(hour);
    var minute = date.getMinutes();
    // console.log(minute);
    var second = date.getSeconds();
    // console.log(second);
    var session = "am";
    // console.log(session);


    var monthstring = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
    var dayofweekstring = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");


    var dayordinal = function(date) {
        if (date > 3 && date < 21) return 'th';
        switch (date % 10) {
          case 1:  return "st";
          case 2:  return "nd";
          case 3:  return "rd";
          default: return "th";
        }
      }

    // console.log(dayofmonth + dayordinal(dayofmonth))

    if (hour > 12){
        hour = hour - 12;
        session = "pm";
    }

    hour = (hour == 0) ? 12 : hour;
    hour = (hour < 10 ) ? "0" + hour : hour;
    minute = (minute < 10 ) ? "0" + minute : minute;
    second = (second < 10 ) ? "0" + second : second;
    
    
    // console.log(timezone);
    // console.log(year);
    // console.log(monthstring[month]);
    // console.log(dayofweekstring[dayofweek]);
    // console.log(dayofmonth + dayordinal(dayofmonth));
    // console.log(hour);
    // console.log(minute);
    // console.log(second);
    // console.log(session);

    // var time_display = hour + " : " + minute + " : " + second + "  " + session;
    // // console.log(time)
    // document.getElementById("timeDisplay").innerText = time_display;
    // document.getElementById("timeDisplay").textContent = time_display;

    var hour_display = hour;
    document.getElementById("hours").innerText = hour_display;
    document.getElementById("hours").textContent = hour_display;

    var minute_display = minute;
    document.getElementById("minutes").innerText = minute_display;
    document.getElementById("minutes").textContent = minute_display;

    var second_display = second;
    document.getElementById("seconds").innerText = second_display;
    document.getElementById("seconds").textContent = second_display;

    // var session_display = session;
    // document.getElementById("session").innerText = session_display;
    // document.getElementById("session").textContent = session_display;


    var date_display = dayofweekstring[dayofweek] + " " + monthstring[month] + " " + dayofmonth + dayordinal(dayofmonth) + ", " + year;
    // console.log(time)
    document.getElementById("date").innerText = date_display;
    document.getElementById("date").textContent = date_display;



    setTimeout(myClock, 1);

}

myClock()