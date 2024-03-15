fetch('../ExampleTSFiles/6.ts')
  .then(response => response.text())
  .then(data => {
    function removeTypeAnnotations(code) {
      console.log('FLAG: Type Annotation spotted');
      // Remove type annotations from variables and parameters, but preserve the assignment part
      return code = data.replace(/:\s*(\w+)\b/g, (match, p1) => {
        // Preserve numeric literals and boolean values directly following the colon
        if (!isNaN(p1) || p1 === 'true' || p1 === 'false') {
          return `: ${p1}`;
        }
        return '';
      });
  }
  

    function removeDecorators(code) {
        console.log('FLAG: Decorator spotted');
        return code.replace(/@.*\n/g, '');
    }

    function removeAccessModifiers(code) {
        console.log('FLAG: Access Modifier spotted');
        return code.replace(/\b(public|private|protected)\b/g, '');
    }

    function removeGenericTypes(code) {
        console.log('FLAG: Generic Type spotted');
        return code.replace(/<\s*\w+\s*>/g, '');
    }

    function removeInterfaceDeclarations(code) {
        console.log('FLAG: Interface Declaration spotted');
        return code.replace(/^interface\s+\w+\s*{[^}]*}\s*$/gm, '');
    }

    function convertEnumsToObject(code) {
        console.log('FLAG: Enum spotted');
        return code.replace(/enum\s+(\w+)\s*{([^}]+)}/g, (match, enumName, enumBody) => {
            const enumFields = enumBody.split(',').map(field => {
                const [key, value] = field.trim().split(/\s*=\s*/);
                return `${key}: ${value ? value.trim() : JSON.stringify(key)}`;
            });
            const enumObject = enumFields.join(',\n  ');
            return `const ${enumName} = {\n  ${enumObject}\n};`;
        });
    }

    let compiledData = data;

    if (data.match(/:\s*[^,){\n]+/g)) {
        compiledData = removeTypeAnnotations(compiledData);
    }

    if (data.match(/@.*\n/g)) {
        compiledData = removeDecorators(compiledData);
    }

    if (data.match(/\b(public|private|protected)\b/g)) {
        compiledData = removeAccessModifiers(compiledData);
    }

    if (data.match(/<\s*\w+\s*>/g)) {
        compiledData = removeGenericTypes(compiledData);
    }

    if (data.match(/^interface\s+\w+\s*{[^}]*}\s*$/gm)) {
        compiledData = removeInterfaceDeclarations(compiledData);
    }

    if (data.match(/enum\s+(\w+)\s*{([^}]+)}/g)) {
        compiledData = convertEnumsToObject(compiledData);
    }

    // Check for module-specific syntax to determine if the script should be a module
    const isModule = /(?:import\s+.*?from\s+|export\s+.*?\s)/.test(data);

    console.log(compiledData);
    const blob = new Blob([compiledData], { type: 'application/javascript' });
    const script = document.createElement('script');
    script.src = URL.createObjectURL(blob);
    if (isModule) {
        console.log('FLAG: Module syntax spotted');
        script.type = 'module';
    }
    document.body.appendChild(script);
  })
  .catch(console.error);
