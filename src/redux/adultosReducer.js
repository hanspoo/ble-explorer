import axios from 'axios';
import { PENDING, FULFILLED, REJECTED } from 'redux-promise-middleware';
import ENDPOINT from './rest-config';

const initialState = {
  loading: true,
  errorMessage: '',
  adultos: null,
  adulto: null,
  updating: false,
  updateSuccess: false
};

const entidad = 'ADULTO';

const reducer = (state = initialState, action) => {
  console.log('action', action);
  switch (action.type) {
    case `${entidad}_${REJECTED}`:
      return {
        ...state,
        errorMessage: `${action.payload.message}`,
        loading: false
      };
    case `${entidad}_${PENDING}`: {
      const newState = { ...state, loading: true };
      return newState;
    }
    case `${entidad}_${FULFILLED}`: {
      return { ...state, loading: false, adultos: action.payload.data };
    }
    case 'SET_ADULTO_ACTUAL': {
      const adulto = state.adultos.filter(a => a.id === action.payload).pop();
      return { ...state, adulto };
    }
    default:
      return state;
  }
};

export default reducer;

const createadulto = () => {};

const cargarAdultos = () => {
  const url = `${ENDPOINT}/rest-dev/manzanitas`;
  const action = { type: entidad, payload: axios.get(url) };
  return action;
};

const setAdultoActual = id => {
  const action = { type: 'SET_ADULTO_ACTUAL', payload: id };
  return action;
};

export { createadulto, cargarAdultos, setAdultoActual };
