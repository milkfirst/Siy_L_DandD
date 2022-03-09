(() => {
	// COLLECT THE BUTTONS AT THE BOTTOM OF THE PAGE
	let bottomThumbnails = document.querySelectorAll("#buttonHolder img"), gameBoard = document.querySelector(".puzzle-board");
	/* 
	bottomNav only communicating to buttonHolder aka let student = document.querySelector("#lalaine")
	after the let is your own variable so right now, it doesn't specifically connect to anything / doesn't matter what you call it so you're setting up this variable
	we are selecting all the images in the buttonHolder container
	*/


	/* 
	bottomThumbnails collects all of the image elements into an array-like container that looks like this:
	<nav id="buttonHolder">
	[	<img src="images/buttonZero.jpg" alt="thumbnail">
		<img src="images/buttonOne.jpg" alt="thumbnail">
		<img src="images/buttonTwo.jpg" alt="thumbnail">
		<img src="images/buttonThree.jpg" alt="thumbnail">
	]
	</nav>
	*/

	function changeBGImg() {
		// debugger;
		gameBoard.style.backgroundImage = `url(images/backGround${this.dataset.bgref}.jpg)`
	}
	/* the "this" keyword refers to the element that triggers this function  (the nav button we click with the custom data attribute of bgref) */

	/* ADD EVENT HANDLING HERE */

	bottomThumbnails.forEach(thumb => thumb.addEventListener("click", changeBGImg));

	/*
	thumb and changeBGImg are variables that you create
	*/

})();
