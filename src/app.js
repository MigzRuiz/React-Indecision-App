console.log("app is running");

var app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer",
    options: ["one", "two"]
}

var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{(app.subtitle && app.options) && app.subtitle}</p>
        <p>{app.options.length > 0 ? app.options : "N/A"}</p>
    </div>
);


var appRoot = document.getElementById("app");

ReactDOM.render(template,appRoot);