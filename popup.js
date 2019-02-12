
function click(e) {

	// 5. execute the script
	chrome.tabs.executeScript(null,{code:"document.body.style.backgroundImage='url(" + images[e.target.id] + "'"}); // change the color to the color clicked
	
	alert("Are you sure you wanna play music?");

	var myAudio = new Audio(chrome.runtime.getURL(songs[e.target.id]));
	myAudio.play();
	
	//window.close(); //close the popup window
}

document.addEventListener('DOMContentLoaded', function(){ // 1. when dom is completely loaded
	var divs = document.querySelectorAll('div'); // 2. find all divs
	for (var i = 0; i < divs.length; i++) { // 3. loop through the divs
		divs[i].addEventListener('click', click); // 4. wait for click
	}

});

var songs = {
	happy: "lovemyself.mp3",
	sad: "alittletoomuch.mp3",
	angry: "betterthanrevenge.mp3",
	calm: "emmaslullaby.mp3",
	productive: "highhopes.mp3",
}

var images = {
	happy: 'https://www.color-hex.com/palettes/33328.png',
	sad:'https://images.8tracks.com/cover/i/009/352/486/2560x1440-baby-blue-eyes-solid-color-background-9949.jpg?raw=1',
	angry: 'https://www.gannett-cdn.com/-mm-/29dca8f0d46642158eab53e471c083833183d9a7/c=49-0-800-565/local/-/media/2018/06/01/Camarillo/Camarillo/636634098877962218-vclo-0819-sbfire.jpg?raw=1',
	calm: 'https://assets.calm.com/b546a0600182216fd9d471da57c2c8e5.jpeg',
	productive:'https://st2.depositphotos.com/4107269/8775/i/950/depositphotos_87759904-stock-photo-office-white-desk-top-view.jpg',
}
