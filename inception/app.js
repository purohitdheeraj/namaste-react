import React from "react";
import ReactDOM from "react-dom/client";

// javascript syntax extension
// jsx is html like syntax in javascript not html
// more of XML

// React Element
function App(){
  return <>
    <h1>Hello World</h1>
  </>
}


// const element = React.createElement('div', {className: 'container'}, 'Hello World');
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App/>);