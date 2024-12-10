import React from "react";
import ReactDOM from "react-dom/client";

// props can be passed as an object to the createElement function
// props can be default props or custom props


// here hare krishna is also a prop
const element = React.createElement('h1', {id: 'heading'}, "hare krisha hare rama");

const parent = React.createElement('div',{id: 'parent'}, React.createElement('div',{id: 'child'}, [React.createElement('h1',{id: 'heading'}, 'i am h1 tag'),React.createElement('h2',{id: 'parent'}, 'hare krishna')]) )

console.log(parent)

const root  = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
