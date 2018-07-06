"use strict";

console.log("app is running");
var template = React.createElement(
  "h1",
  null,
  "Hello World"
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
