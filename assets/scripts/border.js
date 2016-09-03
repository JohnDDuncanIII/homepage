if (window.localStorage) {
    if(localStorage.getItem("pat") == "clr") {
        var num = Math.floor(Math.random() * (307)+1);
        document.body.style.background = "#fff url(/~duncjo01/assets/images/patterns/"+num+".gif)";
    } else {
        var num = Math.floor(Math.random() * (206)+1);
        document.body.style.background = "#fff url(/~duncjo01/assets/images/patterns_bw/"+num+".gif)";
    }
} else {
    var num = Math.floor(Math.random() * (307)+1);
    document.body.style.background = "#fff url(/~duncjo01/assets/images/patterns/"+num+".gif)";
}
