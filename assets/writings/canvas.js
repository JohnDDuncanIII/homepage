var txt = 'Hello background';
var c=document.getElementById("canvas");
var ctx=c.getContext("2d");

ctx.beginPath();
ctx.arc(100,75,70,0,2*Math.PI);
ctx.stroke();

ctx.fillStyle = "#3ca928";
ctx.fill();

ctx.textAlign = 'center';
ctx.textBaseline = 'middle';

ctx.font = "bold 16px Arial";
ctx.fillStyle = "white";
ctx.fillText("Environmental", 100, 75);
//ctx.addHitRegion({id: "environment"});

// next one
ctx.beginPath();
ctx.arc(230,125,70,0,2*Math.PI);
ctx.stroke();

ctx.fillStyle = "#0070b9";
ctx.fill();

ctx.textAlign = 'center';
ctx.textBaseline = 'middle';

ctx.font = "bold 16px Arial";
ctx.fillStyle = "white";
ctx.fillText("Occupational", 230, 125);
//ctx.addHitRegion({id: "occupation"});

//ctx.strokeStyle = 'white';
//ctx.strokeText('Hello World!', 100,75);

/*c.onclick = function (event)
  {
  if (event.region) {
  alert('You clicked ' + event.region);
  }
  }*/

c.addEventListener("click", function(e) {
    var r = this.getBoundingClientRect(),
    x = e.clientX - r.left,
    y = e.clientY - r.top;
    
    // normally you would loop through your paths:
    generatePath();
    if (ctx.isPointInPath(x, y)) alert("Hit!");
})

function generatePath() {
    ctx.beginPath();          // reset path
    ctx.rect(100,75,70,0);  // add region to draw/test
}
