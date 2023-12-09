import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./appstyles";
import toggleCaseImg from "./images/toggleCase.png";
import Remote from "./component/Remote";
import Modal from "./component/Modal";
import "./App.css";
import Footer from "./component/Footer";
import RokuChannels from "./component/RokuChannels";
import RokuDeviceInfo from "./component/RokuDeviceInfo";

const App = () => {
  const [ipAddress, setIpAddress] = useState("172.20.0.10");
  const [connectionStatus, setConnectionStatus] = useState(null);
  const [isUpperCase, setIsUpperCase] = useState(true);
  const [enableKeyboard, setEnableKeyboard] = useState(false);
  const [enableOnScreenKeyboard, setEnableOnScreenKeyboard] = useState(false);
  const [enableRemote, setEnableRemote] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalHeader, setModalHeader] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [modalMetaInfo, setModalMetaInfo] = useState("Roku Remote v0.1.0");

  useEffect(() => {
    if (enableKeyboard) {
      showInfoMessage("System Keyboard is ON");
    }
    const handleKeyPress = (e) => {
      if (enableKeyboard && connectionStatus === "success") {
        e.preventDefault(); // Prevent default behavior (e.g., scrolling)
        
        sendLaptopKeyboardRequest(e.key);
        showInfoMessage("System Keyboard is ON", e.key, modalMetaInfo);
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
    // eslint-disable-next-line
  }, [enableKeyboard]);

  // System keyboard
  const sendLaptopKeyboardRequest = async (key) => {
    try {
      const keypressValue = getKeyPressValue(key);
      window.alert(keypressValue)
      await axios.post(`http://${ipAddress}:8060/keypress/${keypressValue}`);
      
    } catch (error) {
      // console.error('Error sending request:', error);
    }
  };
  const keyMapping = {
    Escape: "Back",
    ArrowUp: "Up",
    ArrowDown: "Down",
    ArrowLeft: "Left",
    ArrowRight: "Right",
    Control: "Home",
    Space: 'Lit_%20',
    // 'Rev',
    // 'Fwd',
    //  'Play',
    // 'Mic',
    // 'InstantReplay',
    // 'Info',
    Backspace: "Backspace",
    Enter: "Enter",

  };

  const getKeyPressValue = (key) => {
    return keyMapping[key] || `Lit_${key}`;
  };

  // Modal
  const showInfoMessage = (header, message) => {
    setModalHeader(header);
    setModalMessage(message);
    setModalMetaInfo("press space + esc  to exit");
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEnableKeyboard(false);
  };

  const checkConnection = () => {
    axios
      .get(`http://${ipAddress}:8060/`)
      .then(() => {
        setConnectionStatus("success");
      })
      .catch(() => {
        setConnectionStatus("error");
      });
  };

  // Roku Remote
  const handleRemoteButtonClick = (keypressValue) => {
    if (connectionStatus === "success") {
      if ("vibrate" in navigator) {
        navigator.vibrate(30);
      }
      axios
        .post(`http://${ipAddress}:8060/keypress/${keypressValue}`)
        .then(() => {
          // Handle success if needed
        })
        .catch((error) => {});
    }
  };

  // OnScreen Keyboard
  const generateKeyboardButtons = () => {
    const characters = isUpperCase
      ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=[]{}|;:,.<>?"
      : "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=[]{}|;:,.<>?";

    return characters.split("").map((char) => (
      <button
        key={char}
        onClick={() => handleRemoteButtonClick(`Lit_${char}`)}
        disabled={!connectionStatus === "success"}
        style={styles.keyboardButton}
      >
        {char}
      </button>
    ));
  };

  const getToggleCaseButtonStyle = (condition) => {
    return condition
      ? {
          backgroundColor: "#3498db",
          color: "#fff",
          border: "none",
          backgroundImage: toggleCaseImg,
        }
      : {
          backgroundColor: "#ecf0f1",
          border: "none",
        };
  };

  const toggleCase = () => {
    setIsUpperCase(!isUpperCase);
  };

  const toggleKeyboard = () => {
    if (connectionStatus === "success") {
      setEnableKeyboard(!enableKeyboard);
    } else {
      setEnableKeyboard(false);
    }
  };
  const toggleRemote = () => {
    if (connectionStatus === "success") {
      setEnableRemote(!enableRemote);
    } else {
      setEnableRemote(false);
    }
  };

  const handleFunctinalStroke = async (key) => {
    if ("vibrate" in navigator) {
      navigator.vibrate(70);
    }
    handleRemoteButtonClick(key)
  };

  const handleDeeplink = async (key) => {
    if ("vibrate" in navigator) {
      navigator.vibrate(10);
    }
    try {
      await axios.post(`http://${ipAddress}:8060/launch/dev/contentId=${key}`);
    } catch (error) {}
  };

  return (
    <>

      <div style={styles.container}>
        <div style={styles.inputContainer}>
          <div>
            <form className="row g-3">
              <label htmlFor="ipAddress" className="form-label">
                Enter Roku's ip address
              </label>
              <div className="col-auto">
                <input
                  type="text"
                  value={ipAddress}
                  className="form-control"
                  onChange={(e) => setIpAddress(e.target.value)}
                  id="ipAddress"
                  placeholder={ipAddress}
                />
              </div>
              <div className="col-auto">
                <button
                  onClick={checkConnection()}
                  className={
                    connectionStatus === "success"
                      ? "btn btn-success mb-3"
                      : "btn btn-primary mb-3"
                  }
                  disabled={connectionStatus === "success"}
                >
                  Connect
                </button>
              </div>
            </form>
          </div>
          {connectionStatus && (
            <div style={styles.connectionStatus}>
              Connection Status:{" "}
              {connectionStatus === "success" ? "Connected" : "Error"}
            </div>
          )}
        </div>
        {/* <RokuDeviceInfo ipAddress={ipAddress}/> */}


        

        <div
          className="btn-group"
          role="group"
          aria-label="Basic outlined example"
        >
          <button
            type="button"
            className="mobile-buttons btn btn-outline-primary"
          >
            TextBox
          </button>
          <button
            type="button"
            className="laptop-buttons btn btn-outline-primary"
            onClick={toggleKeyboard}
            disabled={!connectionStatus === "success"}
          >
            {enableKeyboard
              ? "Disable system Keyboard"
              : "Enable system Keyboard"}
          </button>
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={toggleRemote}
            disabled={!connectionStatus === "success"}
          >
            {enableRemote ? "Hide Remote" : "Show Remote"}
          </button>
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={() => setEnableOnScreenKeyboard(!enableOnScreenKeyboard)}
          >
            {enableOnScreenKeyboard ? "Disable KeyPad" : "Enable KeyPad"}
          </button>
        </div>

        {enableOnScreenKeyboard && (
          <div style={{ ...styles.keyboard }}>
            <h2>Keypad</h2>
            <div style={styles.keyboardButtons}>
              {generateKeyboardButtons()}
            </div>
            <div
              className="btn-group"
              role="group"
              aria-label="First group"
              style={{ margin: "10px", display: "flex", flexWrap: "wrap" }}
            >
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={toggleCase}
                style={getToggleCaseButtonStyle(isUpperCase)}
              >
                <img
                  src={toggleCaseImg}
                  style={styles.funKeyButtonImg}
                  alt="toggle case"
                />
              </button>
              <button
                type="button"
                className="btn btn-outline-dark"
                style={{ width: "200px" }}
                onClick={()=>handleFunctinalStroke("Space")}
              >
                Space
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={()=>handleFunctinalStroke("Backspace")}
              >
                Backspace
              </button>
            </div>
          </div>
        )}

        {connectionStatus === "success" && (
          <Remote
            enableRemote={enableRemote}
            handleRemoteButtonClick={handleRemoteButtonClick}
          />
        )}

          {/* {
            connectionStatus === "success" &&
            <RokuChannels ipAddress={ipAddress}/>
          } */}

          

        {showModal && (
          <Modal
            header={modalHeader}
            message={modalMessage}
            onClose={closeModal}
          />
        )}
        <Footer
          ipAddress={ipAddress}
          handleDeeplink={handleDeeplink}
          connectionStatus={connectionStatus}
        />
      </div>
    </>
  );
};

export default App;
