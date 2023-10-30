import React from "react";
import ReactDom from "react-dom";
import './index.css';


function BookList() {
  return (
    <section className="bookList">
      <Book/>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}
const Book = () => {
  return <article>
    <Image/>
    <Title></Title>
    <Author></Author>
  </article>
}
const Image = () => (<img className="imagem" src="https://images-na.ssl-images-amazon.com/images/I/81t-IstQ+ZL._AC_UL600_SR600,400_.jpg"/>)

const Title = () => <h1>Goodnight Moon</h1>

const Author = () => <h4>Margaret Wise Brown</h4>

ReactDom.render(<BookList />, document.getElementById("root"));
