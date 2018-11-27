# Building Cells: Classes and Instances

## Learning Goals

- Identifies the creation of `class` instances using `constructor`
- State the definition of instance properties

## Introduction

In Object Orientated JavaScript, objects share a similar structure, the `class`.
Each `class` has the ability to generate copies of itself, referred to as
_instances_. Each of these `class` instances can contain unique data, often
set when the instance is created.

In this lesson, we are going to take a closer look `class` syntax, instance
creation and how to use the `constructor`.

## A Basic `class`

The `class` syntax was introduced in [ECMAScript 2015][ecma] and it's important
to note that the `class` keyword is just syntactic sugar, or a nice abstraction,
over JavaScript's existing prototypal object structure.

> Reminder: All JavaScript objects inherit properties and methods from a
> `prototype`. This includes standard objects like functions and data types.

A basic, empty class can be written:

```js
class Fish {}
```

With only a name and brackets, we can now create instances of the 'Fish' `class`
by using `new`:

```js
let fish = new Fish();
let fishTwo = new Fish();

fish; // => Fish {}
fishTwo; // => Fish {}

fish == fishTwo; // => false
```

These two fish are unique `class` instances, even though they have no
information encapsulated within them.

## Using the `constructor`

Typically, when we create an instance of a `class`, we want it to contain some
bit of unique information. To do this, we use a special method, `constructor`.

```js
class Fish {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
}
```

The `constructor` method allows us pass arguments in when we use the `new`
syntax:

```js
let fish = new Fish('George', 3);
let fishTwo = new Fish('Clyde', 1);

fish; // => Fish { name: 'George', age: 3 }
fishTwo; // => Fish { name: 'Clyde', age: 1 }
```

Now our instances are each carrying unique data. It is possible to add and
change data using other means _after_ an instance is created using custom
methods, but the `costructor` is where any initial data is defined.

## Assigning Instance Properties

We see that our fish have data, but what is happening exactly inside the
`constructor`?

```js
constructor(name, age) {
  this.name = name;
  this.age = age
}
```

Two arguments, `name` and `age` are passed in and then assigned to something
new: `this`.

For now, think of `this` as a reference to the object it is inside. Since we're
calling `constructor` when we create a new instance (`new Fish('George', 3)`),
`this` is referring to the _instance we've created_. _This_ fish.

In `class` methods, `this` acts very similar to Ruby's `@` symbol - it is used
to define attributes. _This fish_ has a name and age. In JavaScript, these
attributes are referred to as instance properties.

> There is more to `this` than meets the eye, and we will go into more detail
> later on.

## Accessing Instance Properties

By using `this.name` and `this.age` to define properties in our `contructor`, we
can now access those properties directly from the object:

```js
let fish = new Fish('George', 3);

fish.name; //=> 'George'
fish.age; //=> 3
```

We can also refer to these properties within other methods of our `class`:

```js
class Fish {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	sayName() {
		return `Hi my name is ${this.name}`;
	}
}
```

This allows us to return dynamic information based on the unique properties
we assigned back when an instance was created. Another example:

```js
class Square {
	constructor(sideLength) {
		this.sideLength = sideLength;
	}

	area() {
		return this.sideLength * this.sideLength;
	}
}

let square = new Square(5);
square; // => Square { sideLength: 5 }
square.sideLength; // => 5
square.area(); // => 25
```

## Conclusion

So, to recap, we can define a `class` simply by writing `class`, a name, and a
set of curly brackets. We can then use this `class` to create unique instances.
These instances can contain their own data, which we typicaly set using
`constructor`, passing in arguments and assigning them to properties we've
defined. With these properties, instances can carry data around with them
wherever they go.

## Resources

- [Classes]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

[ecma]: https://www.w3schools.com/js/js_es6.asp