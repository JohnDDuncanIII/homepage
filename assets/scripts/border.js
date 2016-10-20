if (window.localStorage) {
    if(localStorage.getItem("pat") == "bw") {
        var num = Math.floor(Math.random() * (392)+1);
        document.body.style.background = "#fff url(/~duncjo01/assets/images/patterns_bw/"+num+".gif)";
	var mail = document.getElementById("mail");
	if(mail){
	    mail.src = mail.src.substring(0, mail.src.lastIndexOf('.'))+"_bw.gif"
	    var vanilla = document.getElementById("vanilla");
	    vanilla.src = vanilla.src.substring(0, vanilla.src.lastIndexOf('.'))+"_bw.gif"
	}
        var home = document.getElementById("home");
        if(home) {
            home.src = "/~duncjo01/assets/images/house.gif";
        }
    } else {
        var num = Math.floor(Math.random() * (148)+1);
        document.body.style.background = "#fff url(/~duncjo01/assets/images/patterns/"+num+".gif)";
    }
} else {
    var num = Math.floor(Math.random() * (148)+1);
    document.body.style.background = "#fff url(/~duncjo01/assets/images/patterns/"+num+".gif)";
}
