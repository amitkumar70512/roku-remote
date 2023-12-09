import React from 'react';
import '../App.css'
import remoteImg from '../images/roku-remote-background.png'
import buttonCoordinatesMap from '../plugin/buttonCoordinatesMap'

const RemoteButton = ({ onClick,  left,  top,  width,  height,  borderRad,imageUrl}) => (
  <button
    onClick={onClick}
    style={{
      position:'absolute', 
      left, 
      top, 
      width, 
      height, 
      padding:'10px', 
      fontSize:'16px', 
      margin:'5px', 
      cursor:'pointer', 
      backgroundColor:'transparent', 
      borderRadius: borderRad ?? '5px', 
      transition:'background-color 0.3s',  // Smooth transition for hover effect
      backgroundImage: `url(${imageUrl})`,
      backgroundSize: 'contain',
      // Hover styles
      ':hover': {
        backgroundColor:'red',  // Hover background color
        color:'#fff',  // Hover text color
      }, 
    }}
  >
  </button>
);




const Remote= ({enableRemote,handleRemoteButtonClick}) => {
  const specialKeys = [
    'Home',  'Rev',  'Fwd',  'Play', 
    'Left',  'Right',  'Down',  'Up',  'Back', 'Mic', 
    'InstantReplay',  'Info',  'Backspace',  'Onstream',  'Select', 'LED', 'PowerOff', 'Netflix', 'Sling'
  ];


  const renderButtons = () => {
    return specialKeys.map((key) => (
      <RemoteButton
        key={key}
        keyName={key}
        onClick={() => handleRemoteButtonClick(key)}
        {...buttonCoordinatesMap[key]}
      />
    ));
  };

  return (
    <>
    {
      enableRemote && 
      <div className='mobile-remote' style={{padding: '40px',marginBottom: '10%'}}>
          <div style={{position:'relative', width:'700px'}}> 
          <img src={remoteImg} alt="Remote" style={{ }} />
          {renderButtons()}
        </div>
      </div>
    }
    </>
  );
};

export default Remote;
