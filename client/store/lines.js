import axios from 'axios';

const GET_LINES = 'GET_LINES';
const UPDATE_LINE = 'UPDATE_LINE';
const CREATE_LINE = 'CREATE_LINE';
const DELETE_LINE = 'DELETE_LINE';

const addLinesToStore = lines => {
  const action = { type: GET_LINES, lines };
  return action;
};

const createLineInStore = line => {
  const action = { type: CREATE_LINE, line };
  return action;
};

const deleteLineInStore = line => {
  const action = { type: DELETE_LINE, line };
  return action;
};

const updateLineInStore = line => {
  const action = { type: UPDATE_LINE, line };
  return action;
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case GET_LINES:
      return action.lines;
    case CREATE_LINE:
      return [...state, action.line];
    case DELETE_LINE:
      return state.filter(line => line.id !== action.line.id);
    case UPDATE_LINE:
      return state.map(line => line.id === action.line.id ? action.line : line);
    default:
      return state;
  }
};

export const getLines = () => (
  dispatch => (
    axios.get('/v1/lines')
      .then(result => result.data)
      .then(lines => dispatch(addLinesToStore(lines)))
  )
);

export const deleteLine = (line, history) => (
  dispatch => (
    axios.delete(`/v1/lines/${line.id}`)
      .then( () => dispatch(deleteLineInStore(line)))
      .then( () => history.push(`/v1/home`))
  )
);

export const saveLine = (line, history) => (
  line.id ? (
    dispatch => (
      axios.put(`v1/lines/${line.id}`, line)
        .then(result => result.data)
        .then(line => disptch(updateLineInStore(line)))
    )
  ) : (
    dispatch => (
      axios.post(`/v1/lines`, line)
        .then(result => result.data)
        .then(line => dispatch(createLineInStore(line)))
    )
  )
);

export default reducer;
