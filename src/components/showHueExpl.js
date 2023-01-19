import showBlueHue from '../images/showBlueHue.png';
import showGreenHue from '../images/showGreenHue.png';
import showRedHue from '../images/showRedHue.png';

export default function ShowHueExpl(props) {
  if (props.hueRange === 'red') {
    return (
      <div>
        {' '}
        <br />
        <img
          className="hueExplImage"
          src={showRedHue}
          alt="Eplanation of Hue Spread"
          width="150 rem"
        />
      </div>
    );
  } else if (props.hueRange === 'green') {
    return (
      <div>
        {' '}
        <br />
        <img
          className="hueExplImage"
          src={showGreenHue}
          alt="Eplanation of Hue Spread"
          width="150 rem"
        />
      </div>
    );
  } else {
    return (
      <div>
        {' '}
        <br />
        <img
          className="hueExplImage"
          src={showBlueHue}
          alt="Eplanation of Hue Spread"
          width="150 rem"
        />
      </div>
    );
  }
}
