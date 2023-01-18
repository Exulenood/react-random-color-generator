export default function Testconainer(props) {
  return (
    <input
      value={props.valueA}
      name="testText"
      onChange={(event) => props.valAUpdate(event.currentTarget.value)}
    />
  );
}
