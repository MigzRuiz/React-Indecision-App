import React from "react";
import ReactDOM from "react-dom";
import IndecisionApp from "./components/IndecisionApp";

ReactDOM.render(<IndecisionApp/>, document.getElementById("app"));


//Oldsyntax
class OldSyntax {
    constructor(){
        this.name = "mike";
    }
}

const OldSyntax1 = new OldSyntax();
console.log(OldSyntax1);


class NewSyntax {
    name = "Jens";
}

const newSyntax = new NewSyntax();

console.log(newSyntax);
