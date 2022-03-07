import React from "react";

const MyContext = React.createContext({
    lang: "",
    changeLanguage: () => { },
});

export default MyContext;
