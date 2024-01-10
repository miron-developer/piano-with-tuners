import { useContext, useEffect } from "react";
import QwertyHancock from "qwerty-hancock";

import { CTX } from "../context/Store";

export default function Keyboard() {
  const [appState, updateState] = useContext(CTX);

  useEffect(() => {
    const keyboard = new QwertyHancock({
      id: "keyboard",
      width: 449,
      height: 70,
      octaves: 2,
      startNote: "C4",
      whiteKeyColour: "rgb(28, 198, 186)",
      blackKeyColour: "rgb(10, 70, 67)",
      activeColour: "rgb(166, 49, 172)",
      borderColour: "white",
    });

    keyboard.keyDown = (note, freq) => {
      updateState({ type: "MAKE_OSC", payload: { note, freq } });
    };

    keyboard.keyUp = (note, freq) => {
      updateState({ type: "KILL_OSC", payload: { note, freq } });
    };
  }, [updateState]);

  return (
    <div className="keyboard">
      <div id="keyboard"></div>
    </div>
  );
}
