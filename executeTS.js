fetch('../ExampleTSFiles/3.ts')
  .then(response => response.text())
  .then(data => {
    // Remove type annotations but preserve values, especially for numerical literals and after colons
    let compiledData = data.replace(/:\s*(\w+)\b/g, (match, p1) => {
      // Preserve numeric literals and boolean values directly following the colon
      if (!isNaN(p1) || p1 === 'true' || p1 === 'false') {
        return `: ${p1}`;
      }
      return '';
    });

    // Remove interface declarations
    compiledData = compiledData.replace(/^interface\s+\w+\s*{[^}]*}\s*$/gm, '');

    // Convert TypeScript enums to JavaScript objects
    compiledData = compiledData.replace(/enum\s+(\w+)\s*{([^}]+)}/g, (match, enumName, enumBody) => {
      const enumFields = enumBody.split(',').map(field => {
        const [key, value] = field.trim().split(/\s*=\s*/);
        return `${key}: ${value ? value.trim() : JSON.stringify(key)}`;
      });
      const enumObject = enumFields.join(',\n  ');
      return `const ${enumName} = {\n  ${enumObject}\n};`;
    });

    console.log(compiledData);
    const blob = new Blob([compiledData], { type: 'application/javascript' });
    const script = document.createElement('script');
    script.src = URL.createObjectURL(blob);
    document.body.appendChild(script);
  })
  .catch(console.error);
