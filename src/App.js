import React, { useState } from 'react';
import './App.css';
import NavigationRouter from './components/NavigationRouter'
import MyContext from './utils/MyContext';

function App() {
  const [language, setLanguage] = useState("english");

  let contextData = {
    lang: language,
    changeLanguage: (lang) => setLanguage(lang)
  }
  
  return (
    <MyContext.Provider value={contextData}>
      <div className="App">
        <NavigationRouter />
      </div>
    </MyContext.Provider>
  );
}

export default App;
