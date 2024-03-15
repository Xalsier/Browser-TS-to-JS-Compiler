# Lightweight Browser TS to JS Compiler (StripTS.js)

## Capabilities of the TypeScript to JavaScript Compiler

This compiler is designed to convert basic TypeScript code into JavaScript by handling the following TypeScript-specific features:

**Type Annotations:** Strips type annotations from variables, functions, and return types.

**Interfaces:** Removes TypeScript interfaces.

**Enums:** Converts TypeScript enums into JavaScript objects.

**Generic Types:** Processes generic types by removing type parameters.

**Decorators and Access Modifiers:** Removes decorators and access modifiers (public, private, protected).

## The StripTS Gauntlet

- For testing, to make sure one update doesn't break improvements to the other tests.

1.ts - Compiler removes Type Annotations
2.ts - Compiler removes Interfaces
3.ts - Compiler removes enums
4.ts - Compiler removes generic types
5.ts - Compiler correctly added type="module"
6.ts - Compiler removes decorators and access modifiers