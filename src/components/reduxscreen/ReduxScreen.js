import '../../App.css';
import React from "react";

import { useNavigate } from 'react-router-dom';
import { updateName, deleteName } from '../../slices/headerSlice'
import { useDispatch, useSelector } from 'react-redux';
import { getApi } from '../../slices/asyncSlice';


export default function ReduxScreen(props) {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const headerData = useSelector((state) => state.headerData);
    const apiData = useSelector((state) => state.apiData);
    console.log("apiData==", apiData);

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

    function callAPI(){
        let request = {
            delay: 3000
        }
        dispatch(getApi(request));
    }

    return (
        <div className="App">
            <header className="App-header">
                Redux Screen
                <button onClick={() => redirect("/")}>Go to Home</button>
                <button onClick={() => testRedux(false)}>Update Name</button>
                <button onClick={() => testRedux(true)}>Delete Name</button>
                <button onClick={() => callAPI()}>Call API</button>
            </header>
        </div>
    );
}