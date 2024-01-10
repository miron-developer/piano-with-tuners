import { useContext } from "react";

import { CTX } from "../context/Store";

export default function Osc() {
  const [appState, updateState] = useContext(CTX);

  const { type, detune } = appState.oscSettings;

  const change = (e) => {
    const { value, id } = e.target;
    updateState({ type: "CHANGE_OSC", payload: { id, value } });
  };

  const changeType = (e) => {
    const { id } = e.target;
    updateState({ type: "CHANGE_OSC_TYPE", payload: { id } });
  };

  return (
    <div className="control">
      <h2>osc</h2>

      <div className="param">
        <h3>detune</h3>
        <input
          id="detune"
          type="range"
          defaultValue={detune}
          onChange={change}
        />
      </div>

      <div className="param">
        <h3>wave</h3>
        <button
          id="sine"
          onClick={changeType}
          className={type === "sine" ? "active" : ""}
        >
          sine
        </button>
        <button
          id="triangle"
          onClick={changeType}
          className={type === "triangle" ? "active" : ""}
        >
          triangle
        </button>
        <button
          id="square"
          onClick={changeType}
          className={type === "square" ? "active" : ""}
        >
          square
        </button>
        <button
          id="sawtooth"
          onClick={changeType}
          className={type === "sawtooth" ? "active" : ""}
        >
          sawtooth
        </button>
      </div>
    </div>
  );
}
