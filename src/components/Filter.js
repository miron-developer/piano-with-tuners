import { useContext } from "react";

import { CTX } from "../context/Store";

export default function Filter() {
  const [appState, updateState] = useContext(CTX);

  const { type, frequency, detune, Q, gain } = appState.filterSettings;

  const change = (e) => {
    const { value, id } = e.target;
    updateState({ type: "CHANGE_FILTER", payload: { id, value } });
  };

  const changeType = (e) => {
    const { id } = e.target;
    updateState({ type: "CHANGE_FILTER_TYPE", payload: { id } });
  };

  return (
    <div className="control">
      <h2>filter</h2>

      <div className="param">
        <h3>frequency</h3>
        <input
          id="frequency"
          max="10000"
          type="range"
          defaultValue={frequency}
          onChange={change}
        />
      </div>

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
        <h3>Q</h3>
        <input
          id="Q"
          max="10"
          type="range"
          step="0.1"
          defaultValue={Q}
          onChange={change}
        />
      </div>

      <div className="param">
        <h3>gain</h3>
        <input
          id="gain"
          max="10"
          type="range"
          step="0.1"
          defaultValue={gain}
          onChange={change}
        />
      </div>

      <div className="param">
        <h3>type</h3>
        <button
          id="lowpass"
          onClick={changeType}
          className={type === "lowpass" ? "active" : ""}
        >
          lowpass
        </button>
        <button
          id="highpass"
          onClick={changeType}
          className={type === "highpass" ? "active" : ""}
        >
          highpass
        </button>
        <button
          id="notch"
          onClick={changeType}
          className={type === "notch" ? "active" : ""}
        >
          notch
        </button>
        <button
          id="lowshelf"
          onClick={changeType}
          className={type === "lowshelf" ? "active" : ""}
        >
          lowshelf
        </button>
        <button
          id="highshelf"
          onClick={changeType}
          className={type === "highshelf" ? "active" : ""}
        >
          highshelf
        </button>
      </div>
    </div>
  );
}
