var NUM_CIRCLES = 8;
var DIV_ARRAY = [];
var div = 360 / NUM_CIRCLES;
var radius = 150;
var parentdiv = document.getElementById('parentdiv');
var offsetToParentCenter = parseInt(parentdiv.offsetWidth / 2);  //assumes parent is square
var offsetToChildCenter = 50;
var totalOffset = offsetToParentCenter - offsetToChildCenter;
var tempName = "";


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
    childdiv.onclick = function() {
	this.classList.add("type3click");
	this.childNodes[0].innerHTML = 'data about user for ' + tempName;
	if(tempName == "Social"){
	    this.childNodes[0].innerHTML = tempName + " - Developing a sense of connection, belonging, and a well-developed support system.";
	}
	if(tempName == "Financial"){
	     this.childNodes[0].innerHTML = tempName + " - Satisfaction with current and future financial situations.";
	}
	if(tempName == "Spiritual"){
	    this.childNodes[0].innerHTML = tempName + " - Developing a sense of connection, belonging, and a well-developed support system.";
	}
	if(tempName == "Intellectual"){
	     this.childNodes[0].innerHTML = tempName + " - Recognizing creative abilities and finding ways to expand knowledge and skills.";
	}
	if(tempName == "Physical"){
	    this.childNodes[0].innerHTML = tempName + " - Recognizing the need for physical activity, healthy foods, and sleep.";
	}
	if(tempName == "Environmental"){
	     this.childNodes[0].innerHTML = tempName + " - Good health by occupying pleasant, stimulating environments that support wellbeing.";
	}
	if(tempName == "Emotional"){
	    this.childNodes[0].innerHTML = tempName + " - Coping effectively with life and creating satisfying relationships.";
	}
	if(tempName == "Occupational"){
	     this.childNodes[0].innerHTML = tempName + " - Personal satisfaction and enrichment from one’s work.";
	}
	this.childNodes[0].classList.add("divTextClick");
	
	/*var formDiv = document.createElement('div');
	var f = document.createElement("form");
	f.setAttribute('method',"post");
	f.setAttribute('action',"dimension.php");
	
	var b = document.createElement("input");
	b.type = "button";
	b.setAttribute('type',"submit");
	b.setAttribute('value',"Submit");
	//b.innerHTML = 'Go to' + tempName + " page";
	f.appendChild(b);
	this.childNodes[0].appendChild(f);
	*/
    };
    
    childdiv.onmouseover = function() {
	tempName = this.innerText;
	window.console.log(tempName);
	this.childNodes[0].innerHTML = '25';
    };
    childdiv.onmouseout = function() {
	this.classList.remove("type3click");
	this.childNodes[0].classList.remove("divTextClick");
	window.console.log(tempName); 
	this.childNodes[0].innerHTML = tempName;};
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
/*DIV_ARRAY[4].onclick = function() {
    this.childNodes[0].innerHTML = tempName + " - " + "Developing a sense of connection, belonging, and a well-developed support system. The socially well person has a network of friends and family to whom she or he can turn for support, validation, and sharing of life experiences. These relationships are based on interdependence (rather than codependence), mutual trust and respect, equity of power, and cultural competence.";
    this.childNodes[0].classList.add("divTextClick");
};*/

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
