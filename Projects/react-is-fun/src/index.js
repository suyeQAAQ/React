import React from "react";
import ReactDOM from "react-dom";

const bookList = [
  { title: "Harry Potter", pages: "100000", author: "J.K" },
  { title: "Harry Potter II", pages: "100000", author: "J.K" },
  { title: "Harry Potter III", pages: "100000", author: "J.K" },
];

const Library = ({ books }) => {
  return books.map((book) => (
    <Book title={book.title} pages={book.pages} author={book.author} />
  ));
};

const Book = ({ title, author, pages }) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>by: {author}</p>
      <p>Pages: {pages}</p>
    </section>
  );
};

// compponent must start with upper case
class Message extends React.Component {
  render() {
    return (
      <div>
        <h1 style={{ color: this.props.color }}>{this.props.msg}</h1>
        <p>I got {this.props.minutes} minutes</p>
      </div>
    );
  }
}

// const SkiDayCounter = (props) => {
//   return(
//     <section>
//   </section>
//   )
// }

// class SkiDayCounter extends React.Component{
//   render(){
//     const {total, powder, backcountry, goal} = this.props
//     return (
//       <section>
//         <div>
//     <p>Totoal Days: {total}</p>
//         </div>
//         <div>
//     <p>Powder Days: {powder}</p>
//         </div>
//         <div>
//     <p>Backcountry Days: {backcountry}</p>
//         </div>
//         <div>
//     <p>Goal Days: {goal}</p>
//         </div>
//       </section>
//     )
//   }
// }
const skiData = {
  total: 50,
  powder: 20,
  backcountry: 10,
  goal: "50%",
};

ReactDOM.render(
  // <Message color="blue" msg="This is an argument" minutes={5} />,
  //<SkiDayCounter total={skiData.total} powder={skiData.powder} backcountry={skiData.backcountry} goal={skiData.goal} />,
  <Library books={bookList} />,
  document.getElementById("root"),
);

var style = {
  backgroundColor: "orange",
  color: "white",
  fontFamily: "Arial",
};

// const title = React.createElement(
//   "ul",
//   { id: "title", className: "header", style: style },
//   React.createElement(
//     'li',
//     {},
//     'item on our list'
//   )
// );

// ReactDOM.render(title, document.getElementById("root"));

// ReactDOM.render(
//   <div style={style}>
//     <ul>
//       <li>one element</li>
//       <li>one element</li>
//     </ul>
//   </div>,
//   document.getElementById("root"),
// );
