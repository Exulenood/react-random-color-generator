import { useState } from 'react';
import generateColor from './generateColor';
import Testconainer from './testContainer';

export default function App() {
  const [genColor, setGenColor] = useState(); // Main Stat to pass the effective HexCode for the Color
  const [hueRange, setHueRange] = useState('wholeRange'); // Stat to pass the hueRange wholeRange/red/green/blue selected from radio Buttons named "hueRange" to generateColor.js
  const [hueSpread, setHueSpread] = useState(60); // Stat to pass the spread (the width of the angle in the color circle) to generateColor.js
  const [luminosity, setLuminosity] = useState('standard'); // Stat to pass the Lightness standard/light/dark selected from the radio Buttons named "conRange" to generateColor.js
  // #########  STAT TEST RANGE START ##############

  const [valueA, setValueA] = useState('Test');
  // const [valueB, setValueB] = useState(1000);
  // const [valueC, setValueC] = useState(2);
  // const [valueD, setValueD] = useState(0);

  // #########  STAT TEST RANGE END ##############

  return (
    <div>
      <h1>RANDOM COLOR GENERATOR</h1>
      <div>
        <Testconainer valueA={valueA} valAUpdate={setValueA} />
        Hue Options:
        <br />
        <input
          type="radio"
          value="wholeRange"
          name="hueRange"
          defaultChecked
          onChange={(hue) => setHueRange(hue.target.value)}
        />
        whole spectrum
        {'   '}
        <input
          type="radio"
          value="red"
          name="hueRange"
          onChange={(hue) => setHueRange(hue.target.value)}
        />
        red
        {'   '}
        <input
          type="radio"
          value="green"
          name="hueRange"
          onChange={(hue) => setHueRange(hue.target.value)}
        />
        green
        {'   '}
        <input
          type="radio"
          value="blue"
          name="hueRange"
          onChange={(hue) => setHueRange(hue.target.value)}
        />
        blue
        <br />
      </div>
      <div>
        Hue Spread:
        {'   '}
        <input
          type="range"
          min="20"
          max="120"
          step="1"
          defaultValue="60"
          onChange={(spread) => setHueSpread(spread.target.value)}
        />
        {'   '}
        {hueSpread} degrees
      </div>

      <div>
        Lightness Options:
        <br />
        <input
          type="radio"
          value="standard"
          name="conRange"
          defaultChecked
          onChange={(con) => setLuminosity(con.target.value)}
        />
        standard
        {'   '}
        <input
          type="radio"
          value="light"
          name="conRange"
          onChange={(con) => setLuminosity(con.target.value)}
        />
        light
        {'   '}
        <input
          type="radio"
          value="dark"
          name="conRange"
          onChange={(con) => setLuminosity(con.target.value)}
        />
        dark
      </div>

      <button
        onClick={() => {
          setGenColor(generateColor(hueRange, hueSpread, luminosity));
        }}
      >
        Generate
      </button>
      <br />
      {console.log(valueA)}
      <div>Color: {genColor}</div>
    </div>
  );
}
