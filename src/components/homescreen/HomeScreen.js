import '../../App.css';
import React from "react";
import { useNavigate } from 'react-router-dom';

function HomeScreen(props) {
    const navigate = useNavigate();

    function redirect(to) {
        navigate(to);
    }

    return (
        <div className="App">
            <header className="App-header">
                Home Screen
                <button onClick={() => redirect("/closure")}>Go to Closure</button>
            </header>
        </div>
    );
}

export default HomeScreen;