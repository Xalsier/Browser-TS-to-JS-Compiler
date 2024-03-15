const button: HTMLButtonElement = document.createElement('button');
button.textContent = 'Click Me';
document.body.appendChild(button);
button.addEventListener('click', (event: MouseEvent) => {
  const newDiv: HTMLDivElement = document.createElement('div');
  newDiv.textContent = 'You clicked the button!';
  document.body.appendChild(newDiv);
});
