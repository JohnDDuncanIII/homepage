if (!String.prototype.includes) {
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
map["Slight Chance Sprinkles"] = "drizzly";
map["Isolated Showers and Breezy"] = "rainywindy";
map["Breezy. Isolated Showers"] = "rainywindy";
map["Breezy. Chance T-storms"] = "maybestormywindy";
map["T-storms Likely and Breezy"] = "maybestormywindy";
map["Heavy Rain and Patchy Fog"] = "heavyrainyfoggy";
map["Sprinkles"] = "drizzly";
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
var LATITUDE = 0.0;
var LONGITUDE = 0.0;
var geocoder = new google.maps.Geocoder();
var address = "Truth or Consequences";
var loc = location.toString();
var tLat = window.localStorage.getItem("latitude");
var tLong = window.localStorage.getItem("longitude");

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
    toAdd.className = "style0";
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

    // add "Today" image
    var toAdd = document.createElement("img");
    toAdd.setAttribute('id', "day");
    //toAdd.className = "img-with-text-weather";
    toAdd.setAttribute('src', "assets/weather/day/today/face.gif");
    weatherBox.appendChild(toAdd);

    // this requests the file and executes a 
    //    callback with the parsed result once it is available
    fetchJSONFile('http://forecast.weather.gov/MapClick.php?lat='+
		  LATITUDE+'&lon='+
		  LONGITUDE+'&FcstType=json', 
		  function(data) {
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
		     
		      if(data.time.startPeriodName[0]=="Tonight" ||
			data.time.startPeriodName[1]=="Tonight") {
			  // add "Tonight" image
			  var toAdd = document.createElement("img");
			  toAdd.setAttribute('id', "day");
			  //toAdd.className = "img-with-text-weather";
			  toAdd.setAttribute('src', "assets/weather/day/tonight/face.gif");
			  weatherBox.appendChild(toAdd);
			  var br = document.createElement("br");
			  weatherBox.appendChild(br);
			  
			  tonight = true;
			  helper(tempArray[j], precipArray[j], forecastArray[j], false, text[j]);
			  j++; 
		      }
		     	      
		      for(j; j < tempArray.length; j++) {
			  if(j==1 && tonight || (j==2 && tonight) && (afternoon || today)) {
			      var toAdd = document.createElement("hr");
			      toAdd.className = "style0";
			      weatherBox.appendChild(toAdd);

			      var toAdd = document.createElement("div");
			      toAdd.innerHTML = '(this space left blank)';
			      toAdd.setAttribute("style", 'visibility: hidden;');
			      weatherBox.appendChild(toAdd);
			      counter++;
			      if(counter==weekday.length) { counter =0;}
			      n = weekday[counter];
			  }
			
			  helper(tempArray[j], precipArray[j], forecastArray[j], showDate, text[j]);
			  
			  if( (j == 0 && (!afternoon||!today)) || 
			      (j==1 && (afternoon||today))) {
			      var toAdd = document.createElement("hr");
			      toAdd.className = "style0";
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
				      toAdd.className = "style0";
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
				      toAdd.className = "style0";
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
		      toAdd.className = "style0";
		      weatherBox.appendChild(toAdd);
		  });
}
function helper(curTemp, precip, forecast, showDate, text) {
    var weatherPath = 0;
    var tableBox = document.createElement("div");
    tableBox.className = "img-with-text-weather-table";
   
    var toAdd = document.createElement("img");
    var dayBox = document.createElement("div");
    dayBox.className =  "img-with-text-weather-table";
    toAdd.setAttribute('id', "day");
    toAdd.className = "img-with-text-weather-table";
    toAdd.setAttribute('src', "assets/weather/day/"+n+"/face.gif");
    if(!showDate) {
	//if(n==weekday[d.getDay()] && !hasShownMoon) {
	text = text.toLowerCase();
	if(text.includes("cloudy")) {
	    toAdd.setAttribute('src', "assets/weather/sky/partlymoonny/face.gif");
	} else {
	    toAdd.setAttribute('src', "assets/weather/sky/moonny/face.gif");
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
	if(curTemp == "M" || curTemp =="" || curTemp ==null) {
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

    if(curTemp != 'M' && curTemp != "" && curTemp != null) {
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
    }
   
    var thermBox = document.createElement("div");
    thermBox.className = "img-with-text-weather-block";
    thermBox.setAttribute('id', "thermBox");
    var toAdd = document.createElement("img");
    toAdd.setAttribute('id', "therm");
    toAdd.className = "img-with-text-weather-block";
    if(curTemp == "M" || curTemp =="" || curTemp ==null) {
	toAdd.setAttribute('src', "assets/weather/MISC/question/face.gif");
    } else {
	toAdd.setAttribute('src', "assets/weather/temp2/" + weatherPath + "/face.gif");
    }
    if(firstRun) {
	//document.querySelectorAll("link[rel*='icon'")[0].href = 'assets/weather/temp/' + weatherPath + '/face.gif';
	var link = document.createElement('link');
	link.type = 'image/x-icon';
	link.rel = 'icon';
	link.href = ('assets/weather/temp/' + weatherPath + '/face.gif');
	document.getElementsByTagName('head')[0].appendChild(link);	
	firstRun = false;
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
	toAdd.setAttribute('id', "picon");
	//toAdd.setAttribute('title', text);
	toAdd.setAttribute('title', firstForecast);
	toAdd.className = "img-with-text-weather-table";
	if(map[firstForecast] == true) {
	    toAdd.setAttribute('src', "assets/weather/MISC/question/face.gif");
	} else {
	    toAdd.setAttribute('src', "assets/weather/sky/"+map[firstForecast]+"/face.gif");
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
	toAdd.setAttribute('id', "picon");
	//toAdd.setAttribute('title', text);
	toAdd.setAttribute('title', secondForecast);
	toAdd.className = "img-with-text-weather-table";
	if(map[secondForecast] == true) {
	    toAdd.setAttribute('src', "assets/weather/MISC/question/face.gif");
	} else {
	    toAdd.setAttribute('src', "assets/weather/sky/"+map[secondForecast]+"/face.gif");
	}
	tableBox.appendChild(toAdd);
	weatherBox.appendChild(tableBox);
    } else {
	var toAdd = document.createElement("img");
	toAdd.setAttribute('id', "picon");
	//toAdd.setAttribute('title', text);
	toAdd.setAttribute('title', forecast);
	toAdd.className = "img-with-text-weather-table";
	
	if(map[forecast] == true) {
	    toAdd.setAttribute('src', "assets/weather/MISC/question/face.gif");
	} else {
	    toAdd.setAttribute('src', "assets/weather/sky/"+map[forecast]+"/face.gif");
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
