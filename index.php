<!DOCTYPE html> 
<html>
  <head>
    <meta http-equiv="content-type" content="text/html;
					     charset=UTF-8">
    <title>John D. Duncan III's Home Page</title>
    
    <style type ="text/css" >
      .footer-text img{ 
      /*position: fixed;*/   
      text-align: center;    
      bottom: 5px; 
      right:5px;
      z-index:1;
      image-rendering: auto !important;
      }  
      .footer-text{
     /* position: fixed;*/ 
      text-align: center;    
      bottom: 5px;
      width:100%;
      z-index:0;
      padding-bottom: 5px;
      
      }
      .img-with-text-weather-block {
      /*display:inline-block;*/
      text-align: center;
      vertical-align: top;
      display: block; 
      margin-right:2px;
      }
      .img-with-text-weather-table {
      /*display:inline-block;*/
      text-align: center;
      vertical-align: top;
      display: table-cell; /* ensure that this element stretches to fill parent*/
      margin-right:2px;
      margin-bottom:2px;
      }
      .img-with-text-weather-letter {
      text-align: center;
      margin-right:2px;
      margin-bottom:2px;
      }
      .img-with-text {
      /*display:inline-block;*/
      text-align: center;
      vertical-align: top;
      padding-left:8px;
      padding-right:8px;
      margin-right: -4px;
      border-right: 1px solid #2a2a2a;
      display: table-cell; /* ensure that this element stretches to fill parent*/
      }
      .img-with-text:last-child {
      border-right:none;
       margin-right: 0px;
      }
      .img-with-text:hover {
      /*background:#f7d7d7;*/
      background-color:rgba(245, 215, 215, 0.6);
     
      }
      .img-with-text:active {
      /*background: #A1C0A3;*/
      background-color:rgba(161, 192, 163, 0.6);
      }
      .header-box a:hover, .header-box a:visited, 
      .header-box a:link, .header-box a:active 
      /* hack to disable a pesky webkit bug*/
      {
      text-decoration: none;
      }
      .header-box {
      display: inline-block;
      text-align:center;
      border-bottom: 1px solid #2a2a2a;
      border-left: 1px solid #2a2a2a;
      border-right: 1px solid #2a2a2a;
      margin-top:-8px;
      padding-top: 10px;
      padding-bottom: 5px;
      background-color: #A1C0A3;
      background-image: url(data:image/png;base64,R0lGODdhAwADAIACAPn5+f39/SwAAAAAAwADAAACA0SMVwA7);
      /*font-size:18px;
      font-family: eWorldTight_18;*/ /* hopefully this will work in firefox some day*/
      }
     .header-box:after { /* set page bg to base64 gif*/
      background-image: url(data:image/gif;base64,R0lGODdhAwADAIACAPn5+f39/SwAAAAAAwADAAACA0RuWAA7);
      content : "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity : 0.9;
      z-index: -1;
      }
      hr.style0 {
      border: 0; 
      height: 1px; 
      background: #333; 
      background-image: linear-gradient(to right, #ccc, #333, #ccc);
      }
      .primary-content {
      text-align: center;
      vertical-align: top;
      padding-left:8px;
      padding-right:8px;
      margin-right: -4px;
      border-right: 1px solid #2a2a2a;
      display: table-cell; /* ensure that this element stretches to fill parent*/
      }
    </style>

    <link rel="stylesheet" type="text/css" href="assets/no_aa.css" charset="utf-8">
    <script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false"></script>
    <script type="text/javascript" src="assets/weather.js"></script>
    <script>
      function readfile() {
      var text = document.createTextNode("Hits: " + document.getElementById('iframe').contentDocument.body.firstChild.innerHTML);
      document.getElementById('footer-text').appendChild(text);
      }
    </script>
    <script language="JavaScript">

      <!-- Beginning of JavaScript Applet -------------------

	   /* Copyright (C)1996 Web Integration Systems, Inc. DBA Websys, Inc.

	   All Rights Reserved.

	   This applet can be re-used or modified, if credit is given in 
	   the source code.

	   We will not be held responsible for any unwanted effects due to the 
	   usage of this applet or any derivative.  No warrantees for usability 
	   for any specific application are given or implied.

	   Chris Skinner, January 30th, 1996.
	   */

	   function scrollit_r2l(seed)
	   {
	   var m1  = "Welcome to my webpage!";
	   var m2  = " Feel free to a look around, ";
	   var m3  = " and maybe stay awhile";
           var msg = m1 + m2 + m3;
           var out = " ";
           var c   = 1;

           if (seed > 100) {
           seed--;
           var cmd="scrollit_r2l(" + seed + ")";
           timerTwo=window.setTimeout(cmd,100);
           }
           else if (seed <= 100 && seed > 0) {
           for (c = 0 ; c < seed ; c++) {
           out += " ";
           }
           out += msg;
           seed--;
           var cmd = "scrollit_r2l(" + seed + ")";
           window.status = out;
           timerTwo = window.setTimeout(cmd,100);
           }
           else if (seed <= 0) {
           if (-seed < msg.length) {
           out += msg.substring(-seed, msg.length);
           seed--;
           var cmd = "scrollit_r2l(" + seed + ")";
           window.status = out;
           timerTwo = window.setTimeout(cmd, 100);
           }
           else {
           window.status=" ";
           timerTwo=window.setTimeout("scrollit_r2l(100)",75);
           }
           }
	   }
	   // -- End of JavaScript code -------------- -->
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
    © 2016 John D. Duncan, III <duncanjdiii@gmail.com> <BR>
       <iframe id="iframe" src="countlog.txt" onload='readfile()' style='display:none'></iframe> 
</div>

  </body>
</html>
