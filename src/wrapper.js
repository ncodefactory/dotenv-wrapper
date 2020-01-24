require('dotenv').config();

const setStringValue = (value, defaultStringValue) =>
  value || defaultStringValue;

const setNumberValue = (value, defaultNumberValue) => {
  const numberValue = Number(value);
  return value == null ||
    value === '' ||
    Number.isNaN(value) ||
    Number.isNaN(numberValue)
    ? defaultNumberValue
    : numberValue;
};

const setBoolValue = (value, defaultBoolValue) => {
  const boolTrue = String(value).toLowerCase() === 'true';
  const boolFalse = String(value).toLowerCase() === 'false';

  return boolTrue || boolFalse ? !!boolTrue : defaultBoolValue;
};

class Wrapper {
  addBoolean = (dotEnvName, defaultValue) => {
    this[dotEnvName] = setBoolValue(process.env[dotEnvName], defaultValue);
  };

  addString = (dotEnvName, defaultValue) => {
    this[dotEnvName] = setStringValue(process.env[dotEnvName], defaultValue);
  };

  addNumber = (dotEnvName, defaultValue) => {
    this[dotEnvName] = setNumberValue(process.env[dotEnvName], defaultValue);
  };
}

export default Wrapper;
