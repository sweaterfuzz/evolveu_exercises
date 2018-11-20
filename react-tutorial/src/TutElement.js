import React from 'react';
import ReactDOM from 'react-dom';

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

// ------------- JSX ----------------- //

/* After compilation, JSX expressions become regular JavaScript 
function calls and evaluate to JavaScript objects.

This means that you can use JSX inside of if statements and for loops, 
assign it to variables, accept it as arguments, and return it from functions:
*/
function getGreeting(user) {
    if (user) {
      return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
}
  
const user = {
    firstName: 'Harper',
    lastName: 'Perez'
};


// Using JSX - a mix of JS and HTML
const element = (
    <div>
    {getGreeting(user)}
    </div>
);

// use quotes for string values or curly braces for expressions
// const element = <div tabIndex="0"></div>;
// const element = <img src={user.avatarUrl}></img>;

// ------------- OBJECTS AND ELEMENTS ----------------- //

/* JSX represents objects: 
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);

Is the same as: 

const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);

Essentially, React creates object elements like:
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
};

These objects then construct the DOM.
Elements are the smallest building blocks of React apps.
React only updates elements that have changed since the last
render. (Render can be part of a timed/recurring function call).
*/

export default element;