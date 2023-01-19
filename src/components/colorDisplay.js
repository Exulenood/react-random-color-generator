export default function ColorDisplay(props) {
  return (
    <div
      style={{
        backgroundColor: props.genColor,
        height: '20vh',
        paddingTop: '2rem',
        paddingLeft: '1rem',
        fontWeight: 'bold',
        fontSize: '2rem',
        border: 'black solid 3px',
      }}
    >
      Generated Color: {props.genColor}
    </div>
  );
}
