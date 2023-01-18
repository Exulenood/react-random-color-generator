import { useState } from 'react';
import ColorDisplay from './colorDisplay';
import generateColor from './generateColor';
import HueRange from './hueRange';
import HueSpread from './hueSpread';
import LumiOptions from './lumiOptions';

export default function App() {
  const [genColor, setGenColor] = useState();
  const [hueRange, setHueRange] = useState('wholeRange');
  const [hueSpread, setHueSpread] = useState(70);
  const [luminosity, setLuminosity] = useState('standard');

  return (
    <div>
      <h1>RANDOM COLOR GENERATOR</h1>
      <div>
        <HueRange hueRange={hueRange} hueRangeUpdate={setHueRange} />
      </div>
      <div>
        <HueSpread
          hueRange={hueRange}
          hueSpread={hueSpread}
          hueSpreadUpdate={setHueSpread}
        />
      </div>
      <div>
        <LumiOptions luminosity={luminosity} luminosityUpdate={setLuminosity} />
      </div>
      <br />
      <br />
      <button
        onClick={() => {
          setGenColor(generateColor(hueRange, hueSpread, luminosity));
        }}
      >
        Generate
      </button>
      <br />
      <br />

      <div>
        <ColorDisplay genColor={genColor} />
      </div>
      {console.log(`HueRange:${hueRange}`)}
      {console.log(`HueSpread:${hueSpread}`)}
      {console.log(`Luminosity:${luminosity}`)}
    </div>
  );
}
