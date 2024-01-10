export const actx = new AudioContext();
export const out = actx.destination;
export const gain = actx.createGain();
export const filter = actx.createBiquadFilter();

gain.connect(filter);
filter.connect(out);
