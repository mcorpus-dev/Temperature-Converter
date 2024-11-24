export const getConvertedUnit = (unit: string) => {
  return unit === "°C" ? "°F" : "°C";
};

export const getConvertedTemperature = (temperature: string, unit: string) => {
  const temp = Number(temperature);

  if (isNaN(temp)) {
    return "";
  } else if (unit === "°C") {
    return (temp * (9 / 5) + 32).toFixed(1);
  } else {
    return ((temp - 32) * (5 / 9)).toFixed(1);
  }
};

export const isCold = (temperature: string, unit: string) => {
  const temp = Number(temperature);

  if (unit === "°C") {
    return temp <= 0;
  } else {
    return temp <= 32;
  }
};
