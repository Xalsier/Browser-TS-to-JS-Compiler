// Type Annotation
let variable: number = 5;

// Decorator
function decoratorExample(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("Method was called");
}

class ExampleClass {
    // Access Modifier
    private privateVariable: string = "Test";

    // Generic Type
    genericMethod<T>(arg: T): T {
        return arg;
    }

    @decoratorExample
    method() {
        console.log("Method executed");
    }
}

// Interface Declaration
interface ExampleInterface {
    property: number;
    method(param: string): void;
}

// Enum
enum Color {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE"
}
