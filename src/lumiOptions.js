export default function LumiOptions(props) {
  return (
    <div>
      <h3>Luminosity Options</h3>
      <input
        type="radio"
        value="standard"
        name="conRange"
        defaultChecked={props.luminosity === 'standard'}
        onChange={(event) => props.luminosityUpdate(event.currentTarget.value)}
      />
      standard
      {'   '}
      <input
        type="radio"
        value="light"
        name="conRange"
        checked={props.luminosity === 'light'}
        onChange={(event) => props.luminosityUpdate(event.currentTarget.value)}
      />
      light
      {'   '}
      <input
        type="radio"
        value="dark"
        name="conRange"
        checked={props.luminosity === 'dark'}
        onChange={(event) => props.luminosityUpdate(event.currentTarget.value)}
      />
      dark
    </div>
  );
}
