import React, { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import Alert from './Components/Alert';
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";

function App() {

    const [mode, setMode] = useState('light'); //Whether dark mode is enabled or not
    const [alert, setAlert] = useState(null);

    const showAlert = (message, type)=> {
            setAlert({
                msg: message,
                type: type
            })
            setTimeout(() => {
                setAlert(null);
            }, 1500);
    }

    const toggleMode1 = ()=>{
        if(mode === 'light'){
            setMode('gray');
            document.body.style.backgroundColor = 'rgb(179 181 184)';
            showAlert("Gray mode has been enabled", "success");
        }
        else{
            setMode('light');
            document.body.style.backgroundColor = 'white'
            showAlert("Light mode has been enabled", "success");
        }
    }

    const toggleMode = ()=>{
        if(mode === 'light'){
            setMode('dark');
            document.body.style.backgroundColor = 'rgb(17 39 65)';
            showAlert("Dark mode has been enabled", "success");
        }
        else{
            setMode('light');
            document.body.style.backgroundColor = 'white'
            showAlert("Light mode has been enabled", "success");
        }
    }

    return (
        <>
        <Router>
            <Navbar title="Textutils" aboutText="About" mode={mode} toggleMode={toggleMode} toggleMode1={toggleMode1} />
            <Alert alert={alert}/>
         <div className="container my-3">
        <Routes>
            <Route path="/about" element={<About mode={mode}/>} />
            <Route path="/textform" element={<Textform showAlert={showAlert} heading="Try TextUtils - Word counter, Character counter, Text to Speech" mode={mode}/>} />
        </Routes>
         </div>
        </Router>
        </>
    );
}

export default App;