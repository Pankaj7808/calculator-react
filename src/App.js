import './App.css';
import React, {useState} from 'react'
import Calculator from './components/Calculator';

function App() {

  const [isDarkMode, setMode] = useState(true);

  return (

     <div className={`App ${isDarkMode ? 'dark-app' : 'light-app'}`}>
      <Calculator isDarkMode={isDarkMode} setMode={setMode} />
    </div>
  );
}

export default App;
