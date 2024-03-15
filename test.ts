// Dynamically create a button and append it to the body
const button: HTMLButtonElement = document.createElement('button');
button.textContent = 'Click Me';
document.body.appendChild(button);

// Add an event listener to the button
button.addEventListener('click', (event: MouseEvent) => {
  // Create a new div element and add some content
  const newDiv: HTMLDivElement = document.createElement('div');
  newDiv.textContent = 'You clicked the button!';
  document.body.appendChild(newDiv);
});
