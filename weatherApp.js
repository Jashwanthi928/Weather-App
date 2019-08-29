//This the weather app which shows weather of different cities
function getTwelveHrs() {
    var today = new Date();
      var day = today.getDay();
      var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
      var hour = today.getHours();
      var minute = today.getMinutes();
      var prepand = (hour >= 12)? " PM ":" AM ";
      hour = (hour >= 12)? hour - 12: hour;
      if (hour===0 && prepand===' PM ') 
      { 
      if (minute===0 && second===0)
      { 
      hour=12;
      prepand=' Noon';
      } 
      else
      { 
      hour=12;
      prepand=' PM';
      } 
      } 
      if (hour===0 && prepand===' AM ') 
      { 
      if (minute===0 && second===0)
      { 
      hour=12;
      prepand=' Midnight';
      } 
      else
      { 
      hour=12;
      prepand=' AM';
      } 
      } 
    var t= hour  +':'+ minute + prepand
    var d = daylist[day] + " "
    document.getElementById('daytime').innerHTML =d+' '+t;
    }
    function cToF(celsius) 
    {
      var cTemp = celsius;
      var cToFahr = cTemp * 9 / 5 + 32;
      var message =  cToFahr + ' \xB0F.';
        document.getElementById('fah').innerHTML =message
    }
    
    function fToC(fahrenheit) 
    {
      var fTemp = fahrenheit;
      var fToCel = (fTemp - 32) * 5 / 9;
      var message =  fToCel + '\xB0C.';
        document.getElementById('cel').innerHTML =message
    } 
    cToF(60);
    fToC(45);
    function validateForm() {
      var x = document.forms["cityName"]["input"].value;
         return document.getElementById("City").innerHTML = x;
         document.getElementById("sub").addEventListener("click", function(event){
          event.preventDefault()
        });
    }
    
    