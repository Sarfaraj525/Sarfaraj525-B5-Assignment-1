📝 Exploring TypeScript: Powerful Features for Scalable Development
TypeScript has become a cornerstone in modern JavaScript development, providing static typing, better tooling, and overall improved maintainability. In this post, we’ll explore two important TypeScript features: keyof keyword and the differences between any, unknown, and never.

🔑 What is the use of the keyof keyword in TypeScript? Provide an example.

The keyof keyword is a TypeScript type operator that creates a union of all property names (keys) of a given object type.

✅ Why use keyof?
It ensures better type safety when accessing object properties, especially in generic functions or utilities.

🔍 Example:
type User = {
  name: string;
  age: number;
  isAdmin: boolean;
};

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user: User = {
  name: "Alice",
  age: 30,
  isAdmin: true,
};

console.log(getProperty(user, "name")); // Output: "Alice"
Here, keyof User is "name" | "age" | "isAdmin", and getProperty ensures only valid keys are accessed.

✅ Benefits:
-> Prevents runtime errors from invalid property access

-> Enables powerful utility functions in generic programming

-> Boosts IntelliSense suggestions in IDEs


🧠 Explain the difference between any, unknown, and never types in TypeScript.

1. any – Turn Off Type Safety
When a variable is declared as any, TypeScript will not check its type at all. It effectively disables all type-checking for that variable.

let value: any = "Hello";
value = 42;
value(); 
Use with caution – only when migrating JS code or dealing with third-party data.

2. unknown – Safe Alternative to any
unknown is a safer version of any. You can assign anything to it, but you must do a type check before using it.

let input: unknown = "World";

if (typeof input === "string") {
  console.log(input.toUpperCase());
}
It forces you to narrow the type before use, making your code safer and more predictable.

3. never – Represents the Impossible
The never type indicates values that never occur. It’s often used for:

Functions that never return (e.g., throw errors or infinite loops)

Exhaustive checks in switch cases

function throwError(message: string): never {
  throw new Error(message);
}

function processInput(value: string | number): string {
  if (typeof value === "string") return value;
  if (typeof value === "number") return value.toString();

  const _exhaustiveCheck: never = value;
  return _exhaustiveCheck;
}

🎯 Conclusion-
--> keyof helps build type-safe utility functions by allowing access to valid keys of an object.

--> any, unknown, and never offer varying levels of type safety, and understanding their differences helps you write more robust TypeScript code.

TypeScript is not just a typing tool — it’s a way to write cleaner, more maintainable, and scalable applications.
