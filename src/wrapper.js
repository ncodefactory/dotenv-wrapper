require('dotenv').config();

const setStringValue = (dotEnvName, defaultStringValue) =>
  process.env[dotEnvName] || defaultStringValue;

const setNumberValue = (dotEnvName, defaultNumberValue) => {
  const value = process.env[dotEnvName];
  const numberValue = Number(value);
  return value == null ||
    value === '' ||
    Number.isNaN(value) ||
    Number.isNaN(numberValue)
    ? defaultNumberValue
    : numberValue;
};

const setBoolValue = (dotEnvName, defaultBoolValue) => {
  const value = process.env[dotEnvName];
  const boolTrue = String(value).toLowerCase() === 'true';
  const boolFalse = String(value).toLowerCase() === 'false';

  return boolTrue || boolFalse ? !!boolTrue : defaultBoolValue;
};

class Wrapper {
  addBoolean = (dotEnvName, defaultValue) => {
    this[dotEnvName] = setBoolValue(dotEnvName, defaultValue);
  };

  addString = (dotEnvName, defaultValue) => {
    this[dotEnvName] = setStringValue(dotEnvName, defaultValue);
  };

  addNumber = (dotEnvName, defaultValue) => {
    this[dotEnvName] = setNumberValue(dotEnvName, defaultValue);
  };
}

export { setBoolValue, setNumberValue, setStringValue };
export default Wrapper;
