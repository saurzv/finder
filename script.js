var w = window.innerWidth;
var h = window.innerHeight;
var alert1; var alert2;
var hint = false;
var found = false;

function alrt() {
	alert("Our beloved teacher PK Dan is hidden somehwere on this page.\nCan you find him by clicking on screen?\n\n (Use dektop for better experience)");
}

document.addEventListener("click", printMousePos);

function printMousePos(event) {
	var currX = event.clientX;
	var currY = event.clientY;
	var alert1; var alert2;

	currX = (currX/w)*100;
	currY = (currY/h)*100;

	if(currY > t) {
		alert1 = "up";
	}
	else{
		alert1 = "down";
	}

	if(currX > l) {
		alert2 = "left";
	}
	else {
		alert2 = "right";
	}

	if (found){
		document.getElementById('head').innerHTML="You've found him!";
	}

	if(hint == true && found == false){
		document.getElementById('head').innerHTML="go " + alert1 + " and " + alert2;
	}
}

function start(){
	window.t = Math.floor(Math.random() * 100);
	window.l = Math.floor(Math.random() * 100);
	document.getElementById('start').innerHTML="Reset";
	document.getElementById('toggle').style.display="block";
	document.getElementById('container').style.top=t+"%";
	document.getElementById('container').style.left=l+"%";
}

function greet() {

	document.getElementById('src_img').style.display = "block";
	document.getElementById('head').innerHTML="You've found him!";
	found = true;
}

function toggle_hint() {

	if(hint == false){
		hint = true;
		document.getElementById('hint').innerHTML="Hint on";
	}
	else{
		hint = false;
		document.getElementById('hint').innerHTML="Hint off";
		document.getElementById('head').innerHTML="Find PK Dan";
	}
}