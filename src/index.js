import React from "react";
import ReactDom from "react-dom";

function Greeting() {
  return (
    <div>
      <h1>hello world</h1>
      <h2>joao</h2>
    </div>
  );
}
// const Greeting = ()=>{
//   return React.createElement('h1',{},'hello world')
// }
ReactDom.render(<Greeting />, document.getElementById("root"));
