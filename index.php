<!DOCTYPE html> 
<html>
  <head>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <title>John D. Duncan III's Home Page</title>
    <link rel="stylesheet" type="text/css" href="assets/no_aa.css" charset="utf-8">
    <link rel="stylesheet" type="text/css" href="assets/weather.css" charset="utf-8">
    <script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false"></script>
    <script type="text/javascript" src="assets/status.js"></script>
    <script type="text/javascript" src="assets/weather.js"></script>
    <script>
      function readfile() {
      var text = document.createTextNode("Hits: " + document.getElementById('iframe').contentDocument.body.firstChild.innerHTML);
      document.getElementById('footer-text').appendChild(text);
      }
    </script>
  </head>
  <body bgcolor="white" alink="#1b1b1b" link="#1b1b1b" text="#000000"
	vlink="purple"><!-- onload="timerONE=window.setTimeout('scrollit_r2l(100)',250);" -->

    
    <img src="assets/site.png"><br>
    <hr class="style0">

    <center>
    <div id="header-box" class="header-box">
      <div class="img-with-text" class="github">
	<a href="https://github.com/JohnDDuncanIII">
	  <img src="assets/gh.gif"/> <BR>
	  <img src="assets/header/git.png" /> 
	</a>
      </div>

      <div class="img-with-text">
	<a href="PlayingCards/">
	  <img src="assets/cards.gif"/> <BR>
	  <img src="assets/header/playing_cards.png" />
	</a>
      </div>

      <div class="img-with-text">
	<a href="MessageFaces/">
	  <img src="assets/xface.gif" alt="sometext" 
	       onmouseover="this.src='assets/face.gif';" 
	       onmouseout="this.src='assets/xface.gif';"/> <BR>
	  <img src="assets/header/message_faces.png" />
	</a>
      </div>

      <div class="img-with-text">

	<a href="GettysburgMonumentsMap/">
	  <img src="assets/Selected_new.png"/> <BR>
	   <img src="assets/header/gettysburg_monuments.png" />
	</a> 
      </div>

      <div class="img-with-text">
	<a href="Mozilla_NCSA_Mosaic">
	  <img src="assets/netscape-single.gif" 
	       onmouseover="this.src='assets/netscape.gif';" 
	       onmouseout="this.src='assets/netscape-single.gif';"/> <BR>
	  <img src="assets/header/mozilla_mosaic.png" />
	</a>
      </div>

      <div class="img-with-text">
	<a href="assets/rants.html">
	  <img src="assets/rants.gif"
	       onmouseover="this.src='assets/rants-hover.gif';" 
	       onmouseout="this.src='assets/rants.gif';"/> <BR>
	  <img src="assets/header/gruntle.png" />
	</a>
      </div>

      <div class="img-with-text" id="">
	<a href="assets/writings.html">
	  <img src="assets/writings-single.gif" 
	       onmouseover="this.src='assets/writings.gif';" 
	       onmouseout="this.src='assets/writings-single.gif';"/> <BR>
	  <img src="assets/header/writings.png" />
	</a>
      </div>
    </div>
</center>
<BR>
<div class="primary-content">
  <!-- National Radar <BR>
  (mouseover for watches & warnings): <BR> 
  (click for heat map) <BR> -->
  <img src="http://sirocco.accuweather.com/nx_mosaic_640x480_public/sir/inmaSIRUS_.gif" 
       onmouseover="this.src='http://sirocco.accuweather.com/adc_images2/english/current/svrwx/640x480/isvrwxus_.gif';" 
       onmouseout="this.src='http://sirocco.accuweather.com/nx_mosaic_640x480_public/sir/inmaSIRUS_.gif';"
       onclick="this.src='https://icons.wxug.com/data/640x480/2xus_st_anim.gif'"
       title="">
  <BR> 
  <img src="assets/legend.gif">
  <BR>
  <img src="assets/★ 💀WORLDSTAR★  DAVID FOSTER WALLACE SUCKER PUNCHES CHARLIE ROSE★ 💀WORLDSTAR★.png" title="David Foster Wallace sucker punches Charlie Rose"> 
</div>

<div class="primary-content" id="weatherBox"></div>

<!--
    <div>
      National Radar (weather.gov): <BR>
      <img src="http://radar.weather.gov/Conus/Loop/NatLoop.gif" height="400" width="850" 
	   onmouseover="this.src='http://forecast.weather.gov/wwamap/png/US.png'; this.height='500'; this.width='800'" 
	   onmouseout="this.src='http://radar.weather.gov/Conus/Loop/NatLoop.gif';this.height='400'; this.width='850'"
	   onclick="this.src='http://graphical.weather.gov/images/conus/T4_conus.png';this.height='424'; this.width='515'"
	   title=""> 
    </div>
    -->

<?php 
include("counter.php"); 
?>

<div id="footer-text" class="footer-text">
  <hr class="style0">
  <a href="http://www.gettysburg.edu/"> <img src="assets/old_seal_trans.png" height="48" width="48" align="right" title="alma mater">
    <a href="assets/about.html">about</a> <BR>
    © 2016 John D. Duncan, III 
    <a href="mailto:duncanjdiii@gmail.com?Subject=Hello%20again">duncanjdiii@gmail.com</a> <BR>
    <iframe id="iframe" src="countlog.txt" onload='readfile()' style='display:none'></iframe> 

</div>

  </body>
</html>
