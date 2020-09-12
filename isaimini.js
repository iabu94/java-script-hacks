//run the local storage set item call for the first time only. DO NOT REPEAT
localStorage.setItem('id', 1);

// Replace the film variable value with your needed film name and run the 
// following code again and again until it finds the film name. 
// If it finds you will get notified with "Film Found" message in the console.

var film = "Naiyaandi";
var i = localStorage.getItem('id');
console.log("i", i);
title = "[title=\"Page " + i + "\"]";
console.log("title", i);
if (!document.querySelector(title)) {
	console.log("Page Not Found");
	var filmTitle = "[title=\"" + film + "\"]";
	if(document.querySelector(filmTitle)) {
		console.log("Film Found");
	}
	else {
		localStorage.setItem('id', +i+1);
		i = localStorage.getItem('id');
		console.log("i inner", i);
		title = "[title=\"Page " + i + "\"]";
		console.log("inner title", title);
		document.querySelector(title).click();
	}
}
else {
	console.log("Page Found");
}
