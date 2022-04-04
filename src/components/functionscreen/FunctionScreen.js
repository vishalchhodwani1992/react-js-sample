import '../../App.css';
import React from "react";

export default function FunctionScreen() {

    function functions() {

    }

    const person1 = {
        firstName: "John",
        lastName: "Doe",
        fullName: function () {
            return this.firstName + " " + this.lastName;
        }
    }

    const person2 = {
        firstName: "Mary",
        lastName: "Doe"
    }

    let fullName = person1.fullName.bind(person2);

    return (
        <div className="App">
            <header className="App-header">
                Function Screen
                <span>Name: {person1.fullName()}</span>
                <span>Name: {person1.fullName.apply(person2)}</span>
                <span>Name: {person1.fullName.call(person2)}</span>
                <span>Name: {fullName()}</span>
                <button onClick={() => person1.fullName()}>Test Function</button>
            </header>
        </div>
    );
}