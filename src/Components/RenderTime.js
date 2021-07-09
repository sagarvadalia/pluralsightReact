import ReactDOM from 'react-dom'
import React from 'react'

const RenderTime = () => {
  document.getElementById('root2').innerHTML = `
    <div>
      Hello HTML
      <input />
      <pre>${(new Date()).toLocaleTimeString()}</pre>
    </div>
  `;

  ReactDOM.render(
    React.createElement(
      'div',
      null,
      'Hello React',
      React.createElement("input", null),
      React.createElement("pre", null, (new Date()).toLocaleTimeString())
    ),
    document.getElementById('root3'),
  );
}
export default RenderTime
