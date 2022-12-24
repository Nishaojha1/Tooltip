import Navbar from "./components/Navbar";
import Tooltip from "./components/Tooltip";
import "./index.css";
import { useState } from "react";
function App() {
  // setting initial state as nothing 
  const [position, setPosition] = useState("nothing");
  // when position is come back from  nave bar we use below function to render them as new state
  const toggleMode = (position) => {
    setPosition(position);
  };
  return (
    <>
      <div className="App">
        {/* adding navbar and tooltip as component */}
        <Navbar position={position} toggleMode={toggleMode} />
        <Tooltip position={position} />
      </div>
    </>
  );
}

export default App;
