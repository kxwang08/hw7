// Step 1 Load
var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video=document.querySelector("#player1");
	video.autoplay=false;
	video.loop=false;
	console.log('auto play is set to '+video.autoplay);
	console.log('loop is set to '+video.loop);
});


// Step 2 Play Button
document.querySelector("#play").addEventListener("click", function() {

	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML=video.volume*100+"%";
}
);

// Step 3 Pause Button
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
}
);

// Step 4 Slow Down
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down");
	video.playbackRate=video.playbackRate*.9;
	console.log("New speed is "+video.playbackRate);
}
);

// Step 5 Speed Up

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up");
	video.playbackRate=video.playbackRate/.9;
	console.log("New speed is "+video.playbackRate);
}
);

// Step 6 Skip Ahead

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");
	if (video.currentTime+10<video.duration){
		video.currentTime=video.currentTime+10;
	}
	else{
		video.currentTime=0;
	}
	console.log("Current location "+video.currentTime);
}
);


// Step 7 Mute

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted==false){
		video.muted=true;
		document.querySelector("#mute").innerHTML="Unmute";
	}
	else{
		video.muted=false;
		document.querySelector("#mute").innerHTML="Mute";
	}
}
);

// Step 8 Volume Slider
document.querySelector("#slider").addEventListener("change", function() {
	console.log(this.value);
	video.volume=this.value/100;
	document.querySelector("#volume").innerHTML=this.value+"%";
}
);


// Step 9 Styled
document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
}
);

// Step 10 Original

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
}
);





