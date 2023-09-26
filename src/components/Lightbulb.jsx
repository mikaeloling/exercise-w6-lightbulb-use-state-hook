import { useState } from "react";
export const Lightbulb = () => {
  // Initialize the state for on/off
  const [color, setColor] = useState(false);

  const toggleLight = () => {
    // Toggle the on/off state
    
    setColor((c) => !c);
    console.log(color);
    //write code here

    console.log("Clicked");
    
    // Change the color of the lightbulb
  };

  color ? console.log("yellow") : console.log("black");

  return (
    <div className="lightbulb-container">
      <div className= {
        `${"lightbulb"} ${color ? "on" : "off"}
        `} 
        // Add the class "on" or "off" based on the state

        onClick={toggleLight}>
        <div className="bulb"></div>
      </div>
    </div>
  );
};
