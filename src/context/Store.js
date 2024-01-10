import { createContext, useReducer } from "react";

import { actx, filter, gain } from "../lib/audio";
import Osc from "./Osc";

export const CTX = createContext();

const nodes = [];

export const reducer = (state, { payload, type }) => {
  const { value, id, freq } = payload || {};

  switch (type) {
    case "MAKE_OSC": {
      const newOsc = new Osc(
        actx,
        state.oscSettings.type,
        freq,
        state.oscSettings.detune,
        state.envelope,
        gain
      );
      nodes.push(newOsc);
      return { ...state };
    }

    case "KILL_OSC": {
      const i = nodes.findIndex(
        (node) => Math.round(node.osc.frequency.value) === Math.round(freq)
      );
      if (i >= 0) {
        nodes[i].stop();
        nodes.splice(i, 1);
      }

      return { ...state };
    }

    case "CHANGE_OSC": {
      return { ...state, oscSettings: { ...state.oscSettings, [id]: value } };
    }

    case "CHANGE_OSC_TYPE": {
      return { ...state, oscSettings: { ...state.oscSettings, type: id } };
    }

    case "CHANGE_FILTER": {
      filter[id].value = value;
      return {
        ...state,
        filterSettings: { ...state.filterSettings, [id]: value },
      };
    }

    case "CHANGE_FILTER_TYPE": {
      filter.type = id;
      return {
        ...state,
        filterSettings: { ...state.filterSettings, type: id },
      };
    }

    case "CHANGE_ADSR": {
      return { ...state, envelope: { ...state.envelope, [id]: Number(value) } };
    }

    default:
      return { ...state };
  }
};

export default function Store(props) {
  const initState = {
    oscSettings: { detune: 0, type: "sine" },
    filterSettings: {
      frequency: filter.frequency.value,
      detune: filter.detune.value,
      Q: filter.Q.value,
      gain: filter.gain.value,
      type: filter.type,
    },
    envelope: { attack: 0.005, decay: 0.1, sustain: 0.6, release: 0.1 },
  };
  const stateHook = useReducer(reducer, initState);

  return <CTX.Provider value={stateHook}>{props.children}</CTX.Provider>;
}
