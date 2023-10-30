import React from "react";
import ReactDom from "react-dom";

function Greeting() {
  return (
    <div>
      <Message/>
      <Person/>
    </div>
  );
}

const Person = () => <h2>joao</h2>;
const Message = () =>{
  return <p>This is my message</p>
}
ReactDom.render(<Greeting />, document.getElementById("root"));
