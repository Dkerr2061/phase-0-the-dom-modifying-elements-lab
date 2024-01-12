main.remove();

const newHeader = document.createElement('h1');
document.body.appendChild(newHeader);

newHeader.id = 'victory';

const text = document.getElementById('victory');
text.innerHTML = '<h1>David Kerr</h1><h3>is the champion</h3>';