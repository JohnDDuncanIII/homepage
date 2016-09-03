var text = document.createTextNode("Hits: " + document.getElementById('iframe').contentDocument.body.firstChild.innerHTML);
document.getElementById('footer-text').appendChild(text);
