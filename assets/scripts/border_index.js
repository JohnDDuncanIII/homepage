//var fileName = location.href.split("/").slice(-1);
var lev = document.getElementById("lever");
var www = document.getElementById("www");
var messagefaces = document.getElementById("messagefaces");
var browsers = document.getElementById("browsers");
var clipart = document.getElementById("clipart");
var writings = document.getElementById("writings");
var guestbook = document.getElementById("guestbook");
var headerVals = [document.getElementById("cards"),
                  document.getElementById("books"), document.getElementById("faces"),
                  document.getElementById("portfolio"), document.getElementById("weather"),
                  document.getElementById("berlinblue"), browsers, clipart, writings,
                  document.getElementById("soundcloud"), document.getElementById("mozilla"),
                  document.getElementById("facebook"), document.getElementById("twitter"),
                  document.getElementById("youtube"), document.getElementById("guestbook")];
var images = document.getElementById("images");
var mail = document.getElementById("mail");
var vanilla = document.getElementById("vanilla");
var seal = document.getElementById("seal");
var anybrowser = document.getElementById("anyBrowser");

var NUM_PATS = 148;
var NUM_PATS_BW = 430;

var prev_action = '';

var bodyStyle = window.getComputedStyle(document.documentElement, null);
var colors = ["#E0E8FF", "#FDC", "#EEE", "#f7e0ff", "#e0fdff", "#ffc"];
//bgColor = bodyStyle.backgroundColor;

function blw() {
    mail.src = mail.src.substring(0, mail.src.lastIndexOf('.'))+"_bw.gif"
    vanilla.src = vanilla.src.substring(0, vanilla.src.lastIndexOf('.'))+"_bw.gif";
    seal.src = seal.src.substring(0, seal.src.lastIndexOf('.'))+"_bw.gif"
    images.classList.add('content-bw-image');
    www.src="assets/images/index/www_std.gif";
    messagefaces.onmouseover=function() {this.src='assets/images/header/mbox_bw.gif'}
    messagefaces.onclick= function() {this.src='assets/images/header/mbox-hover_bw.gif'; return this.href;}
    browsers.onmouseover= function() {this.src='assets/images/header/netscape-hover_bw.gif';}
    browsers.onmouseout=function() {this.src='assets/images/header/netscape_bw.gif';}
    clipart.onmouseover= function() {this.src='assets/images/header/clip-hover_bw.gif';}
    clipart.onmouseout=function() {this.src='assets/images/header/clip_bw.gif';}
    writings.onmouseover= function() {this.src='assets/images/header/writings-hover_bw.gif';}
    writings.onmouseout=function() {this.src='assets/images/header/writings_bw.gif';}
    guestbook.onmouseover= function() {this.src='assets/images/header/guestbook-hover_bw.gif';}
    guestbook.onmouseout=function() {this.src='assets/images/header/guestbook_bw.gif';}

    for(var i = 0; i < headerVals.length; i++) {
        headerVals[i].src = headerVals[i].src.substring(0, headerVals[i].src.lastIndexOf('.'))+"_bw.gif";
    }
}

function clr() {
    mail.src = mail.src.substring(0, mail.src.lastIndexOf('_bw.gif'))+".gif";
    vanilla.src = vanilla.src.substring(0, vanilla.src.lastIndexOf('_bw.gif'))+".gif";
    seal.src = seal.src.substring(0, seal.src.lastIndexOf('_bw.gif'))+".gif";
    //anybrowser.src = anybrowser.src.substring(0, anybrowser.src.lastIndexOf('_bw.gif'))+".gif";
    images.classList.remove('content-bw-image');
    www.src="assets/images/index/www_color.gif";
    messagefaces.onmouseover=function() {this.src='assets/images/header/mbox.gif'}
    messagefaces.onclick= function() {this.src='assets/images/header/mbox-hover.gif'; return this.href;}
    browsers.onmouseover= function() {this.src='assets/images/header/netscape-hover.gif';}
    browsers.onmouseout=function() {this.src='assets/images/header/netscape.gif';}
    clipart.onmouseover= function() {this.src='assets/images/header/clip-hover.gif';}
    clipart.onmouseout=function() {this.src='assets/images/header/clip.gif';}
    writings.onmouseover= function() {this.src='assets/images/header/writings-hover.gif';}
    writings.onmouseout=function() {this.src='assets/images/header/writings.gif';}
    guestbook.onmouseover= function() {this.src='assets/images/header/guestbook-hover.gif';}
    guestbook.onmouseout=function() {this.src='assets/images/header/guestbook.gif';}

    for(var i = 0; i < headerVals.length; i++) {
        headerVals[i].src = headerVals[i].src.substring(0, headerVals[i].src.lastIndexOf('_bw.gif'))+".gif";
    }
}

if (window.localStorage) {
    if(localStorage.getItem("pat") == "bw") {
        lev.src = "assets/images/index/lever_up.gif";
        blw();
        var num = Math.floor(Math.random() * (NUM_PATS_BW)+1);
        document.documentElement.style.background = "url(/~duncjo01/assets/images/patterns_bw/"+num+".gif)";
        document.addEventListener('click', function(event) {
            if(event.target.tagName === "HTML"){
                num = Math.floor(Math.random() * (NUM_PATS_BW)+1);
                document.documentElement.style.background = "url(/~duncjo01/assets/images/patterns_bw/"+num+".gif)";
            }
        });
    } else if (localStorage.getItem("pat") == "clr"){
        lev.src = "assets/images/index/lever_down.gif";
        var num = Math.floor(Math.random() * (NUM_PATS)+1);
        document.documentElement.style.background = "url(/~duncjo01/assets/images/patterns/"+num+".gif)";
        document.addEventListener('click', function(event) {
            if(event.target.tagName === "HTML"){
                num = Math.floor(Math.random() * (NUM_PATS)+1);
                document.documentElement.style.background = "url(/~duncjo01/assets/images/patterns/"+num+".gif)"
            }
        });
    } else if (localStorage.getItem("pat") == "none") {
        lev.src = "assets/images/index/lever_middle.gif";
        prev_action = "down";
        document.documentElement.style.background = colors[Math.floor(Math.random()*colors.length)];
        document.addEventListener('click', function(event) {
            if(event.target.tagName === "HTML"){
                document.documentElement.style.background = colors[Math.floor(Math.random()*colors.length)];
            }
        });
    }
} else {
    var num = Math.floor(Math.random() * (NUM_PATS)+1);
    document.documentElement.style.background = "url(/~duncjo01/assets/images/patterns/"+num+".gif)";
    document.addEventListener('click', function(event) {
        if(event.target.tagName === "HTML"){
            document.documentElement.style.background = "url(/~duncjo01/assets/images/patterns/"+num+".gif)"
        }
    });
}

function lever() {
    if(lev.src.indexOf("up") !== -1) {
        prev_action = "up";
        lev.src = "assets/images/index/lever_middle.gif";
        document.documentElement.style.background = colors[Math.floor(Math.random()*colors.length)];
        document.addEventListener('click', function(event) {
            if(event.target.tagName === "HTML"){
                document.documentElement.style.background = colors[Math.floor(Math.random()*colors.length)];
            }
        });
        if (window.localStorage) {
            localStorage.setItem("pat", "none");
        }
    } else if(lev.src.indexOf("down") !== -1) {
        prev_action = "down";
        lev.src = "assets/images/index/lever_middle.gif";
        document.documentElement.style.background = colors[Math.floor(Math.random()*colors.length)];
        document.addEventListener('click', function(event) {
            if(event.target.tagName === "HTML"){
                document.documentElement.style.background = colors[Math.floor(Math.random()*colors.length)];
            }
        });
        if (window.localStorage) {
            localStorage.setItem("pat", "none");
        }
    }
    else if(lev.src.indexOf("middle") !== -1){
        if(prev_action == "up") {
            lev.src = "assets/images/index/lever_down.gif";
            clr();

            if (window.localStorage) {
                localStorage.setItem("pat", "clr");
                var num = Math.floor(Math.random() * (NUM_PATS)+1);
                document.documentElement.style.background = "url(/~duncjo01/assets/images/patterns/"+num+".gif)";
                document.addEventListener('click', function(event) {
                    if(event.target.tagName === "HTML"){
                        num = Math.floor(Math.random() * (NUM_PATS)+1);
                        document.documentElement.style.background = "url(/~duncjo01/assets/images/patterns/"+num+".gif)";
                    }
                });
            }
        } else if (prev_action == "down"){
            lev.src = "assets/images/index/lever_up.gif";
            blw();

            if (window.localStorage) {
                localStorage.setItem("pat", "bw");
                var num = Math.floor(Math.random() * (NUM_PATS_BW)+1);
                document.documentElement.style.background = "url(/~duncjo01/assets/images/patterns_bw/"+num+".gif)";
                document.addEventListener('click', function(event) {
                    if(event.target.tagName === "HTML"){
                        num = Math.floor(Math.random() * (NUM_PATS_BW)+1);
                        document.documentElement.style.background = "url(/~duncjo01/assets/images/patterns_bw/"+num+".gif)";
                    }
                });
            }
        }
    }
    var num = Math.floor(Math.random() * (4));
    var anybrowser = document.getElementById("anyBrowser");
    anybrowser.src = "/~duncjo01/assets/images/banners/"+num+".gif";

    if (window.localStorage) {
	    if(localStorage.getItem("pat") == "bw") {
	        anybrowser.src = anybrowser.src.substring(0, anybrowser.src.lastIndexOf('.'))+"_bw.gif"
	    }
    }
}
lev.onclick = lever;
