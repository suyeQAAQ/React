---
description: Basic knowledge regarding React.js
---

# React-Basic

#### Scope of var, let and const

* `var`: Function in which the variable is declared
* `let`: Block in which the variable is declared
* `const`: Block in which the variable is declared

 While `let` is usually used in a `for` loop for incrementing the iterator, `const` is normally used for keeping JavaScript variables unchanged. Even though it is possible to change the inner properties of objects and arrays when using `const`, the variable declaration shows the intent of keeping the variable unchanged.

**Unary Operators**

* `typeof`: Returns the type of the given operand\(操作数\)
* `delete`: Deletes an object, object’s attribute or an instance in an array
* `void`: Specifies that an expression does not return anything

#### Spread Operator

* You can easily add some elements in the middle of the two arrays: `[...a, 'something', ...b];`
* It’s simpler to use and also gives you a visual idea of what your array looks like.
* You can clone arrays using this operator: `clone = [...a];`
* In React, you can combine two objects using Spread Operator and add extra properties to that object too. Let’s say we have two objects `a` and `b`, we can combine these two objects and create a new one with all the properties present in both objects. See the example below:

```javascript
const person = { name: "Jhon"};
const student = { ID: "21", GPA: "3.0"};

const new_object = { ...person, ...student, semester: '3'};
console.log(new_object);
//{ name: 'Jhon', ID: '21', GPA: '3.0', semester: '3' }
```

#### Generator Function Declaration

The **`function*`** declaration \(`function` keyword followed by an asterisk\) defines a _generator function_, which returns a [`Generator`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator) object.

```javascript
function* generator(i) {
  yield i;
  yield i + 10;
}

const gen = generator(10);

console.log(gen.next().value);
// expected output: 10

console.log(gen.next().value);
// expected output: 20
```

#### Higher-Order Functions

Basically, a Higher-Order function is a function which returns a function.

```javascript
import React from 'react';

function doFilter(query) {
  return function (user) {
    return query === user.name;
  }
}

export default class App extends React.Component {

  constructor(props){
    super(props);  
    
    this.state = {
    query: '',
    };
    
    this.onChange=this.onChange.bind(this);
  }
  
  onChange(event) {
    this.setState({ query: event.target.value });
  }
  
  render() {
  const users = [
      { name: 'Robin' },
      { name: 'Markus' },
    
    ];
    return (
      <div>
        <ul>
          { users
            .filter(doFilter(this.state.query))
            .map(myuser => <li>{myuser.name}</li>)
          }
        </ul>
        <input
          type="text"
          onChange={this.onChange}
        />
      </div>
    );
  }
}
```

We can make it more concise by using arrow function

```javascript
const doFilter = query => user =>
   query === user.name;
```



### JS Classes

#### Explicit Binding <a id="explicit-binding"></a>

Unlike implicit binding, where the function is part of the object, ​and so it becomes obvious what `this` is, standalone functions can be _bound_ explicitly to objects at call time.

#### `call()` & `apply()` <a id="call-apply"></a>

 Consider the code block below. The function, `printName()` is bound explicitly to the `me` object of the `Developer` class on _line 15_ using the `call()` function. Furthermore, if `printName()` is called without any object bound to it, as on _line 18_ it prints the first and last names as undefined because `this` _is_ undefined. Arguments can be passed to a function using `call()` as on _line 28_. However, if you do not want to pass each argument individually and instead pass all your arguments as an array, you can use the `apply()` function as on _line 31_.

```javascript
class Developer {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
}

var printName = function() {
  console.log(`My name is ${this.firstname} ${this.lastname}`);
};

var me = new Developer('Robin', 'Wieruch');

// '.call()' can be used to explicitly bind a function to an object
printName.call(me);

// printName() is not bound to an object so 'this' is undefined
printName();

var printInfo = function(lang1, lang2, lang3) {
  console.log(`My name is ${this.firstname} ${this.lastname} and I know ${lang1}, ${lang2}, and ${lang3}`);
}

// Create an array of languages
languages = ['Javascript','C++', 'Python'];

// Pass each argument individually by indexing the array
printInfo.call(me, languages[0], languages[1], languages[2]);

// Pass all the arguments in one array to .apply()
printInfo.apply(me, languages);
```

#### `bind()` <a id="bind"></a>

```javascript
class Developer {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
}

var printName = function() {
  console.log(`My name is ${this.firstname} ${this.lastname}`);
};

var me = new Developer('Robin', 'Wieruch');

// Here we bind the me object to the printName() function and get a new function called newPrintName()
const newPrintName = printName.bind(me);

// bound newPrintName() prints appropriately
newPrintName();

// unbound printName() prints undefined
printName();
```

#### New Binding <a id="new-binding"></a>

 `this` can be defined explicitly within a function as it can be in a class. Consider the code block below. Try experimenting with the values of `this.firstname` and `this.lastname` in the `printInfo` function and see what happens.

```javascript
var printInfo = function(firstname, lastname, lang1, lang2, lang3) {
  this.firstname = firstname;
  this.lastname = lastname;
  console.log(`My name is ${this.firstname} ${this.lastname} and I know ${lang1}, ${lang2}, and ${lang3}`);
}

languages = ['Javascript','C++', 'Python'];
printInfo('Robin', 'Wieruch', languages[0], languages[1], languages[2]);
//My name is Robin Wieruch and I know Javascript, C++, and Python
```

#### Advantages of composition over inheritance

* Class taxonomy does not have to be defined in advance. This makes the code dynamic and adaptable to change.
* Since lesser changes will have to be made in the code, it will also introduce fewer bugs.
* The code is more reusable



**Notes**: 

JavaScript classes are basically objects. Because classes are syntactic sugar over constructor functions and well, functions are basically objects.

 ES6 does support _overriding_.

The data is passed to a component through Props

 As `setState` method invokes `render()` so calling `setState()` inside `render()` method would cause it to get stuck in a loop!

JSX is a type-safe language



## State in React

The core of every React component is its state. The state determines what the component looks like, and you can update that as you go. The entire page won’t reload if a component’s state is updated only the component will - hence, it allows you to create pages that are dynamic and interactive.

React provides the `setState()` method that you can use to update state.

`setState()` does not _immediately_ update your component. React may decide to update it later in a batch with a bunch of other components. If you want to check if your component has updated, you can use the `componentDidMount()` method

#### A shorter way of defining a React class

```javascript
import React from 'react';

export default class Counter extends React.Component {
  state = {
    counter: 0,
  };

  onIncrement = () => {
    this.setState(state => ({ counter: state.counter + 1 }));
  }

  onDecrement = () => {
    this.setState(state => ({ counter: state.counter - 1 }));
  }


  
  render() {
    return (
      <div>
        <p>{this.state.counter}</p>

        <button onClick={this.onIncrement} type="button">Increment</button>
        <button onClick={this.onDecrement} type="button">Decrement</button>
      </div>

    );
  }
}

```



