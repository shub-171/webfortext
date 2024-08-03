import React, { useState } from 'react';
import { Analytics } from "@vercel/analytics/react"
import Navbar from './component/Navbar';
import Alert from './component/Alert';
import Form from './component/Form';
import FeaturesSec from './component/FeaturesSec';
import Footer from './component/Footer';

function App() {

  //Dark mode and Light mode
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }
  const toogleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#131313";
      showAlert("Dark mode enabled", "success");
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled", "success");
    }
  }

  return (
    <>
      <Navbar title="WebForText" mode={mode} toogleMode={toogleMode} />
      <Alert alert={alert} />
      <Form mode={mode} />
      <FeaturesSec mode={mode} />
      <Footer mode={mode} />
    </>
  );
}

export default App;