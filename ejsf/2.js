const button = document.createElement('button');
  button.textContent = 'Click Me';
  document.body.appendChild(button);
  button.addEventListener('click', function(event) {
    this.clickEvent();
  });
  
  const clickHandler = {
    clickEvent() {
      const newDiv = document.createElement('div');
      newDiv.textContent = 'Button was clicked!';
      document.body.appendChild(newDiv);
    }
  };
  
  button.onclick = clickHandler.clickEvent.bind(clickHandler);