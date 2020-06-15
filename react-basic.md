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



