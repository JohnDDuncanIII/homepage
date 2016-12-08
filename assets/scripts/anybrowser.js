var num = Math.floor(Math.random() * (4));
var anybrowser = document.getElementById("anyBrowser");
anybrowser.src = "/~duncjo01/assets/images/banners/"+num+".gif";

if (window.localStorage) {
    if(localStorage.getItem("pat") == "bw") {
	anybrowser.src = anybrowser.src.substring(0, anybrowser.src.lastIndexOf('.'))+"_bw.gif"
    }
}

