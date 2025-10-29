import React, { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  const [isOn, setIsOn] = useState(false);

  const toggleFlashlight = () => {
    const elem = document.documentElement;

    // Enter full screen on first tap
    if (!document.fullscreenElement) {
      if (elem.requestFullscreen) elem.requestFullscreen();
      else if (elem.webkitRequestFullscreen) elem.webkitRequestFullscreen(); // Safari
      else if (elem.msRequestFullscreen) elem.msRequestFullscreen(); // IE11
    }

    setIsOn(!isOn);
  };

  const backgroundColor = isOn ? "#ffffff" : "#000000";
  const textColor = isOn ? "#000000" : "#ffffff";

  return (
    <motion.div
      className="flashlight"
      style={{
        backgroundColor,
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "background-color 0.3s ease",
      }}
      onClick={toggleFlashlight}
    >
      <motion.h1
        style={{
          color: textColor,
          fontSize: "2.5rem",
          fontFamily: "Poppins, Arial, sans-serif",
          userSelect: "none",
          textTransform: "uppercase",
          letterSpacing: "2px",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {isOn ? "Lights ON" : "Lights OFF"}
      </motion.h1>
    </motion.div>
  );
}

export default App;
