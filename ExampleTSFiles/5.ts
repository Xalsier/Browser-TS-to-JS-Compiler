function identity<T>(arg: T): T {
    return arg;
}

const output = identity("myString");

export { identity, output };
