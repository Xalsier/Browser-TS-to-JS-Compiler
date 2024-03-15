// Example decorator (will be removed by the compiler)
function Component(target: any) {
    // Decorator logic (empty for this example)
}

@Component
class MyComponent {
    constructor(public name: string) {}
}

export { MyComponent };
