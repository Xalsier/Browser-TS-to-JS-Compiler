fetch('test.ts')
  .then(response => response.text())
  .then(data => {
    // Basic "compilation": remove TypeScript annotations
    const compiledData = data.replace(/:\s*\w+\b/g, '');

    const blob = new Blob([compiledData], { type: 'application/javascript' });
    const script = document.createElement('script');
    script.src = URL.createObjectURL(blob);
    document.body.appendChild(script);
  })
  .catch(console.error);
