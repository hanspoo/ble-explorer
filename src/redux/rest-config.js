/* eslint no-undef: 0 */

// En producción ejecutar
// export REACT_APP_MODE=dev en el ambiente
// https://serverless-stack.com/chapters/manage-environments-in-create-react-app.html

const IP = 'localhost';
const PORT = '9000';

const ENDPOINT = __DEV__ ? `http://${IP}:${PORT}` : 'https://www.acticare.cl';
const WS_ENDPOINT = __DEV__ ? `ws://${IP}:${PORT}` : 'wss://www.acticare.cl';

const mostrarPerimetro = true;
const defaultPrecision = 120;

const strokeColor = 'rgba(0,0,255,0.25)';
const fillColor = 'rgba(0,0,255,0.15)';

const latitudeDelta = 0.01;
const longitudeDelta = 0.01;

const devMode = !!__DEV__;
export {
  ENDPOINT,
  WS_ENDPOINT,
  mostrarPerimetro,
  defaultPrecision,
  strokeColor,
  fillColor,
  latitudeDelta,
  longitudeDelta,
  devMode
};

export default ENDPOINT;
