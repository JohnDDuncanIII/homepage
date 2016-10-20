var NUM_CIRCLES = 8;
var DIV_ARRAY = [];
var div = 360 / NUM_CIRCLES;
var radius = 150;
var parentdiv = document.getElementById('parentdiv');
var offsetToParentCenter = parseInt(parentdiv.offsetWidth / 2);  //assumes parent is square
var offsetToChildCenter = 50;
var totalOffset = offsetToParentCenter - offsetToChildCenter;


for (var i = 1; i <= NUM_CIRCLES; ++i){
    var childdiv = document.createElement('div');
    childdiv.className = 'div2 circleBase type3';
    childdiv.style.position = 'absolute';
    var y = Math.sin((div * i) * (Math.PI / 180)) * radius;
    var x = Math.cos((div * i) * (Math.PI / 180)) * radius;
    childdiv.style.top = (y + totalOffset).toString() + "px";
    childdiv.style.left = (x + totalOffset).toString() + "px";
    parentdiv.appendChild(childdiv);
    DIV_ARRAY.push(childdiv);
}
DIV_ARRAY[0].className += " purple";
var divText = document.createElement('div');
divText.className = 'divText';
divText.innerHTML = 'Physical';
DIV_ARRAY[0].appendChild(divText);

DIV_ARRAY[1].className += " green";
var divText = document.createElement('div');
divText.className = 'divText';
divText.innerHTML = 'Environmental';
DIV_ARRAY[1].appendChild(divText);

DIV_ARRAY[2].className += " brown";
var divText = document.createElement('div');
divText.className = 'divText';
divText.innerHTML = 'Financial';
DIV_ARRAY[2].appendChild(divText);

DIV_ARRAY[3].className += " blue";
var divText = document.createElement('div');
divText.className = 'divText';
divText.innerHTML = 'Occupational';
DIV_ARRAY[3].appendChild(divText);

DIV_ARRAY[4].className += " orange";
var divText = document.createElement('div');
divText.className = 'divText';
divText.innerHTML = 'Social';
DIV_ARRAY[4].appendChild(divText);

DIV_ARRAY[5].className += " lightbrown";
var divText = document.createElement('div');
divText.className = 'divText';
divText.innerHTML = 'Emotional';
DIV_ARRAY[5].appendChild(divText);

DIV_ARRAY[6].className += " red";
var divText = document.createElement('div');
divText.className = 'divText';
divText.innerHTML = 'Spiritual';
DIV_ARRAY[6].appendChild(divText);

DIV_ARRAY[7].className += " darkblue";
var divText = document.createElement('div');
divText.className = 'divText';
divText.innerHTML = 'Intellectual';
DIV_ARRAY[7].appendChild(divText);
