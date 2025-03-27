const convertToCelsius = function(temp) {
  const result = (temp -32) / 1.8;

  return +result.toFixed(1);
};

const convertToFahrenheit = function(temp) {
  const result = (temp * 1.8) + 32;

  return +result.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
