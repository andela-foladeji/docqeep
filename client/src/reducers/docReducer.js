const docReducer = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_DOC_FULFILED': {
      const response = action.payload.data;
      console.log(response);
      state = { ...state, ...response };
      break;
    }
    case 'CREATE_DOC_REJECTED': {
      const response = action.payload.response.data;
      console.log(response);
      state = { ...state, ...response };
      break;
    }
    case 'CREATE_DOC_PENDING': {
      // state = { ...state, ...action.payload };
      break;
    }
  }
  return state;
};

export default docReducer;
