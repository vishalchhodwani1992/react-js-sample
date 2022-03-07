import React from "react";
import { useSelector } from "react-redux";
import './Header.css'

export default function Header() {
    
    console.log("Header render");

    const headerData = useSelector((state) => state.headerData);
    console.log("Header:logData==", headerData);

    return (
        <div className="header-container">
            <h2 className="header-text">User: {headerData.name}</h2>
        </div>
    );
};