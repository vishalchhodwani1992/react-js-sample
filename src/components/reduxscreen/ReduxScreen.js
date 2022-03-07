import '../../App.css';
import React from "react";

import { useNavigate } from 'react-router-dom';
import { hideMessage, showMessage } from '../../slices/logSlice'
import { useDispatch, useSelector } from 'react-redux';

export default function ReduxScreen(props) {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const logData = useSelector((state) => state.log);

    console.log("ReduxTest==", logData.show, props);

    function redirect(to) {
        navigate(to);
    }

    function testRedux(){
        if (logData.show) {
            dispatch(hideMessage());
        }
        else{
            dispatch(showMessage("My log 1==="));
        }
    }

    return (
        <div className="App">
            <header className="App-header">
                Redux Screen
                <button onClick={() => redirect("/")}>Go to Home</button>
                <button onClick={() => testRedux()}>Test Redux</button>
            </header>
        </div>
    );
}