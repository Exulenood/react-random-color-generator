export default function HueRange(props) {
  return (
    <div>
      <h3>Hue Options:</h3>
      <h4>Hue Range:</h4>
      <input
        type="radio"
        value="wholeRange"
        name="hueRange"
        defaultChecked={props.hueRange === 'wholeRange'}
        onChange={(event) => props.hueRangeUpdate(event.currentTarget.value)}
      />
      whole spectrum
      {'   '}
      <input
        type="radio"
        value="red"
        name="hueRange"
        checked={props.hueRange === 'red'}
        onChange={(event) => props.hueRangeUpdate(event.currentTarget.value)}
      />
      red
      {'   '}
      <input
        type="radio"
        value="green"
        name="hueRange"
        checked={props.hueRange === 'green'}
        onChange={(event) => props.hueRangeUpdate(event.currentTarget.value)}
      />
      green
      {'   '}
      <input
        type="radio"
        value="blue"
        name="hueRange"
        checked={props.hueRange === 'blue'}
        onChange={(event) => props.hueRangeUpdate(event.currentTarget.value)}
      />
      blue
      <br />
    </div>
  );
}
