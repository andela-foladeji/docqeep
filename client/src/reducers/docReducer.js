const docReducer = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_DOC_FULFILLED': {
      const response = action.payload.data;
      response.pending = false;
      state = { ...state, ...response };
      break;
    }
    case 'CREATE_DOC_REJECTED': {
      const response = action.payload.data;
      response.pending = false;
      state = { ...state, ...response };
      break;
    }
    case 'CREATE_DOC_PENDING': {
      state = { ...state, ...{ pending: true } };
      break;
    }
    case 'GET_DOC_FULFILLED': {
      const response = action.payload.data;
      state = { ...state, ...response };
      break;
    }
    case 'GET_DOC_REJECTED': {
      const response = action.payload.data;
      state = { ...state, ...response };
      break;
    }
    case 'GET_A_DOC_FULFILLED': {
      const response = action.payload.data;
      response.pending = false;
      state = { ...state, ...response };
      break;
    }
    case 'GET_A_DOC_PENDING': {
      state = { ...state, ...{ pending: true } };
      break;
    }
    case 'GET_A_DOC_REJECTED': {
      const response = action.payload.data;
      response.pending = false;
      state = { ...state, ...response };
      break;
    }
  }
  return state;
};

export default docReducer;
