import React, {useState} from "react";
import './App.css';
import SliderContainer from "./Slider";
import SwitchContainer from "./Switch";
import Bottom from "./Bottom"

function App() {

  const [switchActive, setSwitchActive] = useState(false)
  
  const handleSwitch = () => {
    (switchActive)? setSwitchActive(false) : setSwitchActive(true);
  }

  return (
    <div className="App">
      <h1>Simple, traffic-based pricing</h1>
      <p>Sign-up for our 30-day trial. No credit card required.</p>

    <div className="component-container">
      <SliderContainer 
        switchActive={switchActive}
      />
      <SwitchContainer 
        isActive={switchActive}
        handleSwitch={handleSwitch}
      />
      <Bottom />
    </div>
    </div>
  );
}

export default App;
