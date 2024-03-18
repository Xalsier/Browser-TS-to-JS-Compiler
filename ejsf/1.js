const button = document.createElement('button');
button.textContent = 'Click Me';
document.body.appendChild(button);
button.addEventListener('click', (event) => {
  const newDiv = document.createElement('div');
  newDiv.textContent = 'You clicked the button!';
  document.body.appendChild(newDiv);
});