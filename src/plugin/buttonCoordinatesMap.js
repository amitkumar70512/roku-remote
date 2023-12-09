
import slingImg from '../images/sling.png'
import netflixImg from '../images/netflix.png'
const  buttonCoordinatesMap = {
  PowerOff: { left:'46%',  top:'3%', width:'40px', height:'40px', borderRad:'30px' }, 
    LED: { left:'47%',  top:'8.5%', width:'1px', height:'1px', borderRad:'10px' }, 
    Back: { left:'36%',  top:'11.2%', width:'80px', height:'40px', borderRad:'10px' }, 
    Home: { left:'50.5%',  top:'11.2%',  width:'80px', height:'40px' , borderRad:'10px' }, 
    Select:  { left:'44.5%',  top:'25%', width:'60px',  height:'60px', borderRad:'30px' }, 
    Up: { left:'44%',  top:'19%', width:'65px', height:'40px' }, 
    Left: { left:'37%',  top:'25%', width:'45px', height:'65px' }, 
    Down:  { left:'44%',  top:'33%', width:'65px' , height:'40px'}, 
    Right: { left:'55%',  top:'25%', width:'45px', height:'65px' }, 
    InstantReplay: {left:'35%',  top:'41%', width :'60px', height:'35px',  borderRad:'10px'}, 
    Mic: {left:'46%',  top:'41%',  width :'45px',  height:'35px',  borderRad:'10px'}, 
    Info: {left:'54%',  top:'41%',  width :'60px',  height:'35px',  borderRad:'10px'}, 
    Rev: {left:'35%',  top:'46%', width :'40px', height:'60px', borderRad:'10px'}, 
    Play: {left:'43%',  top:'46%', width :'80px', height:'60px', borderRad:'20px'}, 
    Fwd: {left:'57%',  top:'46%', width :'40px', height:'60px', borderRad:'10px'}, 
    Backspace: {left:'35.2%',  top:'56%', width :'90px', height:'44px',  borderRad:'15px'}, 
    Onstream: {left:'50%',  top:'56%', width :'90px', height:'44px',  borderRad:'15px'}, 
    Netflix: {left:'35.2%',  top:'62.3%', width :'90px', height:'44px',  borderRad:'15px',imageUrl: netflixImg}, 
    Sling: {left:'50%',  top:'62.3%', width :'90px', height:'44px',  borderRad:'15px',imageUrl: slingImg}, 
  };

export default buttonCoordinatesMap