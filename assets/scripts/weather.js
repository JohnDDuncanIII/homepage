if (!String.prototype.includes) { // indexof polyfill
    String.prototype.includes = function() {
        'use strict';
        return String.prototype.indexOf.apply(this, arguments) !== -1;
    };
}

// needed to translate weather.gov forecast notation to picon notation
var map = new Object(); // or var map = {};
map["Scattered Showers"]= "drizzly";
map["Chance Showers"]= "mayberainy";
map["Showers Likely"]= "rainy";
map["Mostly Cloudy"] = "cloudy";
map["Partly Sunny"] = "partlysunny";
map["Overcast"] = "cloudy";
map[" Rain Fog/Mist"] = "rainyfoggy";
map[" Fog/Mist"] = "foggy";
map["Showers"] = "rainy";
map["Partly Cloudy"] = "partlycloudy";
map["Mostly Sunny"] = "verysunny";
map["Chance Light Rain"] = "mayberainy";
map["Rain"] = "rainy";
map["Rain Likely and Patchy Fog"] = "rainyfoggy";
map[" Light Rain"] = "rainy";
map["Slight Chance Showers"] = "mayberainy";
map["Slight Chance T-storms"] = "maybestormy";
map["Mostly Clear"] = "sunny";
map["Fair"] = "sunny";
map["Isolated T-storms"] = "stormy";
map["Sunny and Windy"] = "sunnywindy";
map["Mostly Clear and Breezy"] = "sunnywindy";
map["Clear"] = "sunny";
map["Becoming Sunny"] = "partlysunny";
map["Sunny"] = "verysunny";
map["Partly Cloudy and Breezy"] = "partlycloudybreezy";
map["Windy. Showers"] = "rainywindy";
map["Breezy. Showers"] = "rainywindy";
map["Sunny and Breezy"] = "sunnywindy";
map["Showers and Breezy"] = "rainywindy";
map["Breezy. Slight Chance Showers"] = "mayberainybreezy";
map["Rain Likely"] = "rainy";
map["Chance Rain"] = "mayberainy";
map["T-storms Likely"] = "stormy";
map[" Light Rain Fog/Mist"] = "rainyfoggy";
map["Decreasing Clouds"] = "partlycloudy";
map["Showers and Patchy Fog"] = "rainyfoggy";
map["Chance Showers and Patchy Fog"] = "mayberainyfoggy";
map["Showers Likely and Patchy Fog"] = "rainyfoggy";
map["Gradual Clearing"] = "partlysunny";
map["Isolated Showers"] = "drizzly";
map["Mostly Sunny and Windy"] = "sunnywindy";
map["Partly Cloudy and Windy"] = "partlycloudybreezy";
map["Mostly Sunny and Breezy"] = "sunnywindy";
map["A Few Clouds"] = "partlycloudy";
map["Heavy Rain"] = "heavyrainy";
map["Chance T-storms"] = "maybestormy";
map["Patchy Fog"] = "foggy";
map["Slight Chance Rain"] = "mayberainy";
map["Severe Thunderstorms"] = "heavystormy";
map[" Light Rain and Windy"] = "rainywindy";
map["Cloudy"] = "cloudy";
map["Slight Chance T-storms and Windy"] = "maybestormywindy";
map["Increasing Clouds"] = "cloudy";
map["Slight Chance T-storms and Patchy Fog"] = "maybestormyfoggy";
map["Showers Likely and Areas Fog"] = "rainyfoggy";
map["Areas Fog"] = "foggy";
map["Chance Showers and Areas Fog"] = "mayberainyfoggy";
map["T-storms"] = "stormy";
map[" Thunderstorm Smoke"] = "smokey";
map["Slight Chance T-storms and Breezy"] = "maybestormywindy";
map["Chance T-storms and Windy"] = "maybestormywindy";
map[" Smoke"] = "smokey";
map["Patchy Smoke"] = "smokey";
map["Areas Drizzle"] = "drizzly";
map["Scattered T-storms"] = "stormy";
map["Patchy Drizzle"] = "drizzly";
map["Lt Rain Shwr"] = "drizzly";
map["Rain/Snow Likely"] = "rainysnowy";
map["Chance Rain/Snow"] = "mayberainysnowy";
map["Scattered Snow Showers"] = "snowy";
map["Mixed Prcp"] = "sleety";
map["Rain/Snow and Breezy"] = "rainysnowybreezy";
map["Chance Snow"] = "maybesnowy";
map["Rain/Snow Likely and Breezy"] = "rainysnowybreezy";
map["Chance Rain/Snow and Breezy"] = "mayberainysnowybreezy";
map["Snow"] = "snowy";
map["Slight Chance Snow Showers"] = "maybesnowy";
map["Chance Snow Showers"] = "maybesnowy";
map["Slight Chance Rain/Snow"] = "mayberainysnowy";
map["Snow Showers"] = "snowy";
map["Slight Chance Showers and Breezy"] = "mayberainybreezy";
map["Mostly Cloudy and Breezy"] = "cloudybreezy";
map["Chance Showers and Breezy"] = "mayberainybreezy";
map["Decreasing Clouds and Breezy"] = "cloudybreezy";
map["Chance T-storms and Breezy"] = "maybestormywindy";
map["Drizzle"] = "drizzly";
map["Overcast and Breezy"] = "cloudybreezy";
map["Areas Dense Fog"] = "foggy";
map["Mostly Cloudy and Blustery"] = "cloudybreezy";
map["Patchy Frost"] = "";
map["Patchy Drizzle and Patchy Fog"] = "drizzlyfoggy";
map["Partly Sunny and Breezy"] = "partlysunnybreezy";
map["Scattered Sprinkles"] = "drizzly";
map["Snow Showers Likely"] = "snowy";
map["Scattered T-storms and Breezy"] = "stormybreezy";
map["Slight Chance Rain and Patchy Fog"] = "mayberainyfoggy";
map["Chance Rain and Patchy Fog"] = "mayberainyfoggy";
map["Chance Drizzle and Patchy Fog"] = "drizllyfoggy";
map["Slight Chance Showers and Patchy Fog"] = "mayberainyfoggy";
map["Slight Chance Sprinkles"] = "drizzly";
map["Isolated Showers and Breezy"] = "rainywindy";
map["Breezy. Isolated Showers"] = "rainywindy";
map["Breezy. Chance T-storms"] = "maybestormywindy";
map["T-storms Likely and Breezy"] = "maybestormywindy";
map["Heavy Rain and Patchy Fog"] = "heavyrainyfoggy";
map[" Heavy Rain Fog/Mist"] = "heavyrainyfoggy";
map["A Few Clouds and Breezy"] = "cloudybreezy";
map["Isolated T-storms and Breezy"] = "stormybreezy";
map["Sprinkles"] = "drizzly";
map["Fair and Breezy"] = "sunnywindy";
map["Mostly Clear and Windy"] = "sunnywindy";
map["Rain and Patchy Fog"] = "rainyfoggy";
map["Patchy Blowing Dust"] = "dusty";
map["Hot"] = "hot";
map["Scattered Showers and Breezy"] = "rainywindy";
map["Scattered Showers and Windy"] = "rainywindy";
map["Breezy. Mostly Clear"] = "sunnywindy";
map["Windy. Isolated Showers"] = "rainywindy";
map["Windy. Mostly Clear"] = "sunnywindy";
map["Chance T-storms and Patchy Fog"] = "stormyfoggy";
map["Fair and Windy"] = "sunnywindy";
map[" Thunderstorm"] = "stormy";
map["Scattered T-storms and Patchy Fog"] = "stormybreezy";
map[" Fog"] = "foggy";
map[""] = "";
map[""] = true;
map["NA"] = true;

//document.querySelector("link[rel='shortcut icon']").href = "";

var d = new Date();
var weekday = new Array(7);
weekday[0]=  "sun";
weekday[1] = "mon";
weekday[2] = "tue";
weekday[3] = "wed";
weekday[4] = "thu";
weekday[5] = "fri";
weekday[6] = "sat";
var n = weekday[d.getDay()]; // get picon val of current day
var hasShownMoon = false;
var firstRun = true;
var firstRunDay;
var LATITUDE = 0.0;
var LONGITUDE = 0.0;
var geocoder = new google.maps.Geocoder();
var address = "Truth or Consequences";
var loc = location.toString();
var tLat = window.localStorage.getItem("latitude");
var tLong = window.localStorage.getItem("longitude");
var bw = window.localStorage.getItem("pat") == "bw";
var pCount = 0; // picon counter
var dCount = 0; // day counter
var tCount = 0; // thermometer counter
var lCount = 0; // letter counter
var gCount = 0; // graph counter
var bCount = 0; // bar counter (for graphs)
var piconArray = [];
var dayArray = [];
var thermArray = [];
var letterArray = [];
var barPrecipArray = [];
var barTempArray = [];

var doc;
var count = 2;
var position = 0;
var startTime;
var tmrw = false;
var LAST_DAY = 14;

if(loc.includes("=")) {
    address = loc.substring(loc.indexOf("=")+1, loc.length);
    address = address.replace(/%20/g, " ");
}
function computeLocation() {
    geocoder.geocode( { 'address': address}, function(results, status) {
	if (status == google.maps.GeocoderStatus.OK) {
	    LATITUDE = results[0].geometry.location.lat();
	    LONGITUDE = results[0].geometry.location.lng();
	}
    });
}

// fetches the json file from weather.gov
function fetchJSONFile(path, callback) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                var data = JSON.parse(httpRequest.responseText);
                if (callback) callback(data);
            }
        }
    };
    httpRequest.open('GET', path);
    httpRequest.send();
}



function weather() {
    var weatherBox = document.getElementById("weatherBox");

    var toAdd = document.createElement("hr");
    weatherBox.appendChild(toAdd);

    if((tLat != null) &&
       (tLong != null)) {
	var buttonnode= document.createElement('input');
	buttonnode.setAttribute('type','button');
	buttonnode.setAttribute('name','geolocation');
	buttonnode.setAttribute('value','Reset Geolocation Coordinates');
	buttonnode.addEventListener("click", function(){
	    window.localStorage.removeItem("latitude");
	    window.localStorage.removeItem("longitude");
	    buttonnode.setAttribute('value','Geolocation Coordinates Reset!');
	});
	weatherBox.appendChild(buttonnode);

        var toAdd = document.createElement("br");
	weatherBox.appendChild(toAdd);
    }

    // this requests the file and executes a
    //    callback with the parsed result once it is available
    fetchJSONFile('http://forecast.weather.gov/MapClick.php?lat='+
		  LATITUDE+'&lon='+
		  LONGITUDE+'&FcstType=json',
		  function(data) {
                      // request XML data
                      var x = new XMLHttpRequest();
                      //x.open("GET", "http://forecast.weather.gov/MapClick.php?lat=39.83092929999999&lon=-77.23109549999998&FcstType=digitalDWML", true);
                      var urll = "http://forecast.weather.gov/MapClick.php?lat="+LATITUDE+"&lon="+LONGITUDE+"&FcstType=digitalDWML";
                      x.open("GET", urll, true);
                      x.onreadystatechange = function () {
                          if (x.readyState == 4 && x.status == 200) {
                              doc = x.responseXML;
                              var br = document.createElement("br");
                              weatherBox.appendChild(br);
		              var br = document.createElement("br");
                              weatherBox.appendChild(br);

		              // add the location name to the top
                              var centerName = data.location.areaDescription.toLowerCase();
                              var nameBox =  document.createElement("div");
                              nameBox.setAttribute('id', "areaDescriptionBox");
                              nameBox.setAttribute('style',"display: inline-block;");
		              var tmpCounter = 0;
                              for(var i = 0; i < centerName.length; i++) {
			          if((tmpCounter >= 9 && centerName.charAt(i)==' ') || (centerName.charAt(i)==',')) {
			              var brr = document.createElement("br");
			              nameBox.appendChild(brr);
			              tmpCounter=0;
                                      if(centerName.charAt(i)==','){
                                          i+=1;
                                      }
			          } else {
			              var toAdd = document.createElement("img");
	                              toAdd.setAttribute('id', "letter"+lCount);
			              lCount++;
			              letterArray.push(toAdd);
	                              if(centerName == "M" || centerName =="" || centerName ==null || centerName == "NA") {
				          toAdd.setAttribute('src', "assets/weather/MISC/question/face.gif");
	                              } else {
				          if(bw) {
				              toAdd.setAttribute('src', 'assets/weather/letters/'+centerName.charAt(i)+'_bw.gif');
				          } else {
				              toAdd.setAttribute('src', 'assets/weather/letters/'+centerName.charAt(i)+'.gif');
				          }
	                              }
	                              nameBox.appendChild(toAdd);
			          }
                                  tmpCounter++;
                              }
                              weatherBox.appendChild(nameBox);

                              var toAdd = document.createElement("br");
	                      weatherBox.appendChild(toAdd);

                              // add "Today" image
                              var toAdd = document.createElement("img");
                              toAdd.setAttribute('id', "today");
                              toAdd.setAttribute('src', "assets/weather/day/today/face.gif");
                              weatherBox.appendChild(toAdd);
		              weatherBox.appendChild(br);

		              // add the current observation location name
                              var curOb = data.currentobservation.name.toLowerCase();
                              var nameBox =  document.createElement("div");
                              //nameBox.className = "img-with-text-weather-table";
                              nameBox.setAttribute('id', "currentObservationBox");
                              nameBox.setAttribute('style',"display: inline-block;");
		              tmpCounter = 0;
                              for(var i = 0; i < curOb.length; i++) {
	                          if((tmpCounter >= 7 && curOb.charAt(i)==' ')  || (curOb.charAt(i)==',')) {
			              var br = document.createElement("br");
			              nameBox.appendChild(br);
			              tmpCounter=0;
                                      if(curOb.charAt(i)==','){
                                          i+=1;
                                      }
			          } else {
			              var toAdd = document.createElement("img");
	                              toAdd.setAttribute('id', "letter"+lCount);
			              lCount++;
			              letterArray.push(toAdd);
	                              //toAdd.className = "img-with-text-weather-letter";
	                              if(centerName == "M" || centerName =="" || centerName ==null || centerName == "NA") {
				          toAdd.setAttribute('src', "assets/weather/MISC/question/face.gif");
	                              } else {
				          if(bw) {
				              toAdd.setAttribute('src', 'assets/weather/letters/'+curOb.charAt(i)+'_bw.gif');
				          } else {
				              toAdd.setAttribute('src', 'assets/weather/letters/'+curOb.charAt(i)+'.gif');
				          }
	                              }
			              nameBox.appendChild(toAdd);
			          }
			          tmpCounter++;
                              }
                              weatherBox.appendChild(nameBox);
                              var toAdd = document.createElement("br");
	                      weatherBox.appendChild(toAdd);
                              var toAdd = document.createElement("br");
	                      weatherBox.appendChild(toAdd);

		              var showDate = true;
		              helper(data.currentobservation.Temp, data.currentobservation.Relh ,data.currentobservation.Weather, showDate, data.currentobservation.Weather);
		              var tempArray = data.data.temperature;
		              var forecastArray = data.data.weather;
		              var precipArray = data.data.pop;
		              var text = data.data.text;
		              var counter = d.getDay();
		              var j = 0;
		              var afternoon = false;
		              var today = false;
		              var tonight = true;

		              if(data.time.startPeriodName[0]=="This Afternoon") {
			          helper(tempArray[j], precipArray[j], forecastArray[j], afternoon, text[j]);
			          j++;
			          afternoon = true;
		              }

		              if(data.time.startPeriodName[0]=="Today") {
			          today = true;
			          helper(tempArray[j], precipArray[j], forecastArray[j], today, text[j]);
			          j++;
		              }

                              var precipProb = doc.getElementsByTagName("probability-of-precipitation");
                              var time =  doc.getElementsByTagName("time-layout");
                              var weatherProb =  doc.getElementsByTagName("weather");
                              var tempProb = doc.querySelectorAll('[type=hourly]');
                              var humidityProb =  doc.getElementsByTagName("humidity");
                              var cloudProb =  doc.getElementsByTagName("cloud-amount");

                              // weatherBox = document.getElementById("weatherBox");
                              var graph = document.createElement('div');
                              graph.id = 'graph'+gCount;
                              gCount++;
                              graph.className = 'graph';
                              var bar = document.createElement('div');
                              bar.className = 'bar bar-precip bar-hidden';
                              bar.setAttribute("style","height:"+"50px;")
                              graph.appendChild(bar);

                              var graph2 = document.createElement('div');
                              graph2.id = 'graph'+gCount;
                              gCount++;
                              graph2.className = 'graph';
                              var bar = document.createElement('div');
                              bar.className = 'bar bar-precip bar-hidden';
                              bar.setAttribute("style","height:"+"50px;")
                              graph2.appendChild(bar);

                              var time =  doc.getElementsByTagName("time-layout");
                              for (var i = position; i < weatherProb[0].childNodes.length; i++) {
                                  var cur =  weatherProb[0].childNodes[i].childNodes[0];

                                  if(i==0){
                                      var startTimeT = time[0].childNodes[count].firstChild.nodeValue;
                                      startTime = startTimeT.substring(startTimeT.indexOf('T')+1, startTimeT.indexOf(':'));
                                  }
                                  var curTime = time[0].childNodes[count].firstChild.nodeValue;
                                  var simpTime = curTime.substring(curTime.indexOf('T')+1, curTime.indexOf(':'));

                                  var bar = document.createElement('div');
                                  bar.className = 'bar bar-precip';
                                  bar.id = 'bar'+bCount;
                                  bCount++;
                                  barPrecipArray.push(bar);
                                  bar.setAttribute("style","height:"+(precipProb[0].childNodes[i].textContent/2)+"px;")
                                  graph.appendChild(bar);
                                  var fCast = '';
                                  if(cur != undefined){
                                      fCast = cur.getAttribute("coverage") + " " + cur.getAttribute("weather-type");
                                  }
                                  bar.setAttribute('title', precipProb[0].childNodes[i].textContent+"% " + fCast);

                                  var bar = document.createElement('div');
                                  bar.className = 'bar bar-temp';
                                  bar.id = 'bar'+bCount;
                                  bCount++;
                                  barTempArray.push(bar);
                                  bar.setAttribute("style","height:"+(tempProb[0].childNodes[i].textContent/2)+"px;")
                                  graph.appendChild(bar);
                                  bar.setAttribute('title', tempProb[0].childNodes[i].textContent+"F");

                                  var bar = document.createElement('div');
                                  bar.className = 'bar bar-humidity';
                                  bar.id = 'bar'+bCount;
                                  bCount++;
                                  barTempArray.push(bar);
                                  bar.setAttribute("style","height:"+(humidityProb[0].childNodes[i].textContent/2)+"px;")
                                  graph2.appendChild(bar);
                                  bar.setAttribute('title', humidityProb[0].childNodes[i].textContent+"%");

                                  var bar = document.createElement('div');
                                  bar.className = 'bar bar-cloud';
                                  bar.id = 'bar'+bCount;
                                  bCount++;
                                  barTempArray.push(bar);
                                  bar.setAttribute("style","height:"+(cloudProb[0].childNodes[i].textContent/2)+"px;")
                                  graph2.appendChild(bar);
                                  bar.setAttribute('title', cloudProb[0].childNodes[i].textContent+"%");

                                  count += 4;
                                  if(simpTime == 23) {position = i+1; break;}
                              }
                              weatherBox.appendChild(graph);

                              var textt = document.createElement('div');
                              textt.className = 'text';

                              for(var i = startTime; i <= 23; i++){
                                  var bar_text = document.createElement('div');
                                  bar_text.className = 'bar-text';
                                  var strN = i.toString();
                                  for(var c = 0; c < strN.length; c++){
                                      var hour = document.createElement('img');
                                      hour.src="assets/weather/nums_cure/"+ strN[c]+".gif";
                                      bar_text.appendChild(hour);
                                      textt.appendChild(bar_text);
                                  }
                              }
                              startTime = 0;
                              
                              weatherBox.appendChild(graph2);
                              weatherBox.appendChild(textt);

		              if(data.time.startPeriodName[0]=="Tonight" ||
			         data.time.startPeriodName[1]=="Tonight") {
			          // add "Tonight" image
			          var toAdd = document.createElement("img");
			          toAdd.setAttribute('id', "tonight");
			          //toAdd.className = "img-with-text-weather";
			          toAdd.setAttribute('src', "assets/weather/day/tonight/face.gif");
			          weatherBox.appendChild(toAdd);
			          var br = document.createElement("br");
			          weatherBox.appendChild(br);
			          tonight = true;
			          helper(tempArray[j], precipArray[j], forecastArray[j], false, text[j]);
			          j++;
		              }

                              tmrw = true;

		              for(j; j < tempArray.length; j++) {
			          if(j==1 && tonight || (j==2 && tonight) && (afternoon || today)) {
			              var toAdd = document.createElement("hr");
			              weatherBox.appendChild(toAdd);

			              var toAdd = document.createElement("div");
			              toAdd.innerHTML = '(this space left blank)';
			              toAdd.setAttribute("style", 'visibility: hidden;');
			              weatherBox.appendChild(toAdd);
			              counter++;
			              if(counter==weekday.length) { counter =0;}
			              n = weekday[counter];
			          }
                                  var br = document.createElement("br");
			          weatherBox.appendChild(br);
			          helper(tempArray[j], precipArray[j], forecastArray[j], showDate, text[j]);

			          if( (j == 0 && (!afternoon||!today)) ||
			              (j==1 && (afternoon||today))) {
			              var toAdd = document.createElement("hr");
			              weatherBox.appendChild(toAdd);

			              var toAdd = document.createElement("div");
			              toAdd.innerHTML = '(this space left blank)';
			              toAdd.setAttribute("style", 'visibility: hidden;');
			              weatherBox.appendChild(toAdd);
			          }

			          if(afternoon || today) {
			              if(j%2!=0) {
				          if(j >= 1) {
				              counter++;
				              if(counter==weekday.length) { counter =0;}
				              n = weekday[counter];
				              var toAdd = document.createElement("hr");
				              weatherBox.appendChild(toAdd);
				              var br = document.createElement("br");
				              weatherBox.appendChild(br);
				          }
				          showDate = true;
			              } else {
				          showDate = false;
			              }
			          }
			          else {
			              if(j%2==0) {
				          if(j >= 2) {
				              counter++;
				              if(counter==weekday.length) { counter =0;}
				              n = weekday[counter];
				              var toAdd = document.createElement("hr");
				              weatherBox.appendChild(toAdd);
				              var br = document.createElement("br");
				              weatherBox.appendChild(br);
				          }
				          showDate = true;
			              } else {
				          showDate = false;
			              }
			          }
		              }
		              var toAdd = document.createElement("hr");
		              weatherBox.appendChild(toAdd);
		              var lv = document.getElementById("lever");

		              function lvr() {
			          //var link = document.createElement('link');
			          //link.type = 'image/x-icon';
			          //link.rel = 'icon';
			          if(lv.src.indexOf("up") !== -1) {
			              //link.href = link.href.substring(0, piconArray[i].src.lastIndexOf('.'))+"_bw.gif";
			              for(var i=0; i<piconArray.length;i++){
				          piconArray[i].src=piconArray[i].src.substring(0, piconArray[i].src.lastIndexOf('.'))+"_bw.gif";
			              }
			              for(var i=0; i<dayArray.length;i++){
				          dayArray[i].src=dayArray[i].src.substring(0, dayArray[i].src.lastIndexOf('.'))+"_bw.gif";
			              }
			              for(var i=0; i<thermArray.length;i++){
				          thermArray[i].src=thermArray[i].src.substring(0, thermArray[i].src.lastIndexOf('.'))+"_bw.gif";
			              }
			              for(var i=0; i<letterArray.length;i++){
				          letterArray[i].src=letterArray[i].src.substring(0, letterArray[i].src.lastIndexOf('.'))+"_bw.gif";
			              }
			          } else {
			              //link.href = link.href=
			              for(var i=0; i<piconArray.length;i++){
				          piconArray[i].src=piconArray[i].src.substring(0, piconArray[i].src.lastIndexOf('_bw.gif'))+".gif";
			              }
			              for(var i=0; i<dayArray.length;i++){
				          dayArray[i].src=dayArray[i].src.substring(0, dayArray[i].src.lastIndexOf('_bw.gif'))+".gif";
			              }
			              for(var i=0; i<thermArray.length;i++){
				          thermArray[i].src=thermArray[i].src.substring(0, thermArray[i].src.lastIndexOf('_bw.gif'))+".gif";
			              }
			              for(var i=0; i<letterArray.length;i++){
				          letterArray[i].src=letterArray[i].src.substring(0, letterArray[i].src.lastIndexOf('_bw.gif'))+".gif";
			              }
			          }
			          //document.getElementsByTagName('head')[0].appendChild(link);
		              }
		              lv.addEventListener('click', lvr, false);
                          }
                      };
                      x.send(null);
		  });
}
function helper(curTemp, precip, forecast, showDate, text) {
    var weatherPath = 0;
    var tableBox = document.createElement("div");
    tableBox.className = "img-with-text-weather-table";

    var toAdd = document.createElement("img");
    var dayBox = document.createElement("div");
    dayBox.className =  "img-with-text-weather-table";
    toAdd.setAttribute('id', "day"+dCount);
    dCount++;
    dayArray.push(toAdd);
    toAdd.className = "img-with-text-weather-table";
    if(bw){
	toAdd.setAttribute('src', "assets/weather/day/"+n+"/face_bw.gif");
    } else {
	toAdd.setAttribute('src', "assets/weather/day/"+n+"/face.gif");
    }

    if(!showDate) {
	//if(n==weekday[d.getDay()] && !hasShownMoon) {
	text = text.toLowerCase();
	if(text.includes("cloudy")) {
	    if(bw){
		toAdd.setAttribute('src', "assets/weather/sky/partlymoonny/face_bw.gif");
	    } else {
		toAdd.setAttribute('src', "assets/weather/sky/partlymoonny/face.gif");
	    }
	} else {
	    if(bw){
		toAdd.setAttribute('src', "assets/weather/sky/moonny/face_bw.gif");
	    } else {
		toAdd.setAttribute('src', "assets/weather/sky/moonny/face.gif");
	    }
	}
	/*hasShownMoon = true;
	  } else {
	  toAdd.style.visibility = 'hidden';
	  }*/
    }
    dayBox.appendChild(toAdd);
    weatherBox.appendChild(dayBox);

    var tempBox = document.createElement("div");
    tempBox.className = "img-with-text-weather-table";
    tempBox.setAttribute('id', "tempBox");

    var eworldBox =  document.createElement("div");
    eworldBox.className = "img-with-text-weather-table";
    eworldBox.setAttribute('id', "eWorldBox");
    eworldBox.setAttribute('style',"display: inline-block;");

    for(var i = 0; i < curTemp.length; i++) {
	var toAdd = document.createElement("img");
	toAdd.setAttribute('id', "temp"+i);
	toAdd.className = "img-with-text-weather-letter";
	if(curTemp == "M" || curTemp =="" || curTemp ==null || curTemp == "NA") {
	    toAdd.setAttribute('src', "assets/weather/MISC/question/face.gif");
	} else {
	    toAdd.setAttribute('src', 'assets/weather/nums/'+curTemp.charAt(i)+'.gif');
	}
	eworldBox.appendChild(toAdd);
    }
    var toAdd = document.createElement("img");
    toAdd.setAttribute('id', "tempDegree");
    toAdd.className = "img-with-text-weather-letter";
    toAdd.setAttribute('src', 'assets/weather/nums/degree.gif');
    eworldBox.appendChild(toAdd);

    var toAdd = document.createElement("img");
    toAdd.setAttribute('id', "tempDegree");
    toAdd.className = "img-with-text-weather-letter";
    toAdd.setAttribute('src', 'assets/weather/nums/f.gif');
    eworldBox.appendChild(toAdd);
    tempBox.appendChild(eworldBox);

    /***** OLD PRECIP ******/

    if(curTemp != 'M' && curTemp != "" && curTemp != null && curTemp != "NA") {
	weatherPath = curTemp;
	while(weatherPath%5 != 0) { weatherPath--; } // decrement the value to a valid picon therm
	if(weatherPath<100 && weatherPath>=0) {
	    if(weatherPath == 0) {
		weatherPath = "p00" + weatherPath;
	    } else {
		weatherPath = "p0" + weatherPath;
	    }
	}
	if(weatherPath < 0) {
	    weatherPath = weatherPath * -1;
	    weatherPath = "m0" + weatherPath;
	}
	if(weatherPath >= 100){
	    if(weatherPath >= 110) {
		weatherPath = "p110";
	    } else {
	        weatherPath = "p" + weatherPath;
	    }
	}
    }

    var thermBox = document.createElement("div");
    thermBox.className = "img-with-text-weather-block";
    thermBox.setAttribute('id', "thermBox");
    var toAdd = document.createElement("img");
    toAdd.setAttribute('id', "therm"+tCount);
    tCount++;
    thermArray.push(toAdd);
    toAdd.className = "img-with-text-weather-block";
    if(curTemp == "M" || curTemp =="" || curTemp ==null || curTemp == "NA") {
	if(bw){
	    toAdd.setAttribute('src', "assets/weather/MISC/question/face_bw.gif");
	} else {
	    toAdd.setAttribute('src', "assets/weather/MISC/question/face.gif");
	}

    } else {
	if(bw){
	    toAdd.setAttribute('src', "assets/weather/temp2/" + weatherPath + "/face_bw.gif");
	} else {
	    toAdd.setAttribute('src', "assets/weather/temp2/" + weatherPath + "/face.gif");
	}

    }
    if(firstRun) {
	//document.querySelectorAll("link[rel*='icon'")[0].href = 'assets/weather/temp/' + weatherPath + '/face.gif';
	var link = document.createElement('link');
	link.type = 'image/x-icon';
	link.rel = 'icon';
	if(bw) {
	    link.href = ('assets/weather/temp/' + weatherPath + '/face_bw.gif');
	} else {
	    link.href = ('assets/weather/temp/' + weatherPath + '/face.gif');
	}
	document.getElementsByTagName('head')[0].appendChild(link);
	firstRun = false;
	firstRunDay = n;
    }

    thermBox.appendChild(toAdd);
    tempBox.appendChild(thermBox);
    weatherBox.appendChild(tempBox);

    var tableBox = document.createElement("div");
    tableBox.className = "img-with-text-weather-table";

    if(forecast.includes("then")) {
	var firstForecast = forecast.substring(0, forecast.indexOf("then")-1);
	var secondForecast = forecast.substring(forecast.indexOf("then")+5, forecast.length);

	var toAdd = document.createElement("img");
	toAdd.setAttribute('id', "picon"+pCount);
        pCount++;
        piconArray.push(toAdd);
	toAdd.setAttribute('title', text);
        toAdd.onclick=function(){this.setAttribute('title', firstForecast);};
	//toAdd.setAttribute('title', firstForecast);
	toAdd.className = "img-with-text-weather-table";
	if(map[firstForecast] == true) {
	    if(bw){
		toAdd.setAttribute('src', "assets/weather/MISC/question/face_bw.gif");
	    } else {
		toAdd.setAttribute('src', "assets/weather/MISC/question/face.gif");
	    }
	} else {
	    if(bw) {
		toAdd.setAttribute('src', "assets/weather/sky/"+map[firstForecast]+"/face_bw.gif");
	    } else {
		toAdd.setAttribute('src', "assets/weather/sky/"+map[firstForecast]+"/face.gif");
	    }
	}

	tableBox.appendChild(toAdd);
	weatherBox.appendChild(tableBox);

	/*NEW PRECIP*/
	if(precip != null) {
	    var br = document.createElement("br");
	    tableBox.appendChild(br);
	    var precipBox =  document.createElement("div");
	    precipBox.className = "img-with-text-weather-table";
	    precipBox.setAttribute('id', "precipBox");
	    precipBox.setAttribute('style',"display: inline-block; padding-top:5px;");

	    for(var i = 0; i < precip.length; i++) {
		var toAdd = document.createElement("img");
		toAdd.setAttribute('id', "precip"+i);
		toAdd.className = "img-with-text-weather-letter";
		if(curTemp == "M" || curTemp =="" || precip=="NA") {
		    toAdd.setAttribute('src', "assets/weather/MISC/question/face.gif");
		    precipBox.appendChild(toAdd);
		    break;
		} else {
		    toAdd.setAttribute('src', 'assets/weather/nums/'+precip.charAt(i)+'.gif');
		}
		precipBox.appendChild(toAdd);
	    }
	    if(curTemp != "M" && curTemp !="" && precip!="NA") {
		var toAdd = document.createElement("img");
		toAdd.setAttribute('id', "percent");
		toAdd.className = "img-with-text-weather-letter";
		toAdd.setAttribute('src', 'assets/weather/nums/percent.gif');
		precipBox.appendChild(toAdd);
	    }
	    tableBox.appendChild(precipBox);
	}

	var tableBox = document.createElement("div");
	tableBox.className = "img-with-text-weather-table";
	var toAdd = document.createElement("img");
	toAdd.setAttribute('id', "picon"+pCount);
        pCount++;
        piconArray.push(toAdd);
	toAdd.setAttribute('title', text);
	toAdd.onclick=function(){this.setAttribute('title', secondForecast);};
	toAdd.className = "img-with-text-weather-table";
	if(map[secondForecast] == true) {
	    if(bw){
		toAdd.setAttribute('src', "assets/weather/MISC/question/face_bw.gif");
	    } else {
		toAdd.setAttribute('src', "assets/weather/MISC/question/face.gif");
	    }
	} else {
	    if(bw){
		toAdd.setAttribute('src', "assets/weather/sky/"+map[secondForecast]+"/face_bw.gif");
	    } else {
		toAdd.setAttribute('src', "assets/weather/sky/"+map[secondForecast]+"/face.gif");
	    }
	}
	tableBox.appendChild(toAdd);
	weatherBox.appendChild(tableBox);
    } else {
	var toAdd = document.createElement("img");
	toAdd.setAttribute('id', "picon"+pCount);
        pCount++;
        piconArray.push(toAdd);
	toAdd.setAttribute('title', text);
	toAdd.onclick=function(){this.setAttribute('title', forecast);};
	toAdd.className = "img-with-text-weather-table";

	if(map[forecast] == true) {
	    if(bw){
		toAdd.setAttribute('src', "assets/weather/MISC/question/face_bw.gif");
	    } else {
		toAdd.setAttribute('src', "assets/weather/MISC/question/face.gif");
	    }
	} else {
	    toAdd.setAttribute('src', "assets/weather/sky/"+map[forecast]+"/face.gif");
	    if(bw){
		toAdd.setAttribute('src', "assets/weather/sky/"+map[forecast]+"/face_bw.gif");
	    } else {
		toAdd.setAttribute('src', "assets/weather/sky/"+map[forecast]+"/face.gif");
	    }
	}

	tableBox.appendChild(toAdd);
	weatherBox.appendChild(tableBox);

	/*NEWPRECIP*/
	if(precip != null) {
	    var br = document.createElement("br");
	    tableBox.appendChild(br);
	    var precipBox =  document.createElement("div");
	    precipBox.className = "img-with-text-weather-table";
	    precipBox.setAttribute('id', "precipBox");
	    precipBox.setAttribute('style',"display: inline-block; padding-top:5px;");

	    for(var i = 0; i < precip.length; i++) {
		var toAdd = document.createElement("img");
		toAdd.setAttribute('id', "precip"+i);
		toAdd.className = "img-with-text-weather-letter";
		if(curTemp == "M" || curTemp =="" || precip=="NA") {
		    toAdd.setAttribute('src', "assets/weather/MISC/question/face.gif");
		    precipBox.appendChild(toAdd);
		    break;
		} else {
		    toAdd.setAttribute('src', 'assets/weather/nums/'+precip.charAt(i)+'.gif');
		}

		precipBox.appendChild(toAdd);
	    }
	    if(curTemp != "M" && curTemp !="" && precip!="NA") {
		var addPercent = document.createElement("img");
		addPercent.setAttribute('id', "percent");
		addPercent.className = "img-with-text-weather-letter";
		addPercent.setAttribute('src', 'assets/weather/nums/percent.gif');
		precipBox.appendChild(addPercent);
	    }
	    tableBox.appendChild(precipBox);
	}
    }

    var br = document.createElement("br");
    weatherBox.appendChild(br);
    var d = new Date();
    if(tmrw && !showDate || ((dCount == LAST_DAY || dCount == LAST_DAY+1) && d.getHours() != 0)){
        var precipProb = doc.getElementsByTagName("probability-of-precipitation");
        var time =  doc.getElementsByTagName("time-layout");
        var weatherProb =  doc.getElementsByTagName("weather");
        var tempProb = doc.querySelectorAll('[type=hourly]');
        var humidityProb =  doc.getElementsByTagName("humidity");
        var cloudProb =  doc.getElementsByTagName("cloud-amount");

        // weatherBox = document.getElementById("weatherBox");
        var graph = document.createElement('div');
        graph.id = 'graph'+gCount;
        gCount++;
        graph.className = 'graph';

        var bar = document.createElement('div');
        bar.className = 'bar bar-precip bar-hidden';
        bar.setAttribute("style","height:"+"50px;")
        graph.appendChild(bar);

        var graph2 = document.createElement('div');
        graph2.id = 'graph'+gCount;
        gCount++;
        graph2.className = 'graph';
        var bar = document.createElement('div');
        bar.className = 'bar bar-precip bar-hidden';
        bar.setAttribute("style","height:"+"50px;")
        graph2.appendChild(bar);

        if(dCount == LAST_DAY+1){
            graph.className += ' graphLeft';
            graph2.className += ' graphLeft';
        }

        var time =  doc.getElementsByTagName("time-layout");
        for (var i = position; i < weatherProb[0].childNodes.length; i++) {
            var cur =  weatherProb[0].childNodes[i].childNodes[0];
            var curTime = time[0].childNodes[count].firstChild.nodeValue;
            var simpTime = curTime.substring(curTime.indexOf('T')+1, curTime.indexOf(':'));
            var bar = document.createElement('div');

            bar.className = 'bar bar-precip';
            bar.id = 'bar'+bCount;
            bCount++;
            barPrecipArray.push(bar);
            bar.setAttribute("style","height:"+(precipProb[0].childNodes[i].textContent/2)+"px;")
            graph.appendChild(bar);
            var fCast = '';
            if(cur != undefined){
                fCast = cur.getAttribute("coverage") + " " + cur.getAttribute("weather-type");
            }
            bar.setAttribute('title', precipProb[0].childNodes[i].textContent+"% " + fCast);

            var bar = document.createElement('div');
            bar.className = 'bar bar-temp';
            bar.id = 'bar'+bCount;
            bCount++;
            barTempArray.push(bar);
            bar.setAttribute("style","height:"+(tempProb[0].childNodes[i].textContent/2)+"px;")
            graph.appendChild(bar);
            bar.setAttribute('title', tempProb[0].childNodes[i].textContent+"F");

            var bar = document.createElement('div');
            bar.className = 'bar bar-humidity';
            bar.id = 'bar'+bCount;
            bCount++;
            barTempArray.push(bar);
            bar.setAttribute("style","height:"+(humidityProb[0].childNodes[i].textContent/2)+"px;")
            graph2.appendChild(bar);
            bar.setAttribute('title', humidityProb[0].childNodes[i].textContent+"%");

            var bar = document.createElement('div');
            bar.className = 'bar bar-cloud';
            bar.id = 'bar'+bCount;
            bCount++;
            barTempArray.push(bar);
            bar.setAttribute("style","height:"+(cloudProb[0].childNodes[i].textContent/2)+"px;")
            graph2.appendChild(bar);
            bar.setAttribute('title', cloudProb[0].childNodes[i].textContent+"%");

            count += 4;
            if(simpTime == 23) { position = i+1; startTime = 0; break;}

        }
        weatherBox.appendChild(graph);
        weatherBox.appendChild(graph2);

        var textt = document.createElement('div');
        textt.className = 'text';

        for(var i = 0; i <= 23; i++){
            var bar_text = document.createElement('div');
            bar_text.className = 'bar-text';
            var strN = i.toString();
            for(var j = 0; j < strN.length; j++){
                var hour = document.createElement('img');
                hour.src="assets/weather/nums_cure/"+ strN[j]+".gif";
                bar_text.appendChild(hour);
                textt.appendChild(bar_text);
            }
        }
        weatherBox.appendChild(textt);
    }
}

if((tLat != null) &&
   (tLong != null)) {
    LATITUDE = tLat;
    LONGITUDE = tLong;
    weather();
} else {
    // first, we try to get the location by HTML5 geolocation
    if ("geolocation" in navigator) {
	navigator.geolocation.getCurrentPosition(
	    function(position) {
		LATITUDE = position.coords.latitude;
		LONGITUDE = position.coords.longitude;
		window.localStorage.setItem("latitude", LATITUDE);
		window.localStorage.setItem("longitude", LONGITUDE);
		weather();
	    },
	    function (error) { // if not, just load the weather w/ default lat & long
		if (error.code == error.PERMISSION_DENIED) {
		    geocoder.geocode( { 'address': address}, function(results, status) {
			if (status == google.maps.GeocoderStatus.OK) {
			    LATITUDE = results[0].geometry.location.lat();
			    LONGITUDE = results[0].geometry.location.lng();
			    //alert("computed loc");
			    //window.onload = weather;
			    weather();
			}
		    });
		}
	    });
    } else {
	geocoder.geocode( { 'address': address}, function(results, status) {
	    if (status == google.maps.GeocoderStatus.OK) {
		LATITUDE = results[0].geometry.location.lat();
		LONGITUDE = results[0].geometry.location.lng();
		weather(); // if no geolocation, just load the weather stuff on pageload
	    }
	});
    }
}
