//type nul >index.js
document.querySelector('form').addEventListener('submit', (e) => {
	e.preventDefault();
	const input = document.querySelector('#message-input');
	const encryted = btoa(input.value);
	document.querySelector('#link-input').value = encryted;
});
