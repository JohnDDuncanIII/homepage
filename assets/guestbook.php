<?php
ini_set(session.save_path, '/Accounts/turing/students/s17/duncjo01/session/');
session_save_path('/Accounts/turing/students/s17/duncjo01/session/'); session_start(); ?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Guestbook</title>
       	<script type="text/javascript" src="/~duncjo01/assets/scripts/border.js"></script>
        <link rel="icon" href="/~duncjo01/favicon.ico">
      	<link rel="stylesheet" type="text/css" href="/~duncjo01/assets/styles/style.css">
	<link rel="stylesheet" type="text/css" href="/~duncjo01/assets/scripts/fguestbook/style.css">
	<style>
	 @media only screen and (min-width:1075px) { html { max-width: none; } }
	</style>
	<script>
	 var aascii = ['?', '\"', ':', '', ';', '8', '/', '', '&', '0', '%', '', '\'', '!', '', '', '', '', '+', '\n', '1', '>', '', '', '.', '$', '', ',', '', '', '3', '*'];
	</script>
    </head>
    <body class="content">
	<hr style=";position: absolute; left: 32px;" width="1" size="505">
	<hr style=";position: absolute; right:32px;" width="1" size="505">
    <div id="guestbook-content">
	<center>
		 <!-- <img src="images/jolifond.gif"> -->
		 <div id="ichingcoins" style="background-image: url('images/iching/iching_background.gif')" title="i-ching"></div>
		 <h1 style="margin-top: 5px;margin-bottom: 5px;">Guestbook</h1> <hr />
	</center>
	<?php include 'scripts/fguestbook/index.php';?>
	<div id="footer">
	    <hr>
	    <a href="about.html">about</a> <BR>
	    You are visitor number <a href="https://stuff.mit.edu/doc/counter-howto.html"><img src="http://www.mit.edu/cgi/counter/jduncan" style="vertical-align:middle"></a> <BR>
	    <i> <a href="mailto:duncanjdiii@gmail.com?Subject=I would like to speak to your manager">  © 2016 John D. Duncan, III <br> <img src="/~duncjo01/assets/images/mail.gif"></a> <BR> </i>
            <a href="http://vanilla-js.com/"> <img src="http://vanilla-js.com/assets/button.png"></a>
            <br>
            <a href="https://www.anybrowser.org/campaign/index.html"> <img id="anyBrowser"></a>
	</div>
        <script type="text/javascript" src="/~duncjo01/assets/scripts/anybrowser.js"></script>
	</div>
    </body>
</html>

