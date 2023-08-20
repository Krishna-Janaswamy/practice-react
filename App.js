import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement("h1", {}, "Hello world react");
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { key: 1, id: "child1" },
    React.createElement("h1", { id: "child-h1" }, "Hello world react 🤘")
  ),
  // React.createElement(
  //   "div",
  //   { key: 2, id: "child2" },
  //   React.createElement("h1", { id: "child-h2" }, "Hello world react")
  // ),
]);


console.log(parent, "heading");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent)
