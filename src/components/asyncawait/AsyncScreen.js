import '../../App.css';
import React from "react";

export default function AsyncScreen() {

    function mPromise() {

        const promise = new Promise((resolve, reject) => {
            setTimeout(()=> resolve({isSuccess: true}), 2000)
        });

        promise.then((res)=> {
            console.log("res==", res)
        });
        promise.catch((error)=> {
            console.log("error==", error)
        })
    }

    return (
        <div className="App">
            <header className="App-header">
                Async Screen
                <button onClick={() => mPromise()}>Test Promise</button>
            </header>
        </div>
    );
}