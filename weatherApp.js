//This the weather app which shows Sunny &#x2600;weather of different cities


const cityList=[
  {city:"Ahmedabad, Gujarat",Cel:34,climate:"Sunny &#x2600;"},
  {city:"Bangalore, Karnataka",Cel:27,climate:"Cloudy &#x2601; &#x2601;"},
  {city:"Chennai, Tamil Nadu",Cel:36,climate:"Sunny &#x2600;"},
  {city:"Hosur, Tamil Nadu",Cel:28,climate:"Partly cloudy &#x2601;"},
  {city:"Hyderabad, Andhra Pradesh",Cel:29,climate:" Heavy Rain &#x2602;&#x2602;"},
  {city:"Mumbai, Maharashtra",Cel:30,climate:"Cloudy &#x2601;&#x2601;"},
  {city:"New Delhi, Delhi",Cel:32,climate:"Sunny &#x2600"}
  ]

//Code to display day and time
function getTwelveHrs() {
  var today = new Date();
  var day = today.getDay();
  var hourlist=[12,01,02,03,04,05,06,07,08,09,10,11,12,01,02,03,04,05,06,07,08,09,10,11];
  var daylist = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  var hour = today.getHours();
  var minute = today.getMinutes();
  var append = (hour >= 12)? " pm ":" am ";
    if(minute<10)
      {
         minute="0"+minute
      }
    else{minute=minute}
  var time= hourlist[hour]  +':'+ minute + append
  var day = daylist[day]
  document.getElementById('daytime').innerHTML =day+","+' '+time;
}
    
    // code to display city and weather
function displayCity() {
  var x = document.getElementById("input").value; 
    return document.getElementById("city").innerHTML = x; 
  }
    
function tempCall(){
   var x = document.getElementById("input").value;
   console.log(x);
   var location= cityList.filter(function(v) {if(v.city===x)return v });
   
   var cli=location[0].climate;
   var cel=location[0].Cel;
   
      return document.getElementById("climate").innerHTML = cli,document.getElementById("temperature").innerHTML = cel;
      

      
    }
    function tempClick(v){
    var x = document.getElementById("input").value;
    var location= cityList.filter(function(k) {if(k.city===x)return k });
    var cel=location[0].Cel;
    var fahrenheit= Math.round(10*(cel * (9 / 5))+ 32)/10;
  
     if(v==="C"){
    return document.getElementById("temperature").innerHTML = cel;

    }
    else if(v==="F")
    {
      return document.getElementById("temperature").innerHTML = fahrenheit;
    }
    
     
  }