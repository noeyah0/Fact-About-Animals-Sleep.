document.addEventListener("DOMContentLoaded", () => {
	const toTopButton = document.getElementById("to-top");

	if (toTopButton) {
		toTopButton.addEventListener("click", () => {
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			});
		});
	}

	function setupPermanentHover(triggerId, targetId) {
		const trigger = document.getElementById(triggerId);
		const target = document.getElementById(targetId);

		if (trigger && target) {
			trigger.addEventListener("mouseenter", () => {
				target.classList.add("is-visible");

				if (targetId === "target-top-left") {
					const curve = document.getElementById("target-curve");
					if (curve) curve.classList.add("is-visible");
				}
			});
		}
	}

	setupPermanentHover("trigger-head-circle", "target-top-right");
	setupPermanentHover("trigger-small-circle", "target-top-left");
	setupPermanentHover("trigger-rectangle", "target-bottom-right");

	const trigger2_1 = document.getElementById("trigger-head-circle-2");
	const target2_1 = document.getElementById("trigger-box-emotion");

	if (trigger2_1 && target2_1) {
		trigger2_1.addEventListener("mouseenter", () => {
			target2_1.classList.add("is-visible");
		});
	}

	const trigger2_2 = document.getElementById("trigger-small-circle-2");
	const target2_2 = document.getElementById("trigger-box-hormone");

	if (trigger2_2 && target2_2) {
		trigger2_2.addEventListener("mouseenter", () => {
			target2_2.classList.add("is-visible");
		});
	}

	const dream_trigger2_3 = document.querySelector(
		".sleep-facts .gradient-rectangle2"
	);
	if (dream_trigger2_3)
		dream_trigger2_3.addEventListener("mouseenter", () => {
			document
				.getElementById("trigger-box-oversleep")
				.classList.add("is-visible");
		});

	const dream_trigger1 = document.querySelector(
		".dream-facts .gradient-circle3_1"
	);
	if (dream_trigger1)
		dream_trigger1.addEventListener("mouseenter", () => {
			document.getElementById("dream-box-color").classList.add("is-visible");
		});

	const dream_trigger2 = document.querySelector(
		".dream-facts .gradient-circle3_2"
	);
	if (dream_trigger2)
		dream_trigger2.addEventListener("mouseenter", () => {
			document.getElementById("dream-box-forget").classList.add("is-visible");
		});

	const dream_trigger3 = document.querySelector(
		".dream-facts .gradient-circle3_3"
	);
	if (dream_trigger3)
		dream_trigger3.addEventListener("mouseenter", () => {
			document.getElementById("dream-box-learning").classList.add("is-visible");
		});

	const pattern_trigger1 = document.querySelector(
		".sleep-patterns .gradient-circle4_1"
	);
	if (pattern_trigger1)
		pattern_trigger1.addEventListener("mouseenter", () => {
			document.getElementById("pattern-box-nap").classList.add("is-visible");
		});

	const pattern_trigger2 = document.querySelector(
		".sleep-patterns .gradient-circle4_2"
	);
	if (pattern_trigger2)
		pattern_trigger2.addEventListener("mouseenter", () => {
			document.getElementById("pattern-box-short").classList.add("is-visible");
		});

	const pattern_trigger3 = document.querySelector(
		".sleep-patterns .gradient-circle4_3"
	);
	if (pattern_trigger3)
		pattern_trigger3.addEventListener("mouseenter", () => {
			document.getElementById("pattern-box-aging").classList.add("is-visible");
		});
});