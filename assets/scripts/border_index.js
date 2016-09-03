//var fileName = location.href.split("/").slice(-1); 
var lev = document.getElementById("lever");

if (window.localStorage) {
    if(localStorage.getItem("pat") == "clr") {
        lev.src = "assets/images/index/lever_down.gif";
        var num = Math.floor(Math.random() * (307)+1);
        document.body.style.background = "#fff url(/~duncjo01/assets/images/patterns/"+num+".gif)";
    } else {
        lev.src = "assets/images/index/lever_up.gif";
        var num = Math.floor(Math.random() * (206)+1);
        document.body.style.background = "#fff url(/~duncjo01/assets/images/patterns_bw/"+num+".gif)";
    }
}

function lever() {
    if(lev.src.indexOf("up") !== -1) {
        lev.src = "assets/images/index/lever_down.gif";
        if (window.localStorage) {
            localStorage.setItem("pat", "clr");
            var num = Math.floor(Math.random() * (307)+1);
            document.body.style.background = "#fff url(/~duncjo01/assets/images/patterns/"+num+".gif)";
        }
    } else {
        lev.src = "assets/images/index/lever_up.gif";
        if (window.localStorage) {
            localStorage.setItem("pat", "bw");
            var num = Math.floor(Math.random() * (206)+1);
            document.body.style.background = "#fff url(/~duncjo01/assets/images/patterns_bw/"+num+".gif)";
        }
    }
}
lev.onclick = lever;

