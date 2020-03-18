// Please do not change the name of this function
const rgbaModifier = (rgbaStr, percent, opacity) => {
  // Your code here
  const rgbValues = [];
  for (let i = 5; rgbValues.length < 3; ) {
    let nextComma = rgbaStr.indexOf(",", i);
    let value = Number(rgbaStr.slice(i, nextComma));
    let newValue = value + Math.round(value * (percent / 100));
    if (newValue > 255) newValue = 255;
    if (newValue < 0) newValue = 0;
    rgbValues.push(newValue);
    i = nextComma + 1;
  }
  if (opacity > 1) opacity = 1;
  if (opacity < 0) opacity = 0;
  return `rgba(${rgbValues[0]},${rgbValues[1]},${rgbValues[2]},${opacity})`;
};

module.exports = { rgbaModifier };
