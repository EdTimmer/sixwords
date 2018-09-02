import axios from 'axios';

const GET_MANDALAS = 'GET_MANDALAS';
const UPDATE_MANDALA = 'UPDATE_MANDALA';
const CREATE_MANDALA = 'CREATE_MANDALA';
const DELETE_MANDALA = 'DELETE_MANDALA';

const addMandalasToStore = mandalas => {
  const action = { type: GET_MANDALAS, mandalas };
  return action;
};

const createMandalaInStore = mandala => {
  // console.log('createMandalaInStore got called')
  const action = { type: CREATE_MANDALA, mandala};
  return action;
};

const deleteMandalaInStore = mandala => {
  const action = { type: DELETE_MANDALA, mandala };
  return action;
};

const updateMandalaInStore = mandala => {
  const action = { type: UPDATE_MANDALA, mandala };
  return action;
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case GET_MANDALAS:
      return action.mandalas;
    case CREATE_MANDALA:
      return [...state, action.mandala];
    case DELETE_MANDALA:
      return state.filter(mandala => mandala.id !== action.mandala.id);
    case UPDATE_MANDALA:
      return state.map(mandala => mandala.id === action.mandala.id ? action.mandala : mandala);
    default:
      return state;
  }
};

export const getMandalas = () => (
  dispatch => (
    axios.get('/v1/mandalas')
      .then(result => result.data)
      .then(mandalas => dispatch(addMandalasToStore(mandalas)))
  )
);

export const deleteMandala = (mandala, history) => (
  dispatch => (
    axios.delete(`/v1/mandalas/${mandala.id}`)
      .then( () => dispatch(deleteMandalaInStore(mandala)))
      .then( () => history.push('/mandalas'))
  )
);

export const saveMandala = (mandala, history) => (
  dispatch => (
    axios.post('/v1/mandalas', mandala)
      .then(result => result.data)
      .then(mandala => dispatch(createMandalaInStore(mandala)))
      .then(() => history.push('./mandalas'))
  )
);

export const updateMandala = (mandala, history) => (
  dispatch => (
    axios.put(`/v1/mandalas/${mandala.id}`, mandala)
      .then(result => result.data)
      .then(mandala => dispatch(updateMandalaInStore(mandala)))
      .then( () => history.push('/mandalas'))
  )
);

export default reducer;
