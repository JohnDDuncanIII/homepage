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
	 @media only screen and (min-width:1075px) {
	     html {
		 max-width: none;
	     }
	 }
	</style>
	<script>
	 /*var ahex = new Array(64);
	 ahex[1]='111111';ahex[2]='000000';ahex[3]='100010';ahex[4]='010001';
	 ahex[5]='111010';ahex[6]='010111';ahex[7]='010000';ahex[8]='000010';
	 ahex[9]='111011';ahex[10]='110111';ahex[11]='111000';ahex[12]='000111';
	 ahex[13]='101111';ahex[14]='111101';ahex[15]='001000';ahex[16]='000100';
	 ahex[17]='100110';ahex[18]='011001';ahex[19]='110000';ahex[20]='000011';
	 ahex[21]='100101';ahex[22]='101001';ahex[23]='000001';ahex[24]='100000';
	 ahex[25]='100111';ahex[26]='111001';ahex[27]='100001';ahex[28]='011110';
	 ahex[29]='010010';ahex[30]='101101';ahex[31]='001110';ahex[32]='011100';
	 ahex[33]='001111';ahex[34]='111100';ahex[35]='000101';ahex[36]='101000';
	 ahex[37]='101011';ahex[38]='110101';ahex[39]='001010';ahex[40]='010100';
	 ahex[41]='110001';ahex[42]='100011';ahex[43]='111110';ahex[44]='011111';
	 ahex[45]='000110';ahex[46]='011000';ahex[47]='010110';ahex[48]='011010';
	 ahex[49]='101110';ahex[50]='011101';ahex[51]='100100';ahex[52]='001001';
	 ahex[53]='001011';ahex[54]='110100';ahex[55]='101100';ahex[56]='001101';
	 ahex[57]='011011';ahex[58]='110110';ahex[59]='010011';ahex[60]='110010';
	 ahex[61]='110011';ahex[62]='001100';ahex[63]='101010';ahex[64]='010101';*/
	 var aascii = ['?', '\"', ':', '', ';', '8', '/', '', '&', '0', '%', '', '\'', '!', '', '', '', '', '+', '\n', '1', '>', '', '', '.', '$', '', ',', '', '', '3', '*'];
	 //var n = (String.charCodeAt(aascii[aascii.length-2]) >>> 0).toString(2);
	 //n="000000".substr(n.length)+n;
	 /*var origNum = 2;
	 if(origNum%2==0){origNum--;}
	 var inputNum = Math.round((origNum-1)/2);
	 origNum++;
	 var n = (String.charCodeAt(aascii[inputNum]));
	 var strBin='';
	 for (i = 0; i <= 5; i++) {
	    if(origNum%2!=0){
		strBin += String((n>>i)&1);
	    } else {
		strBin += String(((n>>5)%2==n%2)&((n>>4)%2==(n>>1)%2)&((n>>3)%2==(n>>2)%2)?1^(n>>i)&1:(n>>(5-i))&1);
	    }
	 }*/
	 //alert(strBin);
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

