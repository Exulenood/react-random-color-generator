export default function ColorDisplay(props) {
  return (
    <div style={{ backgroundColor: props.genColor }}>
      Generated Color: {props.genColor}
    </div>
  );
}
