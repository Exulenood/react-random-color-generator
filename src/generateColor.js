import rcolor from 'rcolor';

function effectiveHueFactor(hueRange, spreadToFraction) {
  switch (hueRange) {
    case 'wholeRange':
      return Math.random();

    case 'red':
      return spreadToFraction * Math.random() + (1 - spreadToFraction / 2);

    case 'green':
      return spreadToFraction * Math.random() + (1 / 3 - spreadToFraction / 2);

    case 'blue':
      return spreadToFraction * Math.random() + (2 / 3 - spreadToFraction / 2);

    default:
      return Math.random();
  }
}

function effectiveSatFactor(luminosity) {
  if (luminosity === 'light') {
    return 1 / 2 - (Math.random() * 1) / 3;
  } else {
    return 1;
  }
}

function effectiveConFactor(luminosity) {
  if (luminosity === 'dark') {
    return 1 / 2 - (Math.random() * 1) / 3;
  } else {
    return 1;
  }
}

export default function generateColor(hueRange, hueSpread, luminosity) {
  const spreadToFraction = 1 / (360 / hueSpread);
  return rcolor({
    hue: effectiveHueFactor(hueRange, spreadToFraction) % 1,
    saturation: effectiveSatFactor(luminosity),
    value: effectiveConFactor(luminosity),
  });
}
