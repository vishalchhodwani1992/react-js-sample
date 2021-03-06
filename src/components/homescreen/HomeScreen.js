import '../../App.css';
import React from "react";
import { useNavigate } from 'react-router-dom';

function HomeScreen() {
    const navigate = useNavigate();

    function redirect(to) {
        navigate(to);
    }

    return (
        <div className="App">
            <header className="App-header">
                Home Screen
                <button onClick={() => redirect("/optimization")}>Go to Optimization</button>
                <button onClick={() => redirect("/closure")}>Go to Closure</button>
                <button onClick={() => redirect("/redux")}>Go to Redux</button>
                <button onClick={() => redirect("/async")}>Go to AsyncScreen</button>
                <button onClick={() => redirect("/functions")}>Go to FunctionScreen</button>
            </header>
        </div>
    );
}

export default HomeScreen;