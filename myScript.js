document.addEventListener("DOMContentLoaded", function() {

	let isLightOn = false;
	const introScreen = document.getElementById("intro-screen");
	const switchButton = document.getElementById("light-switch");
	const mainWebsite = document.getElementById("main-website");

	function updateSpotlight(x, y) {
		if (!isLightOn && introScreen) {
			introScreen.style.background = `radial-gradient(circle 250px at ${x}px ${y}px, #dce0caff 0%, #000 80%)`;
		}
	}

	const introShown = sessionStorage.getItem('hasIntroBeenShown');

	if (introShown === 'true') {
		isLightOn = true;
		introScreen.style.display = 'none';
		mainWebsite.style.display = 'block';

	} else {
		if (switchButton && introScreen && mainWebsite) {

			document.addEventListener("mousemove", (e) => {
				updateSpotlight(e.clientX, e.clientY);
			});
			updateSpotlight(window.innerWidth / 2, window.innerHeight / 2);

			switchButton.addEventListener("click", () => {

				sessionStorage.setItem('hasIntroBeenShown', 'true');

				isLightOn = true;
				introScreen.style.background = "#FBFFED";
				introScreen.style.color = "#2a1a0a";
				introScreen.classList.add("fade-out");
				mainWebsite.style.display = "block";
				setTimeout(() => {
					introScreen.style.display = "none";
				}, 700);
			});
		}
	}

	const delay = 500;

	function setupAnimalAnimation(animalClass, gifDuration, gifWidth = "700px") {

		const section = document.querySelector(`.animal.${animalClass}`);
		if (!section) {
			console.warn(`Animal section ".${animalClass}" not found.`);
			return;
		}

		const gifImg = section.querySelector(`.${animalClass}-gif`);
		const sleepImg = section.querySelector(`.${animalClass}-sleep`);

		const originalGifSrc = gifImg.getAttribute('src');

		let delayTimer = null;
		let gifTimer = null;
		let sleepTimer = null;

		const observer = new IntersectionObserver(entries => {
			entries.forEach(entry => {

				if (entry.isIntersecting) {

					gifImg.style.display = "block";
					gifImg.style.opacity = 0;
					sleepImg.style.display = "none";
					sleepImg.style.opacity = 0;

					delayTimer = setTimeout(() => {
						section.classList.add("active");

						gifImg.src = originalGifSrc + "?v=" + Date.now();

						gifImg.style.width = gifWidth;
						gifImg.style.height = "auto";
						gifImg.style.opacity = 1;

						gifTimer = setTimeout(() => {
							gifImg.style.opacity = 0;
							sleepImg.style.display = "block";
							sleepImg.style.opacity = 1;

							sleepTimer = setTimeout(() => {
								if (section.classList.contains("active")) {
									gifImg.style.display = "none";
								}
							}, 500);

						}, gifDuration);

					}, delay);

				} else {

					clearTimeout(delayTimer);
					clearTimeout(gifTimer);
					clearTimeout(sleepTimer);

					section.classList.remove("active");
					gifImg.style.display = "none";
					gifImg.style.opacity = 0;
					sleepImg.style.display = "none";
					sleepImg.style.opacity = 0;
				}
			});
		}, { threshold: 0.5 });

		observer.observe(section);
	}


	setupAnimalAnimation("whale", 2000, "800px");
	setupAnimalAnimation("giraffe", 2500, "900px");
	setupAnimalAnimation("elephant", 3000, "800px");
	setupAnimalAnimation("horse", 3500, "800px");
	setupAnimalAnimation("ant", 4000, "650px");
	setupAnimalAnimation("human", 2500, "650px");
	setupAnimalAnimation("chimpanzee", 4500, "800px");
	setupAnimalAnimation("sloth", 4000, "750px");
	setupAnimalAnimation("seaOtter", 7000, "700px");
	setupAnimalAnimation("duck", 8500, "450px");
	setupAnimalAnimation("lion", 4500, "600px");
	setupAnimalAnimation("cat", 5500, "600px");
	setupAnimalAnimation("dog", 5500, "530px");
	setupAnimalAnimation("rat", 5500, "700px");
	setupAnimalAnimation("walrus", 5500, "500px");
	setupAnimalAnimation("bat", 4500, "700px");
	setupAnimalAnimation("koala", 7000, "700px");

	const toTopButton = document.querySelector("#to-top");
	const footerElement = document.querySelector("footer");

	if (toTopButton) {
		toTopButton.addEventListener("click", function() {
			window.scrollTo({
				top: 0,
				behavior: "smooth"
			});
		});

		if (footerElement) {
			const footerObserver = new IntersectionObserver(entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						toTopButton.style.opacity = "0";
						toTopButton.style.pointerEvents = "none";
					} else {
						toTopButton.style.opacity = "1";
						toTopButton.style.pointerEvents = "auto";
					}
				});
			}, {
				threshold: 0.1
			});

			footerObserver.observe(footerElement);
		}
	}

});