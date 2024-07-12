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

	images.forEach((image, index) => {
		const li = document.createElement("li");
		const img = document.createElement("img");
		img.src = image.small;
		img.alt = image.alt;
		img.width = 240;
		img.height = 160;
		img.style.filter = index === 0 ? "grayscale(0%)" : "grayscale(100%)";
		img.addEventListener("click", function() {
			featuredImage.src = image.large;
			featuredImage.alt = image.alt;
			caption.textContent = image.caption;

			document.querySelectorAll("#thumbnails img").forEach(img => img.style.filter = "grayscale(100%)");
			img.style.filter = "grayscale(0%)";
		});
		li.appendChild(img);
		thumbnailsContainer.appendChild(li);
	});
});
