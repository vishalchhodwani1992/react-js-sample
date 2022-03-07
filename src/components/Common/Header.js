import React from "react";
import { useSelector } from "react-redux";
import MyContext from "../../utils/MyContext";
import './Header.css'

export default function Header(props) {
    const value = React.useContext(MyContext);

    console.log("Header render", value);

    const headerData = useSelector((state) => state.headerData);
    console.log("Header:logData==", headerData);

    return (
        <div className="header-container">
            <div className="header-text-left">
                <span>Context Language: {value.lang} </span>
                <button onClick={() => value.changeLanguage(value.lang === "english" ? "french" : "english")}>Toggle Language</button>
            </div>
            <h2 className="header-text-right">Redux User: {headerData.name}</h2>
        </div>
    );
};