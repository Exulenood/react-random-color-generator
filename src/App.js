import { useState } from 'react';
import ColorDisplay from './components/colorDisplay';
import generateColor from './components/generateColor';
import HueRange from './components/hueRange';
import HueSpread from './components/hueSpread';
import LumiOptions from './components/lumiOptions';

export default function App() {
  const [hueRange, setHueRange] = useState('wholeRange');
  const [hueSpread, setHueSpread] = useState(70);
  const [luminosity, setLuminosity] = useState('standard');
  const [genColor, setGenColor] = useState();

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
