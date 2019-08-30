//This the weather app which shows weather of different cities
function getTwelveHrs() {
    var today = new Date();
      var day = today.getDay();
      var hourlist=[12,01,02,03,04,05,06,07,08,09,10,11,12,01,02,03,04,05,06,07,08,09,10,11];
      var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
      var hour = today.getHours();
      var minute = today.getMinutes();
      var appand = (hour >= 12)? " pm ":" am ";
      if(minute<10)
      {
        minute="0"+minute
      }
      else{minute=minute}
    var time= hourlist[hour]  +':'+ minute + appand
    var day = daylist[day] + " "
    document.getElementById('daytime').innerHTML =day+' '+time;
    }
    function cToF(celsius) 
    {
      var cTemp = celsius;
      var cToFahr = cTemp * 9 / 5 + 32;
      var message =  cToFahr + ' \xB0F.';
        document.getElementById('fah').innerHTML =message;
    }
    
    function fToC(fahrenheit) 
    {
      var fTemp = fahrenheit;
      var fToCel = (fTemp - 32) * 5 / 9;
      var message =  fToCel + '\xB0C.';
        document.getElementById('cel').innerHTML =message;
    } 
    cToF(60);
    fToC(45);
    function validateForm() {
      var x = document.getElementById("input").value;
         return document.getElementById("city").innerHTML = x;
        
    }
    const msJashwanthi=[
      {location:"Bangalore,karnataka",temp:23},
      {location:"Hyderabad,Andhra pradesh",temp:34}
    ]
      function tempCall(){
    var x = document.getElementById("input").value;
      var Friday = msJashwanthi.filter(function(v) {if(v.location===x)return v });
      return document.getElementById("cel").innerHTML = Friday[0].temp;
      }
      
