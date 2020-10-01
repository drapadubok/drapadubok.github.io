function navigate() {
	let current_url = document.location.pathname.replace(/\/$/, "");
	let sidebar_links = document.querySelectorAll('nav a');
	sidebar_links.forEach(a => {
		let stripped_a = a.pathname.replace(/\/$/, "");
		if (stripped_a === current_url) {
			a.parentNode.classList.add('current-menu-item');
		}
	});
};