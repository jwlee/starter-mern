# starter-mern
Starter for MERN stack (Mongo, Express, React, and Node)

Webpack
- To make 'bundle.js', which combined all css, sass, and react javascripts and transform modular code into javascript that browers can understand.


Helpful JavaScript knowledge:
  - var: exist after scope ends.
  - let: only exist in the scope.
  - const: only exist in the scope and not unchangable.

const Component = require('react').Component;
const { Component } = require('react');

exports.i = "hello"
console.log(this); // { i : "hello"}

let util = {
  f1: function (){
    console.log(this);
    // {f1: [Function: f1], f2 [Function: f2] }
  },

  f2: () => {
    console.log(this);
    // { i : "hello"}
    // taking parent's scope of 'this'
  }
}
