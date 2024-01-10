import Osc from "./components/Osc";
import Filter from "./components/Filter";
import Keyboard from "./components/Keyboard";
import ADSR from "./components/ADSR";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <h1 className="center">Sliders</h1>

      <div className="settings">
        <Osc />
        <ADSR />
        <Filter />
      </div>

      <Keyboard />
    </div>
  );
}

export default App;
