import '../../App.css';
import React from "react";

import { useNavigate } from 'react-router-dom';
import { updateName, deleteName } from '../../slices/headerSlice'
import { useDispatch, useSelector } from 'react-redux';


export default function ReduxScreen(props) {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const headerData = useSelector((state) => state.headerData);
    console.log("ReduxScreen==", headerData);

    function redirect(to) {
        navigate(to);
    }

    function testRedux(isDelete){
        if (isDelete) {
            dispatch(deleteName());
        }
        else{
            let msg = {
                name: "User " + (Math.floor(Math.random() * 100) + 1)
            }
            dispatch(updateName(msg));
        }
    }

    return (
        <div className="App">
            <header className="App-header">
                Redux Screen
                <button onClick={() => redirect("/")}>Go to Home</button>
                <button onClick={() => testRedux(false)}>Update Name</button>
                <button onClick={() => testRedux(true)}>Delete Name</button>
            </header>
        </div>
    );
}