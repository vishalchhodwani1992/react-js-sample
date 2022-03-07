import '../../App.css';
import React, { useCallback, useMemo, useState, useRef } from "react";
import ChildComponent from './ChildComponent';

export default function OptimizationScreen(props) {

    let [counter, setCounter] = useState(0);
    const [todos, setTodos] = useState([]);

    const calculation = useMemo(() => expensiveCalculation(counter), [counter]);

    // const calculation = expensiveCalculation(counter);

    const memoizationTestFunc = () => {
        setCounter(++counter);
    }

    // const addTodo = () => {
    //     setTodos((t) => [...t, "New Todo, "]);
    // };

    const addTodo = useCallback(() => {
        setTodos((t) => [...t, "New Todo"]);
    }, [todos]);

    function expensiveCalculation (num) {
        console.log("Calculating...");
        for (let i = 0; i < 10000; i++) {
            num += 1;
        }
        return num;
    };

    return (
        <div className="App">
            <header className="App-header">
                Optimization Screen
                <button onClick={memoizationTestFunc}>Increment Counter</button>
                <span>calculated value: {calculation}</span>
                <ChildComponent todos={todos} addTodo={addTodo} />
            </header>
        </div>
    );
}