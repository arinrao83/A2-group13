document.addEventListener("DOMContentLoaded", function() {
	const thumbnailsContainer = document.getElementById("thumbnails");
	const featuredImage = document.getElementById("featured");
	const caption = document.getElementById("caption");

	const images = [
		{
			large: "images/flowers-yellow-large.jpg",
			small: "images/flowers-yellow-small.jpg",
			alt: "Sunflowers",
			caption: "Sunflowers in the hamlet Dernekamp"
		},
		{
			large: "images/flowers-white-large.jpg",
			small: "images/flowers-white-small.jpg",
			alt: "Poppies",
			caption: "Poppies in cornfield"
		},
		{
			large: "images/flowers-red-large.jpg",
			small: "images/flowers-red-small.jpg",
			alt: "Daffodils",
			caption: "Daffodils in Sentmaring park"
		},
		{
			large: "images/flowers-purple-large.jpg",
			small: "images/flowers-purple-small.jpg",
			alt: "Sentmaring Park",
			caption: "Sentmaring Park"
		},
		{
			large: "images/flowers-pink-large.jpg",
			small: "images/flowers-pink-small.jpg",
			alt: "Market in Münster",
			caption: "Market in Münster"
		}
	];
	// used to track selected image so that the slideshow will start from that point 
	let selectedIndex = null;
	// obj constructor
	class Image{
	
	constructor(src, alt, width,height, caption){
		this.src = src;
		this.alt = alt;
		this.width = width;
		this.height = height;
		this.caption = caption;
		
	}
	createTumbnail(index){
		const li = document.createElement("li");
		const img = document.createElement("img");
		
		img.src = this.src;
		img.alt = this.alt;
		img.width = this.width;
		img.height = this.height;
		img.caption = this.caption;
		
		img.style.filter = index === 0 ? "grayscale(0%)" : "grayscale(100%)";
		// on click replace src from small to large
		img.addEventListener("click", function() {
			selectedIndex = index;
			featuredImage.src = this.src.replace("small", "large");
			featuredImage.alt = this.alt;
			caption.textContent = this.caption;
			
			document.querySelectorAll("#thumbnails img").forEach(img => {
				img.style.filter = "grayscale(100%)";
				img.style.border = "";
				img.style.borderRadius = "";
			});
			//add border to selected img
			img.style.border = "solid 3px #FF7518";
			img.style.borderRadius = "10px";
			img.style.filter = "grayscale(0%)";
		});
		li.appendChild(img);
		thumbnailsContainer.appendChild(li);
		
	}
}
	// set default img 
	const defaultImg = images[0];
	featuredImage.src = defaultImg.large;
	featuredImage.alt = defaultImg.alt;
	
	featuredImage.caption = defaultImg.caption;
	

	images.forEach((image, index) => {
		// create new image object for each arr element
		let img = new Image(image.small, image.alt, 240, 160, image.caption);
		img.createTumbnail(index);
		
		
	});
	
	//slideshow 
	let intervalId;
	let index = 0;

	function slideshow(){
		
		if(button.textContent === "Start slideshow"){
			button.textContent = "Stop slideshow";
			function showImg(){
				if (selectedIndex !== null) {
					index = selectedIndex;
					selectedIndex = null;
				}
				featuredImage.src = images[index].large;
				
				document.querySelectorAll("#thumbnails img").forEach((img, imgIndex) => {
					if (imgIndex === index) {
						img.style.border = "solid 3px #FF7518";
						img.style.borderRadius = "10px";
						img.style.filter = "grayscale(0%)";
					} else {
						img.style.filter = "grayscale(100%)";
						img.style.border = "";
						img.style.borderRadius = "";
					}
				});
				index ++;
				//display first image again after there are no more images to display 
				if(index == images.length){
					index = 0;
				}
			}
			intervalId = setInterval(showImg, 1000);
		}else{
			button.textContent = "Start slideshow";
			clearInterval(intervalId)
		}
	}
	const button = document.querySelector(".button");
	button.addEventListener("click", slideshow);
});
