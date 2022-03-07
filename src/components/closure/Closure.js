import '../../App.css';
import React from "react";

export default function Closure() {

    function debounce(delay) {
        console.log("debounce called...");

        let timeout;
        return function () {     //anonymous function
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                console.log("API calling...");
            }, delay);
        }
    };

    const search = debounce(3000);

    function throttling(delay) {
        console.log("throttling called...");

        let isAPIcalled = false;
        let localCounter = 0;
        return function () {     //anonymous function
            console.log("button clicked...", ++localCounter);
            if(!isAPIcalled){
                isAPIcalled = true;
                // setCounter(++counter);
                console.log("API calling...");

                setTimeout(() => {
                    isAPIcalled = false;
                    console.log("throttling closed...");
                }, delay);
            }
        }
    };

    const throttle = throttling(3000);

    return (
        <div className="App">
            <header className="App-header">
                Debouncing/Throttling and Closure Screen
                <button onClick={search}>Debounce Test</button>
                <button onClick={throttle}>Throttle Test</button>
            </header>
        </div>

    );
}