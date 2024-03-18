interface Clickable {
    clickEvent(): void;
  }
  
  const button: HTMLButtonElement = document.createElement('button');
  button.textContent = 'Click Me';
  document.body.appendChild(button);
  button.addEventListener('click', function(event: MouseEvent): void {
    this.clickEvent();
  });
  
  const clickHandler: Clickable = {
    clickEvent: function(): void {
      const newDiv: HTMLDivElement = document.createElement('div');
      newDiv.textContent = 'Button was clicked!';
      document.body.appendChild(newDiv);
    }
  };
  
  button.onclick = clickHandler.clickEvent.bind(clickHandler);
  