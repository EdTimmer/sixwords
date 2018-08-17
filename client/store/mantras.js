import axios from 'axios';

const GET_MANTRAS = 'GET_MANTRAS';
const UPDATE_MANTRA = 'UPDATE_MANTRA';
const CREATE_MANTRA = 'CREATE_MANTRA';
const DELETE_MANTRA = 'DELETE_MANTRA';

const addMantrasToStore = mantras => {
  const action = { type: GET_MANTRAS, mantras };
  return action;
};

const createMantraInStore = mantra => {
  // console.log('createMantraInStore got called')
  const action = { type: CREATE_MANTRA, mantra};
  return action;
};

const deleteMantraInStore = mantra => {
  const action = { type: DELETE_MANTRA, mantra };
  return action;
};

const updateMantraInStore = mantra => {
  const action = { type: UPDATE_MANTRA, mantra };
  return action;
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case GET_MANTRAS:
      return action.mantras;
    case CREATE_MANTRA:
      return [...state, action.mantra];
    case DELETE_MANTRA:
      return state.filter(mantra => mantra.id !== action.mantra.id);
    case UPDATE_MANTRA:
      return state.map(mantra => mantra.id === action.mantra.id ? action.mantra : mantra);
    default:
      return state;
  }
};

export const getMantras = () => (
  dispatch => (
    axios.get('/v1/mantras')
      .then(result => result.data)
      .then(mantras => dispatch(addMantrasToStore(mantras)))
  )
);

export const deleteMantra = (mantra, history) => (
  dispatch => (
    axios.delete(`/v1/mantras/${mantra.id}`)
      .then( () => dispatch(deleteMantraInStore(mantra)))
      .then( () => history.push('/v1/home'))
  )
);

// export const saveMantra = (mantra) => (  
//   mantra.id ? (
//     dispatch => (
//       axios.put(`/v1/mantras/${mantra.id}`, mantra)
//         .then(result => result.data)
//         .then(mantra => dispatch(updateMantraInStore(mantra)))
//     )
//   ) : (
//     dispatch => (
//       // console.log('dispatch got called')
//       axios.post('/v1/mantras', mantra)
//         // .then(result => console.log('result in dispatch is:', result))
//         .then(result => result.data)
//         // .then(mantra => console.log('mantra in dispatch is:', mantra))
//         .then(mantra => dispatch(createMantraInStore(mantra)))
//     )
//   )
// );

export const saveMantra = (mantra, history) => (
  dispatch => (
    axios.post('/v1/mantras', mantra)
      .then(result => result.data)
      .then(mantra => dispatch(createMantraInStore(mantra)))
      .then( () => history.push('/mantras'))
  ) 
)

export default reducer;
