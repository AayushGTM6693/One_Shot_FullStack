# Object-Oriented Programming (OOP) in JavaScript

Object-Oriented Programming (OOP) is a programming paradigm that organizes code into reusable and modular objects. JavaScript supports OOP principles like **Encapsulation**, **Inheritance**, **Polymorphism**, and **Abstraction**.

## 1. Core Concepts of OOP in JavaScript

### **Objects**
Objects are collections of key-value pairs where keys are properties or methods.

```javascript
const car = {
  brand: "Toyota",
  model: "Corolla",
  start: function () {
    console.log("Car started");
  },
};

console.log(car.brand); // Accessing a property
car.start(); // Invoking a method
```

### **Classes**
Classes are templates for creating objects. They were introduced in ES6.

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const john = new Person("John", 30);
john.greet(); // Hello, my name is John
```

### **Encapsulation**
Encapsulation bundles data (properties) and methods into one unit (class/object).

#### **Public Properties**
Public properties are accessible outside the class.

```javascript
class Person {
  constructor(name) {
    this.name = name; // Public property
  }
}

const person = new Person("Alice");
console.log(person.name); // Alice
```

#### **Private Properties (ES2021+)**
Private properties are accessible only inside the class. They are denoted using `#`.

```javascript
class Person {
  #age; // Private property

  constructor(name, age) {
    this.name = name;
    this.#age = age;
  }

  getAge() {
    return this.#age;
  }
}

const person = new Person("Bob", 25);
console.log(person.getAge()); // 25
console.log(person.#age); // Error
```

### **Inheritance**
Inheritance allows a class to inherit properties and methods from another class using the `extends` keyword.

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} is eating`);
  }
}

class Dog extends Animal {
  bark() {
    console.log(`${this.name} says Woof!`);
  }
}

const dog = new Dog("Buddy");
dog.eat(); // Buddy is eating
dog.bark(); // Buddy says Woof!
```

### **Polymorphism**
Polymorphism allows methods in a derived class to override methods in a base class.

```javascript
class Animal {
  sound() {
    console.log("Animal makes a sound");
  }
}

class Cat extends Animal {
  sound() {
    console.log("Meow");
  }
}

const animal = new Animal();
animal.sound(); // Animal makes a sound

const cat = new Cat();
cat.sound(); // Meow
```

### **Abstraction**
Abstraction hides complexity and shows only the essential features. While JavaScript does not have native abstract classes, you can mimic them using base classes.

#### Abstract-like Base Classes

```javascript
class Shape {
  constructor(name) {
    if (this.constructor === Shape) {
      throw new Error("Abstract class cannot be instantiated");
    }
    this.name = name;
  }

  area() {
    throw new Error("Method 'area()' must be implemented");
  }
}

class Circle extends Shape {
  constructor(radius) {
    super("Circle");
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius ** 2;
  }
}

const circle = new Circle(5);
console.log(circle.area()); // 78.54
```

## 2. Prototypes and Prototype Chain

### **Prototype**
Every JavaScript object has a prototype, which acts as a blueprint for creating properties and methods.

### **Prototype Chain**
If an object property/method is not found, JavaScript looks up the prototype chain.

```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

const alice = new Person("Alice");
alice.greet(); // Hello, my name is Alice
console.log(alice.__proto__ === Person.prototype); // true
```

## 3. The `this` Keyword

### **Inside a Method**
The `this` keyword refers to the object that is currently calling a method.

```javascript
const obj = {
  name: "Alice",
  greet: function () {
    console.log(this.name);
  },
};

obj.greet(); // Alice
```

### **Inside a Function**
In strict mode, `this` is `undefined`; otherwise, it refers to the global object (e.g., `window` in browsers).

```javascript
function show() {
  console.log(this);
}
show(); // window (in non-strict mode)
```

### **Arrow Functions**
Arrow functions do not bind their own `this`. Instead, they inherit `this` from the surrounding lexical scope.

```javascript
const obj = {
  name: "Alice",
  greet: () => {
    console.log(this.name); // Undefined (arrow functions do not have their own `this`)
  },
};

obj.greet();
```

## 4. Object Creation Methods

### **Object Literals**

```javascript
const obj = {
  name: "Alice",
  greet: function () {
    console.log(`Hello ${this.name}`);
  },
};
```

### **Constructor Functions**

```javascript
function Car(brand, model) {
  this.brand = brand;
  this.model = model;
}

const car = new Car("Toyota", "Corolla");
console.log(car.brand); // Toyota
```

### **Object.create()**
Creates an object with a specified prototype.

```javascript
const proto = {
  greet: function () {
    console.log("Hello");
  },
};

const obj = Object.create(proto);
obj.greet(); // Hello
```

### **Classes**
The preferred way in modern JavaScript.

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }
}

const person = new Person("Alice");
console.log(person.name); // Alice
```

## 5. Static Methods and Properties

### **Static Method**
Static methods belong to the class, not instances of the class.

```javascript
class MathUtil {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathUtil.add(5, 10)); // 15
```

### **Static Property**

```javascript
class Config {
  static appName = "MyApp";
}

console.log(Config.appName); // MyApp
```

## 6. Mixins
Mixins allow you to "mix in" methods from one object into another.

```javascript
const flyable = {
  fly() {
    console.log("Flying");
  },
};

const swimmer = {
  swim() {
    console.log("Swimming");
  },
};

class Bird {}
Object.assign(Bird.prototype, flyable, swimmer);

const duck = new Bird();
duck.fly(); // Flying
duck.swim(); // Swimming
```

## 7. Object-Oriented Principles in JavaScript Summary

- **Encapsulation**: Group related data and methods into a class.
- **Inheritance**: Reuse functionality through class inheritance.
- **Polymorphism**: Override parent class methods in child classes.
- **Abstraction**: Define abstract-like base classes and hide unnecessary details.

This is a complete overview of OOP in JavaScript. Let me know if you'd like deeper explanations or additional examples on any specific part!
