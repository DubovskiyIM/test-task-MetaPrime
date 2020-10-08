const clickCounter = () => {
	let clicks = localStorage.getItem('Clicks');
	clicks = clicks ? parseInt(clicks) : 0;
	clicks++

	document.cookie = `Clicks=${clicks}`;
	localStorage.setItem('Clicks', clicks.toString());
};

const handleClick = () => {
	clickCounter();
	window.open('http://yandex.ru');
}

const link = document.querySelector('a');
link.addEventListener('click', handleClick);
