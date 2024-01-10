import { useContext } from "react";

import { CTX } from "../context/Store";

export default function ADSR() {
  const [appState, updateState] = useContext(CTX);

  const { attack, decay, sustain, release } = appState.envelope;

  const change = (e) => {
    const { value, id } = e.target;
    updateState({ type: "CHANGE_ADSR", payload: { id, value } });
  };

  return (
    <div className="control">
      <h2>ADSR</h2>

      <div className="param">
        <h3>attack</h3>
        <input
          id="attack"
          type="range"
          max="2"
          step="0.02"
          defaultValue={attack}
          onChange={change}
        />
      </div>

      <div className="param">
        <h3>decay</h3>
        <input
          id="decay"
          type="range"
          max="1"
          step="0.01"
          defaultValue={decay}
          onChange={change}
        />
      </div>

      <div className="param">
        <h3>sustain</h3>
        <input
          id="sustain"
          type="range"
          max="1"
          step="0.01"
          defaultValue={sustain}
          onChange={change}
        />
      </div>

      <div className="param">
        <h3>release</h3>
        <input
          id="release"
          type="range"
          max="2"
          step="0.02"
          defaultValue={release}
          onChange={change}
        />
      </div>
    </div>
  );
}
