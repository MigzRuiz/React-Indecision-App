"use strict";

console.log("app is running");

var app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer",
    options: ["one", "two"]
};

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        app.title
    ),
    React.createElement(
        "p",
        null,
        app.subtitle && app.options && app.subtitle
    ),
    React.createElement(
        "p",
        null,
        app.options.length > 0 ? app.options : "N/A"
    )
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
