

function toggleClass() {
	const elements = document.querySelectorAll('[data-toggle-class]');
	if (!elements.length) {
		return null;
	}
	
	for (let el of elements) {
		el.addEventListener('click', function (e) {
			e.preventDefault();
			const wrapId = this.dataset.toggleClass;
			const wrap = document.querySelector(wrapId);
			if (!wrap) return;
			
			wrap.classList.toggle('active');
		})
	}
}

(function () {
	console.log("START");
	toggleClass();
})();
