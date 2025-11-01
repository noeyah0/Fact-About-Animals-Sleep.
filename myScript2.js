document.addEventListener("DOMContentLoaded", function () {

	const toTopButton = document.getElementById("to-top");


	if (toTopButton) {
		toTopButton.addEventListener("click", function () {
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			});
		});
	}
});