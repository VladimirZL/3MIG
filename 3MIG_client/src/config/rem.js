//计算rem大小
function computeREM () {
	let html = document.getElementsByTagName('html')[0];
	let size = (document.body.clientWidth * 100) / 720;
	html.style.fontSize = `${size}px`;
}
computeREM();
window.addEventListener('resize', computeREM, false);