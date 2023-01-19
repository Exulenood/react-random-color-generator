import ShowHueExpl from './showHueExpl';

export default function HueSpread(props) {
  if (props.hueRange !== 'wholeRange') {
    return (
      <div>
        <h4>Hue Spread:</h4>
        <input
          type="range"
          min="20"
          max="120"
          step="1"
          value={props.hueSpread}
          onChange={(event) => props.hueSpreadUpdate(event.currentTarget.value)}
        />
        {'   '}
        {props.hueSpread} degrees
        <ShowHueExpl hueRange={props.hueRange} />
      </div>
    );
  }
}
