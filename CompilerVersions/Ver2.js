fetch('../ExampleTSFiles/1.ts')
  .then(response => response.text())
  .then(data => {
    // Remove type annotations
    let compiledData = data.replace(/:\s*\w+\b/g, '');
    // Remove interface declarations
    compiledData = compiledData.replace(/^interface\s+\w+\s*{[^}]*}\s*$/gm, '');
    console.log(compiledData);
    const blob = new Blob([compiledData], { type: 'application/javascript' });
    const script = document.createElement('script');
    script.src = URL.createObjectURL(blob);
    document.body.appendChild(script);
  })
  .catch(console.error);
