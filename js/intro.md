# Introduction to JavaScript

## 1. Basics of JavaScript

### Definition

JavaScript is a high-level, interpreted programming language primarily used for adding interactivity to web pages. It is versatile and can be used for both client-side and server-side development. Being a dynamically typed and loosely typed language, it allows developers to write flexible and efficient code.

### Key Features

- **Event-driven**: JavaScript can react to user actions like clicks, scrolls, and keypresses.
- **Prototype-based**: It uses prototypes for object inheritance instead of classes.
- **Asynchronous Programming**: JavaScript supports asynchronous operations using callbacks, promises, and `async/await`.
- **Cross-platform**: Runs on all major browsers and platforms.

### Use Cases

- **Client-side web development**: Adding interactivity to websites (e.g., animations, dynamic forms).
- **Server-side development**: Using environments like Node.js to build scalable applications.
- **Game development**: Creating browser-based games.
- **Mobile app development**: Using frameworks like React Native.

---

## 2. Data Types

JavaScript has two types of values: **Primitive** and **Non-Primitive (Reference)**.

### Primitive Data Types

Primitive types represent simple, immutable data.

- **Number**: Represents both integers and floating-point numbers.

  ```javascript
  let age = 25;
  let price = 19.99;
  ```

  - Special values: `Infinity`, `-Infinity`, and `NaN` (Not a Number).
    ```javascript
    console.log(10 / 0); // Infinity
    console.log("abc" * 2); // NaN
    ```

- **String**: Represents textual data. Strings are immutable (cannot be changed after creation).

  ```javascript
  let name = "John";
  ```

  - Template Literals: Allow embedding expressions using backticks.
    ```javascript
    let greeting = `Hello, ${name}!`;
    console.log(greeting); // Hello, John!
    ```

- **Boolean**: Represents true or false.

  ```javascript
  let isLoggedIn = false;
  ```

- **Undefined**: A variable declared but not assigned any value.

  ```javascript
  let x;
  console.log(x); // undefined
  ```

- **Null**: Represents an intentional absence of value.

  ```javascript
  let y = null;
  ```

- **BigInt**: Used for numbers larger than `2^53 - 1`.

  ```javascript
  let largeNumber = 123456789012345678901234567890n;
  ```

- **Symbol**: A unique and immutable value often used as object keys.
  ```javascript
  let sym = Symbol("unique");
  ```

### Reference Data Types

Reference types store collections of data and more complex entities.

- **Objects**: Collections of key-value pairs.

  ```javascript
  let obj = { name: "Alice", age: 30 };
  ```

- **Arrays**: Ordered collections of elements.

  ```javascript
  let arr = [1, 2, 3];
  ```

- **Functions**: First-class objects that can be passed as arguments.
  ```javascript
  function sayHello() {
    console.log("Hello!");
  }
  ```

---

## 3. Variables

JavaScript supports three types of variable declarations:

- **`var`**:

  - Function-scoped.
  - Can be re-declared and updated.
  - Hoisted with an undefined value.

  ```javascript
  var x = 10;
  ```

- **`let`**:

  - Block-scoped.
  - Cannot be re-declared in the same scope but can be updated.

  ```javascript
  let y = 20;
  ```

- **`const`**:
  - Block-scoped.
  - Cannot be re-declared or updated.
  ```javascript
  const z = 30;
  ```

### Scope

- **Global Scope**: Variables declared outside functions are accessible everywhere.
- **Local Scope**: Variables declared within a function or block are limited to that context.

---

## 4. Operators

### Arithmetic Operators

Used for mathematical operations.

```javascript
let sum = 10 + 20; // 30
let product = 10 * 3; // 30
```

### Comparison Operators

Used to compare values.

```javascript
console.log(5 === "5"); // false (strict equality)
console.log(5 == "5"); // true (type coercion)
```

### Logical Operators

Used for combining conditions.

```javascript
console.log(true && false); // false
console.log(true || false); // true
console.log(!true); // false
```

### Assignment Operators

Used to assign values.

```javascript
let x = 5;
x += 2; // x = 7
```

### Type Operators

- `typeof`: Determines the type of a value.
- `instanceof`: Checks if an object is an instance of a constructor.

```javascript
console.log(typeof 42); // "number"
```

---

## 5. Control Structures

### Conditional Statements

- **if-else**

  ```javascript
  if (x > 0) {
    console.log("Positive");
  } else {
    console.log("Non-positive");
  }
  ```

- **switch**
  ```javascript
  switch (day) {
    case 1:
      console.log("Monday");
      break;
    default:
      console.log("Other day");
  }
  ```

### Loops

- **for**

  ```javascript
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  ```

- **while**

  ```javascript
  let i = 0;
  while (i < 5) {
    console.log(i);
    i++;
  }
  ```

- **do-while**

  ```javascript
  let i = 0;
  do {
    console.log(i);
    i++;
  } while (i < 5);
  ```

- **for...in** (iterates over object properties)

  ```javascript
  let obj = { a: 1, b: 2 };
  for (let key in obj) {
    console.log(key);
  }
  ```

- **for...of** (iterates over iterable objects like arrays)
  ```javascript
  let arr = [10, 20, 30];
  for (let value of arr) {
    console.log(value);
  }
  ```

---

## 6. Functions

Functions encapsulate reusable logic and behavior.

- **Function Declaration**

  ```javascript
  function add(a, b) {
    return a + b;
  }
  ```

- **Function Expression**

  ```javascript
  const multiply = function (a, b) {
    return a * b;
  };
  ```

- **Arrow Functions**
  Compact syntax for writing functions.

  ```javascript
  const subtract = (a, b) => a - b;
  ```

- **Default Parameters**
  Provide default values for function arguments.

  ```javascript
  function greet(name = "Guest") {
    console.log("Hello, " + name);
  }
  ```

- **Rest Parameters**
  Handle an indefinite number of arguments.
  ```javascript
  function sum(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
  }
  ```

### Immediately Invoked Function Expressions (IIFE)

Executed immediately after definition.

```javascript
(function () {
  console.log("IIFE executed");
})();
```

### Closures

Functions that retain access to their outer scope.

```javascript
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}

const counter = outer();
counter(); // 1
counter(); // 2
```
