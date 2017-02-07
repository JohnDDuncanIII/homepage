var colors = ["#E0E8FF", "#FDC", "#EEE", "#f7e0ff", "#e0fdff", "#ffc"];
var NUM_PATS_BW = 430;
var NUM_PATS= 117;

if (window.localStorage) {
    if(!localStorage.getItem("pat")) {
	localStorage.setItem("pat", "clr");
    }
    if(localStorage.getItem("pat") == "bw") {
        var num = Math.floor(Math.random() * (NUM_PATS_BW)+1);
        document.documentElement.style.background = "url(/~duncjo01/assets/images/patterns_bw/"+num+".gif)";
        document.addEventListener('click', function(event) {
            if(event.target.tagName === "HTML"){
                num = Math.floor(Math.random() * (NUM_PATS_BW)+1);
                document.documentElement.style.background = "url(/~duncjo01/assets/images/patterns_bw/"+num+".gif)";
            }
        });
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
    } else if (localStorage.getItem("pat") == "clr"){
        var num = Math.floor(Math.random() * (NUM_PATS)+1);
        document.documentElement.style.background = "url(/~duncjo01/assets/images/patterns/"+num+".gif)";
        document.addEventListener('click', function(event) {
            if(event.target.tagName === "HTML"){
                num = Math.floor(Math.random() * (NUM_PATS)+1);
                document.documentElement.style.background = "url(/~duncjo01/assets/images/patterns/"+num+".gif)";
            }
        });
    }
    else if (localStorage.getItem("pat") == "none") {
        /*document.documentElement.style.background = colors[Math.floor(Math.random()*colors.length)];
        document.addEventListener('click', function(event) {
            if(event.target.tagName === "HTML"){
                document.documentElement.style.background = colors[Math.floor(Math.random()*colors.length)];
		}
		});
	*/
	var num = Math.floor(Math.random() * (13)+1);
        document.documentElement.style.background = "url(/~duncjo01/assets/images/patterns/anim/"+num+".gif)";
        document.addEventListener('click', function(event) {
            if(event.target.tagName === "HTML"){
                num = Math.floor(Math.random() * (13)+1);
                document.documentElement.style.background = "url(/~duncjo01/assets/images/patterns/anim/"+num+".gif)";
            }
        });
    }
} else {
    var num = Math.floor(Math.random() * (148)+1);
    document.documentElement.style.background = "url(/~duncjo01/assets/images/patterns/"+num+".gif)";
}
