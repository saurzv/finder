function start(){
	document.getElementById('start').innerHTML="Reset";
	document.getElementById('toogle').style.display="block";
	var top = Math.floor(Math.random() * 100);
	var left = Math.floor(Math.random() * 100);
	document.getElementById('container').style.top=top+"%";
	document.getElementById('container').style.left=left+"%";
}

function greet() {
	document.getElementById('src_img').style.display = "block";
	document.getElementById('head').innerHTML="You've found it!"
}