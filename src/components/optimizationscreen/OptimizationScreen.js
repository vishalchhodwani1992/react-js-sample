import '../../App.css';
import React, { useCallback, useMemo, useState } from "react";
import ChildComponent from './ChildComponent';

export default function OptimizationScreen(props) {

    let [counter, setCounter] = useState(0);
    const [todos, setTodos] = useState([]);

    const calculation = useMemo(() => expensiveCalculation(counter), [counter]);
    console.log("calculation==", calculation);
    // uncomment to see difference with/without useMemo
    // const calculation = expensiveCalculation(counter);

    // comment to see difference with/without useMemo
    const memoizationTestFunc = () => {
        setCounter(++counter);
    }

    // uncomment to see difference useCallback/useCallback useMemo
    // const addTodo = () => {
    //     setTodos((t) => [...t, "New Todo, "]);
    // };

    // comment to see difference useCallback/useCallback useCallback
    const addTodo = useCallback(() => {
        console.log("useCallback called...");
        setTodos([...todos, "New Todo"]);
    }, [todos]);
    console.log("addTodo==", addTodo);

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