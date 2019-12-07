//type nul >index.js
document.querySelector('form').addEventListener('submit', (e) => {
	e.preventDefault();
	const input = document.querySelector('#message-input');
	const encrypted = btoa(input.value);
	const link = document.querySelector('#link-input');
	link.value = `${window.location}#${encrypted}`;
	link.select();
});
