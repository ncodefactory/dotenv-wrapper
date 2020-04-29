import { moduleName, moduleVersion } from './module';
import dotEnvWrapper, {
  setBoolValue,
  setNumberValue,
  setStringValue,
} from './wrapper';

export default dotEnvWrapper;
export { setBoolValue, setNumberValue, setStringValue };
export { moduleName, moduleVersion };
