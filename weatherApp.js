//This the weather app which shows weather of different cities


const cityList=[
  {city:"Ahmedabad,Gujarat",Cel:34,Fah:93.2,climate:"Sunny🌞"},
  {city:"Bangalore,karnataka",Cel:27,Fah:80.6,climate:"Cloudy☁️☁️"},
  {city:"Chennai,Tamil Nadu",Cel:36,Fah:96.8,climate:"Sunny🌞"},
  {city:"Hosur,Tamil Nadu",Cel:28,Fah:82.4,climate:"Partly cloudy☁️"},
  {city:"Hyderabad,Andhra pradesh",Cel:29,Fah:84.2,climate:"Rain🌧️🌧️"},
  {city:"Mumbai,Maharashtra",Cel:30,Fah:86,climate:"Cloudy☁️☁️"},
  {city:"New Delhi,Delhi",Cel:37,Fah:98.6,climate:"Sunny🌞"}
  ]

//Code to display day and time
function getTwelveHrs() {
  var today = new Date();
  var day = today.getDay();
  var hourlist=[12,01,02,03,04,05,06,07,08,09,10,11,12,01,02,03,04,05,06,07,08,09,10,11];
  var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  var hour = today.getHours();
  var minute = today.getMinutes();
  var append = (hour >= 12)? " pm ":" am ";
    if(minute<10)
      {
         minute="0"+minute
      }
    else{minute=minute}
  var time= hourlist[hour]  +':'+ minute + append
  var day = daylist[day] + " "
  document.getElementById('daytime').innerHTML =day+","+' '+time;
}
    
    // code to display city and weather
function displayCity() {
  var x = document.getElementById("input").value; 
    return document.getElementById("city").innerHTML = x; 
  }
    
function tempCall(){
   var x = document.getElementById("input").value;
   var location= cityList.filter(function(v) {if(v.city===x)return v });
   var cel=location[0].Cel;
   var fah=location[0].Fah;
   var cli=location[0].climate;
   var cToFahr = (cel * (9 / 5))+ 32;
   var fahrenheit =  cToFahr +'\xB0F';
   var fToCel = Math.round(10*(fah - 32) * (5 / 9))/10;
   var celcius =  fToCel+'\xB0C';

      return document.getElementById("cel").innerHTML = celcius,
      document.getElementById("fah").innerHTML = fahrenheit,
      document.getElementById("climate").innerHTML = cli;
      

      
    }
     
